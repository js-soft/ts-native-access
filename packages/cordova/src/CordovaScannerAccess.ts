import { ILogger } from "@js-soft/logging-abstractions";
import { INativeScannerAccess, NativeErrorCodes } from "@js-soft/native-abstractions";
import { ApplicationError, Result } from "@js-soft/ts-utils";

export class CordovaScannerAccess implements INativeScannerAccess {
    public constructor(private readonly logger: ILogger) {}

    public async scan(): Promise<Result<string>> {
        try {
            const result: any = await new Promise((resolve, reject) => cordova.plugins.barcodeScanner.scan(resolve, reject));
            if (result.cancelled) {
                return Result.fail(new ApplicationError(NativeErrorCodes.SCANNER_CANCELLED, "Scan cancelled."));
            }

            return Result.ok(result.text as string);
        } catch (error) {
            return Result.fail(new ApplicationError(NativeErrorCodes.SCANNER_UNKNOWN, `${error}`, error));
        }
    }
}
