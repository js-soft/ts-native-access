import { ILogger } from "@js-soft/logging-abstractions";
import {
    ConfigurationRemoveEvent,
    ConfigurationSaveEvent,
    ConfigurationSetEvent,
    INativeConfigAccess,
    INativeEventBus,
    INativeFileAccess,
    NativeErrorCodes
} from "@js-soft/native-abstractions";
import { ApplicationError, Result } from "@js-soft/ts-utils";
import * as lodash from "lodash";

export class CommonConfigAccess implements INativeConfigAccess {
    private fileAccess: INativeFileAccess;
    private logger: ILogger;
    public constructor(private readonly path: string, private readonly eventBus: INativeEventBus) {}

    private _dirty: boolean;
    public isDirty(): boolean {
        return this._dirty;
    }

    private runtimeConfig: any = {};
    private defaultConfig: any = {};
    private config: any = {};

    private refreshConfig() {
        this.config = lodash.defaultsDeep({}, this.runtimeConfig, this.defaultConfig);
    }

    public async initDefaultConfig(): Promise<Result<void>> {
        const defaultConfig = await (await fetch(this.path)).json();
        if (!defaultConfig) this.logger.error("Unable to load default config!");
        else this.defaultConfig = defaultConfig;
        this.refreshConfig();
        return Result.ok(undefined);
    }

    public async initRuntimeConfig(logger: ILogger, fileAccess: INativeFileAccess): Promise<Result<void>> {
        this.fileAccess = fileAccess; // File system needs to access default config during initialisation => import file Access here, after it was initialized
        this.logger = logger; // dito
        const runtimeConfigExistsResult = await this.fileAccess.existsFile(this.path);
        if (runtimeConfigExistsResult.isError) {
            return Result.fail(new ApplicationError(NativeErrorCodes.CONFIG_INIT, "Unable to check if runtime config exists!"));
        } else if (!runtimeConfigExistsResult.value) {
            this.logger.info("No runtime config found!");
        } else {
            const runtimeConfigResult = await this.fileAccess.readFileAsText(this.path);
            if (runtimeConfigResult.isError) {
                return Result.fail(new ApplicationError(NativeErrorCodes.CONFIG_INIT, "Unable to read runtime config file!"));
            } else if (!runtimeConfigResult.value) {
                return Result.fail(new ApplicationError(NativeErrorCodes.CONFIG_INIT, "Unable to read runtime config file!"));
            }

            try {
                this.runtimeConfig = JSON.parse(runtimeConfigResult.value);
            } catch (err) {
                return Result.fail(new ApplicationError(NativeErrorCodes.CONFIG_INIT, "Unable to parse runtime config data!"));
            }
        }
        this.refreshConfig();
        return Result.ok(undefined);
    }

    public async save(): Promise<Result<void>> {
        try {
            const configAsString = JSON.stringify(this.runtimeConfig);
            await this.fileAccess.writeFile(this.path, configAsString);
            this.eventBus.publish(new ConfigurationSaveEvent());
            return Result.ok(undefined);
        } catch (err) {
            return Result.fail(new ApplicationError(NativeErrorCodes.CONFIG_INIT, "Unable to stringify runtime config data!"));
        }
    }

    /**
     * Optional: Config object can be accessed directly
     * @param key
     * @returns
     */
    public get(key: string): Result<any> {
        if (typeof key !== "string") {
            return Result.fail(new ApplicationError(NativeErrorCodes.CONFIG_NOT_FOUND, "Provided key is not a string."));
        }

        return Result.ok(this.config[key]);
    }

    public set(key: string, value: any): Result<void> {
        if (typeof key !== "string") {
            return Result.fail(new ApplicationError(NativeErrorCodes.CONFIG_NOT_FOUND, "Provided key is not a string."));
        }

        this._dirty = true;
        this.runtimeConfig[key] = value;
        this.refreshConfig();
        this.eventBus.publish(new ConfigurationSetEvent(key, value));
        return Result.ok(undefined);
    }

    public remove(key: string): Result<void> {
        if (typeof key !== "string") {
            return Result.fail(new ApplicationError(NativeErrorCodes.CONFIG_NOT_FOUND, "Provided key is not a string."));
        }

        this._dirty = true;
        delete this.runtimeConfig[key];
        this.refreshConfig();
        this.eventBus.publish(new ConfigurationRemoveEvent(key));
        return Result.ok(undefined);
    }
}
