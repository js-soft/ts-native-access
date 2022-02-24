import { INativePermissionsAccess } from "@js-soft/native-abstractions";
import { Result } from "@js-soft/ts-utils";

export class CordovaPermissionsAccess implements INativePermissionsAccess {
    public hasCameraPermission(): Promise<Result<boolean>> {
        return new Promise((resolve, reject) =>
            cordova.plugins.diagnostic.isCameraAvailable({
                successCallback: (authorized: any) => resolve(Result.ok(authorized)),
                errorCallback: (error: any) => reject(Result.fail(error)),
                externalStorage: false
            })
        );
    }

    public hasRemoteNotificationPermission(): Promise<Result<boolean>> {
        return new Promise((resolve, reject) =>
            cordova.plugins.diagnostic.isRemoteNotificationsEnabled(
                (authorized: any) => resolve(Result.ok(authorized)),
                (error: any) => reject(Result.fail(error))
            )
        );
    }

    public requestCameraPermission(): Promise<Result<boolean>> {
        return new Promise((resolve, reject) =>
            cordova.plugins.diagnostic.requestCameraAuthorization({
                successCallback: (status: any) => resolve(Result.ok(status === cordova.plugins.diagnostic.permissionStatus.GRANTED)),
                errorCallback: (error: any) => reject(Result.fail(error)),
                externalStorage: false
            })
        );
    }

    public requestRemoteNotificationPermission(): Promise<Result<boolean>> {
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
        }
        cordova.plugins.diagnostic.switchToNotificationSettings();
        return new Promise((resolve) => resolve(Result.ok(false)));
    }
}
