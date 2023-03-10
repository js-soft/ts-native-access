import { ILokiJsDatabaseFactory } from "@js-soft/docdb-access-loki";
import { ILogger } from "@js-soft/logging-abstractions";
import {
    AppCloseEvent,
    BackButtonEvent,
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
    INativePushNotificationAccess,
    INativeScannerAccess,
    NativeErrorCodes,
    NativeFileStorage,
    NativePlatform,
    ThemeEvent,
    ThemeTextStyle
} from "@js-soft/native-abstractions";
import { CommonConfigAccess, CommonDatabaseFactory, CommonEventBus, CommonLoggerFactory } from "@js-soft/native-common";
import { ApplicationError, Result } from "@js-soft/ts-utils";
import { CordovaAuthenticationAccess } from "./CordovaAuthenticationAccess";
import { CordovaDeviceInfoAccess } from "./CordovaDeviceInfoAccess";
import { CordovaFileAccess } from "./CordovaFileAccess";
import { CordovaKeychainAccess } from "./CordovaKeychainAccess";
import { CordovaLaunchOptions } from "./CordovaLaunchOptions";
import { CordovaNotificationAccess } from "./CordovaNotificationAccess";
import { CordovaPushNotificationAccess } from "./CordovaPushNotificationAccess";
import { CordovaScannerAccess } from "./CordovaScannerAccess";

export class CordovaBootstrapper implements INativeBootstrapper {
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

    private initialized = false;
    public get isInitialized(): boolean {
        return this.initialized;
    }

    public get nativeEnvironment(): INativeEnvironment {
        if (!this.initialized) {
            throw new Error(NativeErrorCodes.BOOTSTRAP_NOT_INITIALIZED);
        }

        return {
            platform: NativePlatform.Cordova,
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
            scannerAccess: this.nativeScannerAccess
        };
    }

    public constructor() {
        window.handleOpenURL = (uri) => {
            window.earlyHandleOpenURLEventContent = uri;
        };
    }

    public async init(): Promise<Result<void>> {
        if (this.initialized) {
            throw new Error(NativeErrorCodes.BOOTSTRAP_ALREADY_INITIALIZED);
        }
        await new Promise((resolve) => document.addEventListener("deviceready", resolve));

        this.nativeEventBus = new CommonEventBus();
        await this.nativeEventBus.init();

        window.addEventListener("beforeunload", () => {
            this.nativeEventBus.publish(new AppCloseEvent());
        });

        const configAccess = new CommonConfigAccess(this.nativeEventBus);
        await configAccess.initDefaultConfig(CordovaBootstrapper.configPath);
        this.nativeConfigAccess = configAccess;
        const fileAccess = new CordovaFileAccess(this.nativeConfigAccess);
        await fileAccess.init();
        this.nativeFileAccess = fileAccess;
        if (!(await this.nativeFileAccess.existsDirectory("logs", NativeFileStorage.App)).value) {
            await this.nativeFileAccess.createDirectory("logs", NativeFileStorage.App);
        }
        if (!(await this.nativeFileAccess.existsDirectory("data", NativeFileStorage.App)).value) {
            await this.nativeFileAccess.createDirectory("data", NativeFileStorage.App);
        }

        this.nativeLoggerFactory = new CommonLoggerFactory(this.nativeFileAccess);
        await this.nativeLoggerFactory.init();
        this.logger = this.nativeLoggerFactory.getLogger(CordovaBootstrapper);
        await configAccess.initRuntimeConfig(CordovaBootstrapper.configPath, this.logger, this.nativeFileAccess);
        this.nativeLaunchOptions = new CordovaLaunchOptions(this.logger, this.nativeEventBus, this.nativeConfigAccess);
        await this.nativeLaunchOptions.init();
        this.nativeAuthenticationAccess = new CordovaAuthenticationAccess(this.logger);
        this.nativeDatabaseFactory = new CommonDatabaseFactory(this.logger, this.nativeFileAccess);
        this.nativeDeviceInfoAccess = new CordovaDeviceInfoAccess();
        await this.nativeDeviceInfoAccess.init();
        const keychainAccess = new CordovaKeychainAccess(this.logger, this.nativeConfigAccess);
        await keychainAccess.init();
        this.nativeKeychainAccess = keychainAccess;
        this.nativeNotificationAccess = new CordovaNotificationAccess(this.logger, this.nativeConfigAccess);
        await this.nativeNotificationAccess.init();
        this.nativeScannerAccess = new CordovaScannerAccess(this.logger);
        this.nativePushNotificationAccess = new CordovaPushNotificationAccess(this.logger, this.nativeConfigAccess, this.nativeEventBus);
        await this.nativePushNotificationAccess.init();
        this.initialized = true;

        this.nativeEventBus.subscribe(ThemeEvent, this.handleThemeEvent.bind(this));

        document.addEventListener("backbutton", () => this.nativeEventBus.publish(new BackButtonEvent()), false);

        return Result.ok(undefined);
    }

    private handleThemeEvent(event: ThemeEvent): void {
        this.logger.trace("Received ThemeEvent", event);
        if (!StatusBar) {
            const error = new ApplicationError(NativeErrorCodes.THEME_COULD_NOT_BE_APPLIED, "Theme Error: StatusBar is not defined or initialized.");
            this.logger.error(error);
            return;
        }
        switch (event.textStyle) {
            case ThemeTextStyle.Light:
                StatusBar.styleLightContent();
                break;
            case ThemeTextStyle.Dark:
                StatusBar.styleDefault();
                break;
        }
        StatusBar.backgroundColorByHexString(event.backgroundColor);
    }
}
