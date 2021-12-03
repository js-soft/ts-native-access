import { ILogger } from "@js-soft/logging-abstractions";
import { INativeAuthenticationAccess, INativeAuthenticationOptions } from "@js-soft/native-abstractions";
import { Result } from "@js-soft/ts-utils";
// @ts-expect-error
import * as Dialogs from "dialogs";

export class ElectronAuthenticationAccess implements INativeAuthenticationAccess {
    public constructor(private readonly logger: ILogger) {}

    public async authenticate(options?: INativeAuthenticationOptions): Promise<Result<boolean>> {
        const dialogs = Dialogs({ cancel: options?.cancelButtonTitle });
        const result = await dialogs.confirm(options?.title ? options.title : "Please Confirm.");
        return Result.ok(!!result);
    }
}
