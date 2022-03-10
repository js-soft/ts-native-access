import { Result } from "@js-soft/ts-utils";

/**
 * Entry of the keychain
 */
export interface INativeKeychainEntry {
    key: string;
    value: any;
}

/**
 * Access to native keychain
 */
export interface INativeKeychainAccess {
    /**
     * Get value for the specified {@link key}
     * @param key string identifying a value
     */
    get(key: string): Promise<Result<INativeKeychainEntry>>;
    /**
     * Add key-value pair to keychain
     * @param key
     * @param value
     */
    set(key: string, value: any): Promise<Result<void>>;
    /**
     * Delete key-value pair
     * @param key
     */
    delete(key: string): Promise<Result<void>>;
    /**
     * List all key-value pairs added by the applicaion
     */
    list(): Promise<Result<INativeKeychainEntry[]>>;
    /**
     * Initialize the module
     */
    init(): Promise<Result<void>>;
}
