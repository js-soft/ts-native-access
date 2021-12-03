import { Result } from "@js-soft/ts-utils";

export interface INativeLaunchOptions {
    init(): Promise<Result<void>>;
}
