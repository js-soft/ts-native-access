import { ILoggerFactory } from "@js-soft/logging-abstractions";
import { Result } from "@js-soft/ts-utils";

export interface INativeLoggerFactory extends ILoggerFactory {
    init(): Promise<Result<void>>;
}
