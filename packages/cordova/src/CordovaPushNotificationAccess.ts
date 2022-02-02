import { ILogger } from "@js-soft/logging-abstractions";
import {
    AppCloseEvent,
    ICordovaConfig,
    INativeConfigAccess,
    INativeEventBus,
    INativePushNotification,
    INativePushNotificationAccess,
    RemoteNotificationEvent,
    RemoteNotificationRegistrationEvent
} from "@js-soft/native-abstractions";
import { Result } from "@js-soft/ts-utils";

export class CordovaPushNotificationAccess implements INativePushNotificationAccess {
    public constructor(private readonly logger: ILogger, private readonly config: INativeConfigAccess, private readonly eventBus: INativeEventBus) {}

    private push: any;

    /**
     * Handle the registration of a push token for remote push notifications
     * @param {String} token
     */
    private readonly handleRegistration = async (token: string) => {
        this.config.set("pushToken", token);
        this.eventBus.publish(new RemoteNotificationRegistrationEvent(token));
        await this.config.save();
    };

    /**
     * Handle an error during the bootstrap of remote push notifications
     * @param {Object} err - Error to publish
     */
    private readonly handleError = (err: unknown) => {
        this.logger.info("Error:", err);
    };

    public async init(): Promise<Result<void>> {
        if (this.push === undefined) {
            this.push = PushNotification.init({
                android: {},
                ios: { alert: true }
            });
        }

        // Android: In order for incoming notifications to be displayed, they have to be sent to a channel
        if (cordova.platformId === "android") {
            await new Promise((resolve, reject) => {
                const cordovaConfig: ICordovaConfig = this.config.get("cordova").value;
                PushNotification.createChannel(
                    () => resolve(undefined),
                    () => reject(new Error("An error occured while creating push notification channel")),
                    cordovaConfig.pushChannelConfig
                );
            });
        }

        // Called by phonegap-plugin-push upon registration => handle by our defined registration handler
        this.push.on("registration", (data: any) => this.handleRegistration(data.registrationId));

        // Called by phonegap-plugin-push upon incoming remote notification
        // By default phonegap-plugin-push displays notifications when app is in background or killed
        // As we want to use local notifications as much as possible but cant if the app is killed:
        // - Display remote notification if app is killed
        // - Display remote notification if app is in background but immediately remove it and display local notification instead
        // - Display local notification if app is in foreground (as remote notifications are not displayed in this case)
        // ### Display of local notifications is not triggered here but should occur in subscribers of the push notification event ###
        this.push.on("notification", (data: any) => {
            // additionalData is a property phonegap-plugin-push creates
            const addDat = data.additionalData;
            const id = addDat.notId;
            // content is a property which should be set by the backend and contain all data to be delivered to the app
            let content = addDat.content;
            if (!content) {
                this.logger.error("No payload found in push notification! Wrong format or test message.", addDat);
                content = "";
            }
            if (typeof content === "string") {
                try {
                    content = JSON.parse(content);
                } catch (e) {
                    this.logger.error("Error while parsing content of Push Notification", e);
                }
            }

            const notification: INativePushNotification = {
                // Add id of notification to the content
                id: id,
                // Add info to the content if the notification event occured while the app was in the foreground
                // Property is set by phonegap-plugin-push
                foreground: addDat.foreground,
                content: content
            };

            // Immediately cancel the remote push notification
            // Do not wait until promise is resolved to minimize time of display
            new Promise((resolve, reject) => this.push.clearNotification(resolve, reject, parseInt(id))).catch((err) =>
                this.logger.error("Error while canceling notification:", err)
            );

            // The phonegap-plugin-push fires the notification event multiple times
            // Therefore cases in which we want a notification event or selection event to be handled must be filtered
            if (cordova.platformId === "android") {
                if (addDat.foreground ? !addDat.coldstart : addDat.dismissed === undefined ? addDat.coldstart : !addDat.coldstart) {
                    this.eventBus.publish(new RemoteNotificationEvent(notification));
                } else if (!addDat.foreground && addDat.dismissed === undefined && !addDat.coldstart) {
                    // Remote notifications are deleted immediately and replaced by local notifications which handle selection events themselves
                    // this.notificationClickHandler(content);
                }
            } else if (cordova.platformId === "ios") {
                if (addDat.coldstart) {
                    const dt = new Date();
                    dt.setSeconds(dt.getSeconds() + 10);
                    notification.limitedProcessingTime = dt.toISOString();
                    setTimeout(() => {
                        this.eventBus.publish(new AppCloseEvent());
                    }, 10000);
                    setTimeout(() => {
                        this.push.finish(
                            () => {
                                this.logger.trace(`Notification ${id} terminated successfully`);
                            },
                            (err: any) => {
                                this.logger.error("Error while terminating background processing:", err);
                            },
                            id
                        );
                    }, 15000);
                }
                if (!addDat.foreground && addDat.coldstart) {
                    // Remote notifications are deleted immediately and replaced by local notifications which handle selection events themselves
                    // this.notificationClickHandler(content);
                } else {
                    this.eventBus.publish(new RemoteNotificationEvent(notification));
                }
            }
            return true;
        });

        // Called by phonegap-plugin-push upon error => handle by our defined error handler
        this.push.on("error", (err: any) => this.handleError(err));

        return Result.ok(undefined);
    }
}
