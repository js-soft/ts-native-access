import { Result } from "@js-soft/ts-utils";

enum Permissions {
    CAMERA = "CAMERA",
    REMOTENOTIFICATIONS = "REMOTENOTIFICATIONS"
}

/**
 * Access to native keychain
 */
export interface INativePermissionsAccess {
    hasPermission(permission: Permissions): Promise<Result<boolean>>;

    requestPermission(permission: Permissions): Promise<Result<boolean>>;
}
