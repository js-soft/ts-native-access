import { INativePermissionsAccess } from "@js-soft/native-abstractions";
import { Result } from "@js-soft/ts-utils";

export class ElectronPermissionsAccess implements INativePermissionsAccess {
    public hasCameraPermission(): Promise<Result<boolean>> {
        return new Promise((resolve) => resolve(Result.ok(true)));
    }

    public hasRemoteNotificationPermission(): Promise<Result<boolean>> {
        return new Promise((resolve) => resolve(Result.ok(true)));
    }

    public requestCameraPermission(): Promise<Result<boolean>> {
        return new Promise((resolve) => resolve(Result.ok(true)));
    }

    public requestRemoteNotificationPermission(): Promise<Result<boolean>> {
        return new Promise((resolve) => resolve(Result.ok(true)));
    }
}
