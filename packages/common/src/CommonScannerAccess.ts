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
        } catch (err: any) {
            if (err.code === "SCANNER_CANCELLED") {
                return Result.fail(new ApplicationError(NativeErrorCodes.SCANNER_CANCELLED, `QR Code Scanning Failed! Reason: ${err.err}`, err));
            } else if (err.code === "SCANNER_TIMEOUT") {
                return Result.fail(new ApplicationError(NativeErrorCodes.SCANNER_TIMEOUT, `QR Code Scanning Failed! Reason: ${err.err}`, err));
            }
            return Result.fail(new ApplicationError(NativeErrorCodes.SCANNER_UNKNOWN, `QR Code Scanning Failed! Reason: ${err.err}`, err));
        }
    }
}
