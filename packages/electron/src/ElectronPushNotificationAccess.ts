import { ILogger } from "@js-soft/logging-abstractions";
import {
    IElectronConfig,
    INativeConfigAccess,
    INativeEventBus,
    INativePushNotification,
    INativePushNotificationAccess,
    RemoteNotificationEvent,
    RemoteNotificationRegistrationEvent
} from "@js-soft/native-abstractions";
import { Result } from "@js-soft/ts-utils";
// @ts-expect-error
import push from "push-receiver";

export class PersistentIDs {
    public constructor(public readonly config: INativeConfigAccess) {}

    private ids: Record<string, number>;

    public async save(): Promise<void> {
        const electronConfig: IElectronConfig = this.config.get("electron").value;
        this.config.set("electron", { ...electronConfig, persistentIDs: this.ids });
        await this.config.save();
    }
    public load(): void {
        const electronConfig: IElectronConfig = this.config.get("electron").value;
        this.ids = electronConfig.persistentIDs || {};
    }
    public getIDs(): string[] {
        return Object.keys(this.ids);
    }
    public addID(id: string): void {
        this.ids[id] = Date.now();
    }
    public removeID(id: string): void {
        delete this.ids[id];
    }
    public removeIDsSinceDays(days: number): void {
        const currentTime = Date.now();
        for (const id in this.ids) {
            const timeDifference = currentTime - this.ids[id];
            const dayDifference = timeDifference / (1000 * 60 * 60 * 24);
            if (dayDifference >= days) {
                this.removeID(id);
            }
        }
    }
}

export class ElectronPushNotificationAccess implements INativePushNotificationAccess {
    public constructor(private readonly logger: ILogger, private readonly config: INativeConfigAccess, private readonly eventBus: INativeEventBus) {}

    public async init(): Promise<Result<void>> {
        let electronConfig: IElectronConfig = this.config.get("electron").value;
        if (!electronConfig.pushCredentials) {
            const credentials = await push.register(electronConfig.fcmSenderId);
            this.config.set("electron", { ...electronConfig, pushCredentials: credentials });
            this.config.set("pushToken", credentials.fcm.token);
            this.eventBus.publish(new RemoteNotificationRegistrationEvent(credentials.fcm.token));
            await this.config.save();
        }
        electronConfig = this.config.get("electron").value;
        const credentials = electronConfig.pushCredentials;

        const persistentIDs = new PersistentIDs(this.config);

        persistentIDs.load();
        persistentIDs.removeIDsSinceDays(electronConfig.persistentIDsremoveDays);
        const persistentIds = persistentIDs.getIDs();

        await push.listen({ ...credentials, persistentIds }, async (notification: any) => {
            persistentIDs.addID(notification.persistentId);
            await persistentIDs.save();
            const data = notification.notification.data;
            if (!data?.content) {
                this.logger.error("No payload found in push notification! Wrong format or test message.");
            } else {
                const notification: INativePushNotification = {
                    id: data.notId,
                    foreground: true,
                    content: JSON.parse(data.content)
                };
                this.eventBus.publish(new RemoteNotificationEvent(notification));
            }
        });

        return Result.ok(undefined);
    }
}
