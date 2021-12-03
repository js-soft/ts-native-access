import { ILogger } from "@js-soft/logging-abstractions";
import { INativeKeychainAccess, INativeKeychainEntry, NativeErrorCodes } from "@js-soft/native-abstractions";
import { ApplicationError, Result } from "@js-soft/ts-utils";

export class WebKeychainAccess implements INativeKeychainAccess {
    public static readonly prefix: string = "secret_";
    public static readonly listkey: string = "secrets";
    public constructor(private readonly logger: ILogger) {}

    private getListOfKeys(): string[] {
        const item = localStorage.getItem(WebKeychainAccess.listkey);
        if (!item) return [];

        const parsedItem = JSON.parse(item);
        if (parsedItem instanceof Array) {
            return parsedItem;
        }

        return [];
    }

    private addToList(key: string): void {
        const list = this.getListOfKeys();
        if (!list.includes(key)) {
            list.push(key);
            localStorage.setItem(WebKeychainAccess.listkey, JSON.stringify(list));
        }
    }

    private removeFromList(key: string): void {
        const list = this.getListOfKeys();
        const index = list.indexOf(key);
        if (index > -1) {
            list.splice(index, 1);
            localStorage.setItem(WebKeychainAccess.listkey, JSON.stringify(list));
        }
    }

    public init(): Promise<Result<void>> {
        return Promise.resolve(Result.ok(undefined));
    }

    public get(key: string): Promise<Result<INativeKeychainEntry>> {
        try {
            const item = localStorage.getItem(WebKeychainAccess.prefix + key);
            const result: INativeKeychainEntry = { key: key, value: item };
            return Promise.resolve(Result.ok(result));
        } catch (error) {
            return Promise.resolve(Result.fail(new ApplicationError(NativeErrorCodes.KEYCHAIN_UNKNOWN, `${error}`, error)));
        }
    }

    public set(key: string, value: any): Promise<Result<void>> {
        try {
            localStorage.setItem(WebKeychainAccess.prefix + key, value);
            this.addToList(key);
            return Promise.resolve(Result.ok(undefined));
        } catch (error) {
            return Promise.resolve(Result.fail(new ApplicationError(NativeErrorCodes.KEYCHAIN_UNKNOWN, `${error}`, error)));
        }
    }

    public delete(key: string): Promise<Result<void>> {
        try {
            localStorage.removeItem(WebKeychainAccess.prefix + key);
            this.removeFromList(key);
            return Promise.resolve(Result.ok(undefined));
        } catch (error) {
            return Promise.resolve(Result.fail(new ApplicationError(NativeErrorCodes.KEYCHAIN_UNKNOWN, `${error}`, error)));
        }
    }

    public async list(): Promise<Result<INativeKeychainEntry[]>> {
        try {
            const item = localStorage.getItem(WebKeychainAccess.listkey);
            if (!item) return Result.ok([]);
            const parsedItem = JSON.parse(item);
            if (!(parsedItem instanceof Array)) {
                return Result.ok([]);
            }

            const result = await Promise.all(
                parsedItem.map(async (key) => {
                    const result = await this.get(key);
                    if (result.isSuccess) {
                        return { key: key, value: result.value };
                    }

                    return { key: key, value: undefined };
                })
            );
            return Result.ok(result);
        } catch (error) {
            return Result.fail(new ApplicationError(NativeErrorCodes.KEYCHAIN_UNKNOWN, `${error}`, error));
        }
    }
}
