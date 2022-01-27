import { Result } from "@js-soft/ts-utils";

/**
 * Receive and handle remote push notifications
 */
export interface INativePushNotificationAccess {
    /**
     * Initialize module
     */
    init(): Promise<Result<void>>;
}
