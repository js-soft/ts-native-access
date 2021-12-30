import { ILogger } from "@js-soft/logging-abstractions";
import { INativeScannerAccess, NativeErrorCodes } from "@js-soft/native-abstractions";
import { ApplicationError, Result } from "@js-soft/ts-utils";

export class CordovaScannerAccess implements INativeScannerAccess {
    public constructor(private readonly logger: ILogger) {}

    public async scan(): Promise<Result<string>> {
        try {
            const result: any = await new Promise((resolve, reject) =>
                cordova.plugins.barcodeScanner.scan(resolve, reject, {
                    // preferFrontCamera: true, // iOS and Android
                    showFlipCameraButton: true, // iOS and Android
                    showTorchButton: true, // iOS and Android
                    // torchOn: true, // Android, launch with the torch switched on (if available)
                    // saveHistory: true, // Android, save scan history (default false)
                    // prompt: "Place a barcode inside the scan area", // Android
                    // resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                    // formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
                    // orientation: "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
                    // disableAnimations: true, // iOS
                    disableSuccessBeep: true // iOS and Android
                })
            );
            if (result.cancelled) {
                return Result.fail(new ApplicationError(NativeErrorCodes.SCANNER_CANCELLED, "Scan cancelled."));
            }

            return Result.ok(result.text as string);
        } catch (error) {
            return Result.fail(new ApplicationError(NativeErrorCodes.SCANNER_UNKNOWN, `${error}`, error));
        }
    }
}
