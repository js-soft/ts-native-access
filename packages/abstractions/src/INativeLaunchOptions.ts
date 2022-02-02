import { Result } from "@js-soft/ts-utils";

/**
 * Handle launches of the app originating from an open url or open file instruction
 */
export interface INativeLaunchOptions {
    /**
     * Initialize handling of launch events. Once initialized, it publishes a {@link UrlOpenEvent} when the app was started by an url or a {@link FileViewEvent}
     * when the app was started to open a file.
     */
    init(): Promise<Result<void>>;
}
