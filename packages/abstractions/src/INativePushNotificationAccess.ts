import { Result } from "@js-soft/ts-utils";

/**
 * Receive and handle remote push notifications
 */
export interface INativePushNotificationAccess {
    /**
     * Initialize module.
     * Once initialized it publishes a {@link RemoteNotificationRegistrationEvent} when the registration of the push notification service was successful.
     * It also publishes a {@link RemoteNotificationEvent} when a remote push notification is received.
     */
    init(): Promise<Result<void>>;
}
