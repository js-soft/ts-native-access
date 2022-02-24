import { Result } from "@js-soft/ts-utils";

export interface INativePermissionsAccess {
    hasCameraPermission(): Promise<Result<boolean>>;
    hasRemoteNotificationPermission(): Promise<Result<boolean>>;

    requestCameraPermission(): Promise<Result<boolean>>;
    requestRemoteNotificationPermission(): Promise<Result<boolean>>;
}
