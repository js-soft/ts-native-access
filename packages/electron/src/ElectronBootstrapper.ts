import { ILokiJsDatabaseFactory } from "@js-soft/docdb-access-loki";
import { ILogger } from "@js-soft/logging-abstractions";
import {
    AppCloseEvent,
    INativeAuthenticationAccess,
    INativeBootstrapper,
    INativeConfigAccess,
    INativeDeviceInfoAccess,
    INativeEnvironment,
    INativeEventBus,
    INativeFileAccess,
    INativeKeychainAccess,
    INativeLaunchOptions,
    INativeLoggerFactory,
    INativeNotificationAccess,
    INativePermissionsAccess,
    INativePushNotificationAccess,
    INativeScannerAccess,
    NativeErrorCodes,
    NativePlatform,
    ThemeEvent
} from "@js-soft/native-abstractions";
import { CommonConfigAccess, CommonDatabaseFactory, CommonEventBus, CommonLoggerFactory, CommonScannerAccess } from "@js-soft/native-common";
import { Result } from "@js-soft/ts-utils";
import { ElectronAuthenticationAccess } from "./ElectronAuthenticationAccess";
import { ElectronDeviceInfoAccess } from "./ElectronDeviceInfoAccess";
import { ElectronFileAccess } from "./ElectronFileAccess";
import { ElectronKeychainAccess } from "./ElectronKeychainAccess";
import { ElectronLaunchOptions } from "./ElectronLaunchOptions";
import { ElectronNotificationAccess } from "./ElectronNotificationAccess";
import { ElectronPermissionsAccess } from "./ElectronPermissionsAccess";
import { ElectronPushNotificationAccess } from "./ElectronPushNotificationAccess";

export class ElectronBootstrapper implements INativeBootstrapper {
    public static readonly configPath: string = "config.json";
    private logger: ILogger;
    private nativeAuthenticationAccess: INativeAuthenticationAccess;
    private nativeConfigAccess: INativeConfigAccess;
    private nativeDatabaseFactory: ILokiJsDatabaseFactory;
    private nativeDeviceInfoAccess: INativeDeviceInfoAccess;
    private nativeEventBus: INativeEventBus;
    private nativeFileAccess: INativeFileAccess;
    private nativeKeychainAccess: INativeKeychainAccess;
    private nativeLoggerFactory: INativeLoggerFactory;
    private nativeNotificationAccess: INativeNotificationAccess;
    private nativeScannerAccess: INativeScannerAccess;
    private nativePushNotificationAccess: INativePushNotificationAccess;
    private nativeLaunchOptions: INativeLaunchOptions;
    private nativePermissionsAccess: INativePermissionsAccess;

    private initialized = false;
    public get isInitialized(): boolean {
        return this.initialized;
    }

    public get nativeEnvironment(): INativeEnvironment {
        if (!this.initialized) {
            throw new Error(NativeErrorCodes.BOOTSTRAP_NOT_INITIALIZED);
        }

        return {
            platform: NativePlatform.Node,
            eventBus: this.nativeEventBus,
            authenticationAccess: this.nativeAuthenticationAccess,
            configAccess: this.nativeConfigAccess,
            databaseFactory: this.nativeDatabaseFactory,
            deviceInfoAccess: this.nativeDeviceInfoAccess,
            fileAccess: this.nativeFileAccess,
            keychainAccess: this.nativeKeychainAccess,
            loggerFactory: this.nativeLoggerFactory,
            notificationAccess: this.nativeNotificationAccess,
            pushNotificationAccess: this.nativePushNotificationAccess,
            scannerAccess: this.nativeScannerAccess,
            permissionsAccess: this.nativePermissionsAccess
        };
    }

    public async init(): Promise<Result<void>> {
        if (this.initialized) {
            throw new Error(NativeErrorCodes.BOOTSTRAP_ALREADY_INITIALIZED);
        }
        this.nativeEventBus = new CommonEventBus();
        await this.nativeEventBus.init();

        window.addEventListener("beforeunload", () => {
            this.nativeEventBus.publish(new AppCloseEvent());
        });

        this.nativePermissionsAccess = new ElectronPermissionsAccess();

        const configAccess = new CommonConfigAccess(this.nativeEventBus);
        await configAccess.initDefaultConfig(ElectronBootstrapper.configPath);
        this.nativeConfigAccess = configAccess;
        const fileAccess = new ElectronFileAccess(this.nativeConfigAccess);
        await fileAccess.init();
        this.nativeFileAccess = fileAccess;
        if (!(await this.nativeFileAccess.existsDirectory("logs")).value) {
            await this.nativeFileAccess.createDirectory("logs");
        }
        if (!(await this.nativeFileAccess.existsDirectory("data")).value) {
            await this.nativeFileAccess.createDirectory("data");
        }
        this.nativeLoggerFactory = new CommonLoggerFactory(this.nativeFileAccess);
        await this.nativeLoggerFactory.init();
        this.logger = this.nativeLoggerFactory.getLogger(ElectronBootstrapper);
        await configAccess.initRuntimeConfig(ElectronBootstrapper.configPath, this.logger, this.nativeFileAccess);
        this.nativeLaunchOptions = new ElectronLaunchOptions(this.logger, this.nativeEventBus, this.nativeConfigAccess);
        await this.nativeLaunchOptions.init();
        this.nativeAuthenticationAccess = new ElectronAuthenticationAccess(this.logger);
        this.nativeDatabaseFactory = new CommonDatabaseFactory(this.logger, this.nativeFileAccess);
        this.nativeDeviceInfoAccess = new ElectronDeviceInfoAccess();
        await this.nativeDeviceInfoAccess.init();
        const keychainAccess = new ElectronKeychainAccess(this.logger, this.nativeConfigAccess);
        await keychainAccess.init();
        this.nativeKeychainAccess = keychainAccess;
        this.nativeNotificationAccess = new ElectronNotificationAccess(this.logger, this.nativeConfigAccess);
        await this.nativeNotificationAccess.init();
        this.nativeScannerAccess = new CommonScannerAccess(this.logger);
        this.nativePushNotificationAccess = new ElectronPushNotificationAccess(this.logger, this.nativeConfigAccess, this.nativeEventBus);
        await this.nativePushNotificationAccess.init();
        this.initialized = true;

        this.nativeEventBus.subscribe(ThemeEvent, this.handleThemeEvent.bind(this));

        return Result.ok(undefined);
    }

    private handleThemeEvent(event: ThemeEvent): void {
        this.logger.trace("Received ThemeEvent", event);
    }
}
