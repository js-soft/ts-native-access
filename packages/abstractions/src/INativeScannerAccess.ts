import { Result } from "@js-soft/ts-utils";

// ScanParams?

/**
 * QR-code scanner
 */
export interface INativeScannerAccess {
    /**
     * Scan qr-code
     */
    scan(): Promise<Result<string>>;
}
