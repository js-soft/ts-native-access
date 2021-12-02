import { Result } from "@js-soft/ts-utils";

export interface INativeAuthenticationOptions {
    title?: string;
    subtitle?: string;
    description?: string;
    cancelButtonTitle?: string;
}

export interface INativeAuthenticationAccess {
    authenticate(options?: INativeAuthenticationOptions): Promise<Result<boolean>>;
}
