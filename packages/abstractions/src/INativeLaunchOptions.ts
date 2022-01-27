import { Result } from "@js-soft/ts-utils";

/**
 * Handle launches of the app originating from an open url or open file instruction
 */
export interface INativeLaunchOptions {
    /**
     * Initialize handling of launch events
     */
    init(): Promise<Result<void>>;
}
