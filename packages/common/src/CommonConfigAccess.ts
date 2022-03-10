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
    private runtimeConfigPath: string;
    public constructor(private readonly eventBus: INativeEventBus) {}

    private runtimeConfig: any = {}; // configuration object created and modified during runtime
    private defaultConfig: any = {}; // configuration object created and modified during app development
    private config: any = {}; // concatenation of both config objects

    /**
     * Merge runtime and default config. This is done after the runtime config changes.
     * The runtime config can overwrite entries of the default config.
     */
    private refreshConfig() {
        this.config = lodash.defaultsDeep({}, this.runtimeConfig, this.defaultConfig);
    }

    public async initDefaultConfig(path: string): Promise<Result<void>> {
        const defaultConfig = await (await fetch(path)).json();
        if (!defaultConfig) this.logger.error("Unable to load default config!");
        else this.defaultConfig = defaultConfig;
        this.refreshConfig();
        return Result.ok(undefined);
    }

    public async initRuntimeConfig(path: string, logger: ILogger, fileAccess: INativeFileAccess): Promise<Result<void>> {
        this.fileAccess = fileAccess; // File system needs to access default config during initialization => import file access here, after it was initialized
        this.logger = logger; // dito
        this.runtimeConfigPath = path;
        // Read runtime config file from filesystem if it exists
        const runtimeConfigExistsResult = await this.fileAccess.existsFile(this.runtimeConfigPath);
        if (runtimeConfigExistsResult.isError) {
            return Result.fail(new ApplicationError(NativeErrorCodes.CONFIG_INIT, "Unable to check if runtime config exists!"));
        } else if (!runtimeConfigExistsResult.value) {
            this.logger.info("No runtime config found!");
        } else {
            const runtimeConfigResult = await this.fileAccess.readFileAsText(this.runtimeConfigPath);
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
        this.refreshConfig(); // Refresh config to merge runtime and default config
        return Result.ok(undefined);
    }

    public async save(): Promise<Result<void>> {
        try {
            const configAsString = JSON.stringify(this.runtimeConfig);
            await this.fileAccess.writeFile(this.runtimeConfigPath, configAsString);
            this.eventBus.publish(new ConfigurationSaveEvent());
            return Result.ok(undefined);
        } catch (err) {
            return Result.fail(new ApplicationError(NativeErrorCodes.CONFIG_INIT, "Unable to stringify runtime config data!"));
        }
    }

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

        this.runtimeConfig[key] = value;
        this.refreshConfig();
        this.eventBus.publish(new ConfigurationSetEvent(key, value));
        return Result.ok(undefined);
    }

    public remove(key: string): Result<void> {
        if (typeof key !== "string") {
            return Result.fail(new ApplicationError(NativeErrorCodes.CONFIG_NOT_FOUND, "Provided key is not a string."));
        }

        delete this.runtimeConfig[key];
        this.refreshConfig();
        this.eventBus.publish(new ConfigurationRemoveEvent(key));
        return Result.ok(undefined);
    }
}
