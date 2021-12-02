import { INativeDeviceInfo, INativeDeviceInfoAccess, PushServices } from "@js-soft/native-abstractions";
import { Result } from "@js-soft/ts-utils";
import systeminformation from "systeminformation";
import getUuid from "uuid-by-string";

export class ElectronDeviceInfoAccess implements INativeDeviceInfoAccess {
    public get deviceInfo(): INativeDeviceInfo {
        return this._deviceInfo;
    }
    private _deviceInfo: INativeDeviceInfo;

    public async init(): Promise<Result<INativeDeviceInfo>> {
        const system = await systeminformation.system();
        const osInfo = await systeminformation.osInfo();
        const uuid = await systeminformation.uuid();

        this._deviceInfo = {
            model: system.model,
            platform: osInfo.platform,
            uuid: getUuid(uuid.os, 5), // uuid.hardware not working on linux and on linux uuid.os has wrong uuid format
            manufacturer: system.manufacturer,
            isVirtual: system.virtual,
            languageCode: navigator.language,
            version: osInfo.release,
            pushService: PushServices.fcm
        };
        return Result.ok(this._deviceInfo);
    }
}
