import { ILogger } from "@js-soft/logging-abstractions";
import {
    INativeConfigAccess,
    INativeEventBus,
    INativePushNotification,
    INativePushNotificationAccess,
    RemoteNotificationEvent,
    RemoteNotificationRegistrationEvent
} from "@js-soft/native-abstractions";
import { ApplicationError, Result } from "@js-soft/ts-utils";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

export class WebPushNotificationAccess implements INativePushNotificationAccess {
    public constructor(
        private readonly logger: ILogger,
        private readonly config: INativeConfigAccess,
        private readonly eventBus: INativeEventBus,
        private readonly serviceWorker: ServiceWorkerRegistration
    ) {}

    public async init(): Promise<Result<void>> {
        const firebaseConfig = this.config.get("firebase").value;
        const firebaseApp = initializeApp(firebaseConfig.config);

        const messaging = getMessaging(firebaseApp);

        // Send firebase config to service worker
        const broadcast = new BroadcastChannel("firebase");
        broadcast.postMessage({
            type: "config",
            data: firebaseConfig.config
        });

        onMessage(messaging, (payload) => {
            if (payload.data?.content) {
                const data = JSON.parse(payload.data.content);
                const notification: INativePushNotification = {
                    id: payload.data.notId,
                    foreground: true,
                    content: data
                };
                this.eventBus.publish(new RemoteNotificationEvent(notification));
            } else {
                this.logger.warn("Remote Push Notification with wrong format received: ", payload);
            }
        });

        try {
            const token = await getToken(messaging, {
                vapidKey: firebaseConfig.vapidKey,
                serviceWorkerRegistration: this.serviceWorker
            });
            if (token) {
                this.config.set("pushToken", token);
                this.eventBus.publish(new RemoteNotificationRegistrationEvent(token));
                await this.config.save();
            }

            return Result.ok(undefined);
        } catch (e) {
            const error = new ApplicationError(
                "warn.native.pushNotificationAccess.NoTokenReceived",
                "No PushToken received. Usually this means that the user did not grant push permissions.",
                e
            );
            this.logger.warn(error);
            return Result.fail(error);
        }
    }
}
