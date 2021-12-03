import { ILogger } from "@js-soft/logging-abstractions";
import { INativeConfigAccess, INativeKeychainAccess, INativeKeychainEntry, NativeErrorCodes } from "@js-soft/native-abstractions";
import { ApplicationError, Result } from "@js-soft/ts-utils";

export class CordovaKeychainAccess implements INativeKeychainAccess {
    public constructor(private readonly logger: ILogger, private readonly config: INativeConfigAccess) {}

    private secureStorage: any;

    public async init(): Promise<Result<void>> {
        try {
            await new Promise((resolve, reject) => (this.secureStorage = new cordova.plugins.SecureStorage(resolve, reject, this.config.get("name").value)));
            return Result.ok(undefined);
        } catch (error) {
            return Result.fail(new ApplicationError(NativeErrorCodes.KEYCHAIN_UNKNOWN, `${error}`, error));
        }
    }

    public async get(key: string): Promise<Result<INativeKeychainEntry>> {
        try {
            const response = await new Promise((resolve, reject) => this.secureStorage.get(resolve, reject, key));
            const result: INativeKeychainEntry = { key: key, value: response };
            return Result.ok(result);
        } catch (error) {
            return Result.fail(new ApplicationError(NativeErrorCodes.KEYCHAIN_UNKNOWN, `${error}`, error));
        }
    }

    public async set(key: string, value: any): Promise<Result<void>> {
        try {
            await new Promise((resolve, reject) => this.secureStorage.set(resolve, reject, key, value));
            return Result.ok(undefined);
        } catch (error) {
            return Result.fail(new ApplicationError(NativeErrorCodes.KEYCHAIN_UNKNOWN, `${error}`, error));
        }
    }

    public async delete(key: string): Promise<Result<void>> {
        try {
            await new Promise((resolve, reject) => this.secureStorage.remove(resolve, reject, key));
            return Result.ok(undefined);
        } catch (error) {
            return Result.fail(new ApplicationError(NativeErrorCodes.KEYCHAIN_UNKNOWN, `${error}`, error));
        }
    }

    public async list(): Promise<Result<INativeKeychainEntry[]>> {
        try {
            const response: any[] = await new Promise((resolve, reject) => this.secureStorage.keys(resolve, reject));
            const result: any[] = await Promise.all(
                response.map(async (key) => {
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
