import { INativeConfigAccess, INativeDeviceInfo, INativeDeviceInfoAccess, PushServices } from "@js-soft/native-abstractions";
import { Result } from "@js-soft/ts-utils";
import uuid from "uuid-random";

export class WebDeviceInfoAccess implements INativeDeviceInfoAccess {
    public constructor(private readonly config: INativeConfigAccess) {}

    public get deviceInfo(): INativeDeviceInfo {
        return this._deviceInfo;
    }
    private _deviceInfo: INativeDeviceInfo;

    public async init(): Promise<Result<INativeDeviceInfo>> {
        let deviceuuid = this.config.get("uuid").value;
        if (!deviceuuid) {
            deviceuuid = uuid();
            this.config.set("uuid", deviceuuid);
            await this.config.save();
        }

        this._deviceInfo = {
            model: navigator.userAgent,
            platform: `${navigator.platform}_browser`,
            uuid: deviceuuid,
            manufacturer: navigator.vendor,
            isVirtual: true,
            languageCode: navigator.language,
            version: navigator.appVersion,
            pushService: PushServices.fcm
        };
        return Result.ok(this._deviceInfo);
    }
}
