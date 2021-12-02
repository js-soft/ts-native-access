import { Result } from "@js-soft/ts-utils";

// ScanParams?

export interface INativeScannerAccess {
    scan(): Promise<Result<string>>;
}
