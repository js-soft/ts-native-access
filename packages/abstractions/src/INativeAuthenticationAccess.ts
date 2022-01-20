import { Result } from "@js-soft/ts-utils";

/**
 * Options for authentication process
 */
export interface INativeAuthenticationOptions {
    /**
     * Text which is displayed to the user during authentication request
     */
    title?: string;
    /**
     * Text which is displayed to the user during authentication request
     */
    subtitle?: string;
    /**
     * Text which is displayed to the user during authentication request
     */
    description?: string;
    /**
     * Text of the button which cancels the authentication process
     */
    cancelButtonTitle?: string;
}

/**
 * Authentication of user
 */
export interface INativeAuthenticationAccess {
    /**
     * Start the authentication process
     * @param options Configuration of the authentication process
     * @returns True if authentication was successful and false if authentication was unsuccessful
     */
    authenticate(options?: INativeAuthenticationOptions): Promise<Result<boolean>>;
}
