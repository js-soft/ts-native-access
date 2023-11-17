import { ILogger } from "@js-soft/logging-abstractions";
import { INativeNotificationAccess, INativeNotificationScheduleOptions, NativeErrorCodes } from "@js-soft/native-abstractions";
import { ApplicationError, Result } from "@js-soft/ts-utils";

export class WebNotificationAccess implements INativeNotificationAccess {
    private actions: Record<string, Function> = {}; // In memory storage of all actions => Callbacks are lost when application closes
    private callbacks: Record<string, Function> = {}; // In memory storage of all selection callbacks => Callbacks are lost when application closes

    public constructor(
        private readonly logger: ILogger,
        private readonly serviceWorker: ServiceWorkerRegistration
    ) {}

    public init(): Promise<Result<void>> {
        // receive notificationaction from service worker and call memorized handler
        const broadcast = new BroadcastChannel("notificationclick");
        broadcast.onmessage = (event) => {
            const action = event.data.action;
            if (action !== "") {
                const callback = this.actions[action];
                callback();
            } else {
                const callback = this.callbacks[event.data.notId];
                callback();
            }
        };

        const result = Result.ok(undefined);
        return Promise.resolve(result);
    }

    public async schedule(title: string, body: string, options?: INativeNotificationScheduleOptions): Promise<Result<number>> {
        if (options?.textInput) this.logger.warn("textInput action not supported on this platform");

        const id = options?.id ? options.id : Math.round(Math.random() * 1000);
        const actions = options?.buttonInput?.map(({ title, callback }) => {
            const action = `${id.toString()}_${title}`; // String identifying the action
            this.actions[action] = callback;
            return { action, title };
        });
        if (options?.callback) this.callbacks[id] = options.callback;

        try {
            await this.serviceWorker.showNotification(title, {
                body: body,
                icon: "assets/images/logo.png",
                tag: id.toString(),
                data: options?.data,
                actions,
                requireInteraction: !!options?.buttonInput
            });
        } catch (err) {
            return Result.fail(new ApplicationError(NativeErrorCodes.NOTIFICATION_UNKNOWN, `Scheduling Notification Failed! Reason: ${err}`));
        }

        return Result.ok(id);
    }

    public async update(id: number, title: string, body: string, options?: INativeNotificationScheduleOptions): Promise<Result<void>> {
        await this.schedule(title, body, { ...options, id });
        return Result.ok(undefined);
    }

    public async clear(id: number): Promise<Result<void>> {
        const notifications = await this.serviceWorker.getNotifications({ tag: id.toString() });
        notifications.forEach((notification: Notification) => notification.close());
        return Result.ok(undefined);
    }

    public async clearAll(): Promise<Result<void>> {
        const notifications = await this.serviceWorker.getNotifications();
        notifications.forEach((notification: Notification) => notification.close());
        return Result.ok(undefined);
    }

    public async getAll(): Promise<Result<number[]>> {
        const notifications = await this.serviceWorker.getNotifications();
        const ids: number[] = notifications.map((notification: Notification) => Number.parseInt(notification.tag));
        return Result.ok(ids);
    }
}
