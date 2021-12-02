import { Result } from "@js-soft/ts-utils";

export interface INativeKeychainEntry {
    key: string;
    value: any;
}

export interface INativeKeychainAccess {
    get(name: string): Promise<Result<INativeKeychainEntry>>;
    set(key: string, value: any): Promise<Result<void>>;
    delete(key: string, value: any): Promise<Result<void>>;
    list(): Promise<Result<INativeKeychainEntry[]>>;
    init(): Promise<Result<void>>;
}
