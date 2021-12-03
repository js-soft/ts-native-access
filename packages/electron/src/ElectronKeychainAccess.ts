import { ILogger } from "@js-soft/logging-abstractions";
import { INativeConfigAccess, INativeKeychainAccess, INativeKeychainEntry, NativeErrorCodes } from "@js-soft/native-abstractions";
import { ApplicationError, Result } from "@js-soft/ts-utils";
import keytar from "keytar";
export class ElectronKeychainAccess implements INativeKeychainAccess {
    private readonly service: string;
    public constructor(private readonly logger: ILogger, private readonly config: INativeConfigAccess) {
        this.service = this.config.get("name").value;
    }

    public init(): Promise<Result<void>> {
        return Promise.resolve(Result.ok(undefined));
    }

    public async get(key: string): Promise<Result<INativeKeychainEntry>> {
        try {
            const result: string | null = await keytar.getPassword(this.service, key);
            if (result) {
                return Result.ok({ key: key, value: result });
            }

            return Result.fail(new ApplicationError(NativeErrorCodes.KEYCHAIN_NOT_FOUND, "Entry not found!"));
        } catch (error) {
            return Result.fail(new ApplicationError(NativeErrorCodes.KEYCHAIN_UNKNOWN, `${error}`, error));
        }
    }

    public async set(key: string, value: any): Promise<Result<void>> {
        try {
            await keytar.setPassword(this.service, key, value);
            return Result.ok(undefined);
        } catch (error) {
            return Result.fail(new ApplicationError(NativeErrorCodes.KEYCHAIN_UNKNOWN, `${error}`, error));
        }
    }

    public async delete(key: string): Promise<Result<void>> {
        try {
            await keytar.deletePassword(this.service, key);
            return Result.ok(undefined);
        } catch (error) {
            return Result.fail(new ApplicationError(NativeErrorCodes.KEYCHAIN_UNKNOWN, `${error}`, error));
        }
    }

    public async list(): Promise<Result<INativeKeychainEntry[]>> {
        try {
            const result: { account: string; password: string }[] = await keytar.findCredentials(this.service);
            const keys: INativeKeychainEntry[] = result.map((elem) => {
                return { key: elem.account, value: elem.password };
            });
            return Result.ok(keys);
        } catch (error) {
            return Result.fail(new ApplicationError(NativeErrorCodes.KEYCHAIN_UNKNOWN, `${error}`, error));
        }
    }
}
