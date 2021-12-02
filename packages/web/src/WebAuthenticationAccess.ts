import { ILogger } from "@js-soft/logging-abstractions";
import { INativeAuthenticationAccess, INativeAuthenticationOptions } from "@js-soft/native-abstractions";
import { Result } from "@js-soft/ts-utils";

export class WebAuthenticationAccess implements INativeAuthenticationAccess {
    public constructor(private readonly logger: ILogger) {}

    public authenticate(_options?: INativeAuthenticationOptions): Promise<Result<boolean>> {
        // eslint-disable-next-line no-alert
        const isAuthenticated = confirm("(Mock Biometry Prompt) Press OK to authenticate");
        return Promise.resolve(Result.ok(isAuthenticated));
    }
}
