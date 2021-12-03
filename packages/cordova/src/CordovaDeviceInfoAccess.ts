import { INativeDeviceInfo, INativeDeviceInfoAccess, PushServices } from "@js-soft/native-abstractions";
import { Result } from "@js-soft/ts-utils";
import getUuid from "uuid-by-string";

export class CordovaDeviceInfoAccess implements INativeDeviceInfoAccess {
    public get deviceInfo(): INativeDeviceInfo {
        return this._deviceInfo;
    }
    private _deviceInfo: INativeDeviceInfo;

    public init(): Promise<Result<INativeDeviceInfo>> {
        this._deviceInfo = {
            model: device.model,
            platform: device.platform,
            uuid: getUuid(device.uuid, 5),
            manufacturer: device.manufacturer,
            isVirtual: device.isVirtual,
            languageCode: navigator.language,
            version: device.version,
            pushService: device.platform === "Android" ? PushServices.fcm : PushServices.apns
        };
        return Promise.resolve(Result.ok(this._deviceInfo));
    }
}
