import { ILogger } from "@js-soft/logging-abstractions";
import { INativeScannerAccess, NativeErrorCodes } from "@js-soft/native-abstractions";
// @ts-expect-error
import QRScanner from "@js-soft/qr-code-scanner";
import { ApplicationError, Result } from "@js-soft/ts-utils";

export class CommonScannerAccess implements INativeScannerAccess {
    public constructor(private readonly logger: ILogger) {}

    public async scan(): Promise<Result<string>> {
        try {
            const result = await new Promise<string>((resolve, reject) => {
                QRScanner.initiate({ onResult: resolve, onError: reject, onTimeout: reject, timeout: 60000 });
            });
            return Result.ok(result);
        } catch (err) {
            return Result.fail(new ApplicationError(NativeErrorCodes.SCANNER_UNKNOWN, `QR Code Scanning Failed! Reason: ${err}`, err));
        }
    }
}
