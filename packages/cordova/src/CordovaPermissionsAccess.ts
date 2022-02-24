import { ILogger } from "@js-soft/logging-abstractions";
import { Result } from "@js-soft/ts-utils";
export class CordovaPermissionsAccess implements INativePermissionsAccess {
    public constructor(private readonly logger: ILogger) {}
    public hasPermission(permission: Permissions): Promise<Result<boolean>> {
        switch (permission) {
            case Permissions.CAMERA:
                return new Promise((resolve, reject) =>
                    cordova.plugins.diagnostic.isCameraAvailable({
                        successCallback: (authorized: any) => resolve(Result.ok(authorized)),
                        errorCallback: (error: any) => reject(Result.fail(error)),
                        externalStorage: false
                    })
                );

            case Permissions.REMOTENOTIFICATIONS:
                return new Promise((resolve, reject) =>
                    cordova.plugins.diagnostic.isRemoteNotificationsEnabled({
                        successCallback: (authorized: any) => resolve(Result.ok(authorized)),
                        errorCallback: (error: any) => reject(Result.fail(error)),
                        externalStorage: false
                    })
                );
            default:
                break;
        }
    }

    public requestPermission(permission: Permissions): Promise<Result<boolean>> {
        switch (permission) {
            case Permissions.CAMERA:
                return new Promise((resolve, reject) =>
                    cordova.plugins.diagnostic.requestCameraAuthorization({
                        successCallback: (status: any) => resolve(Result.ok(status === cordova.plugins.diagnostic.permissionStatus.GRANTED)),
                        errorCallback: (error: any) => reject(Result.fail(error)),
                        externalStorage: false
                    })
                );
            case Permissions.REMOTENOTIFICATIONS:
                if (cordova.platformId === "ios") {
                    return new Promise((resolve, reject) =>
                        cordova.plugins.diagnostic.requestRemoteNotificationsAuthorization({
                            successCallback: () => resolve(Result.ok(true)),
                            errorCallback: (error: any) => reject(Result.fail(error)),
                            types: [
                                cordova.plugins.diagnostic.remoteNotificationType.ALERT,
                                cordova.plugins.diagnostic.remoteNotificationType.SOUND,
                                cordova.plugins.diagnostic.remoteNotificationType.BADGE
                            ]
                        })
                    );
                } else if (cordova.platformId === "android") {
                    cordova.plugins.diagnostic.switchToNotificationSettings();
                }
        }
    }
}
