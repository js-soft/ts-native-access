import { INativePermissionsAccess } from "@js-soft/native-abstractions";
import { Result } from "@js-soft/ts-utils";

export class WebPermissionsAccess implements INativePermissionsAccess {
    public async hasCameraPermission(): Promise<Result<boolean>> {
        const permissionStatus = await navigator.permissions.query(Object.assign({ name: "camera" }));
        const result = permissionStatus.state === "granted";
        return Result.ok(result);
    }

    public async hasRemoteNotificationPermission(): Promise<Result<boolean>> {
        // Remote push notifications can always be received if web-app is running
        // Check if they can be shown using local notifications
        const permissionStatus = await navigator.permissions.query(Object.assign({ name: "notifications" })); // Local notifications
        const result = permissionStatus.state === "granted";
        return Result.ok(result);
    }

    public async requestCameraPermission(): Promise<Result<boolean>> {
        try {
            await navigator.mediaDevices.getUserMedia({ video: true });
            return Result.ok(true);
        } catch (err: any) {
            return Result.fail(err);
        }
    }

    public async requestRemoteNotificationPermission(): Promise<Result<boolean>> {
        const permissionStatus = await Notification.requestPermission();
        const result = permissionStatus === "granted";
        return Result.ok(result);
    }
}
