import { Result } from "@js-soft/ts-utils";

export interface INativePushNotificationAccess {
    init(): Promise<Result<void>>;
}
