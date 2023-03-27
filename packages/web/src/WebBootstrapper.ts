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
    INativeLoggerFactory,
    INativeNotificationAccess,
    INativePushNotificationAccess,
    INativeScannerAccess,
    NativeErrorCodes,
    NativeFileStorage,
    NativePlatform,
    ThemeEvent
} from "@js-soft/native-abstractions";
import { CommonConfigAccess, CommonDatabaseFactory, CommonEventBus, CommonLoggerFactory, CommonScannerAccess } from "@js-soft/native-common";
import { Result } from "@js-soft/ts-utils";
import { WebDeviceInfoAccess } from ".";
import { WebAuthenticationAccess } from "./WebAuthenticationAccess";
import { WebFileAccess } from "./WebFileAccess";
import { WebKeychainAccess } from "./WebKeychainAccess";
import { WebNotificationAccess } from "./WebNotificationAccess";
import { WebPushNotificationAccess } from "./WebPushNotificationAccess";

export class WebBootstrapper implements INativeBootstrapper {
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

    private initialized = false;

    public get isInitialized(): boolean {
        return this.initialized;
    }

    public get nativeEnvironment(): INativeEnvironment {
        if (!this.initialized) {
            throw new Error(NativeErrorCodes.BOOTSTRAP_NOT_INITIALIZED);
        }
        return {
            platform: NativePlatform.Web,
            eventBus: this.nativeEventBus,
            authenticationAccess: this.nativeAuthenticationAccess,
            configAccess: this.nativeConfigAccess,
            databaseFactory: this.nativeDatabaseFactory,
            deviceInfoAccess: this.nativeDeviceInfoAccess,
            fileAccess: this.nativeFileAccess,
            keychainAccess: this.nativeKeychainAccess,
            loggerFactory: this.nativeLoggerFactory,
            notificationAccess: this.nativeNotificationAccess,
            scannerAccess: this.nativeScannerAccess,
            pushNotificationAccess: this.nativePushNotificationAccess
        };
    }

    public async init(): Promise<Result<void>> {
        if (this.initialized) {
            throw new Error(NativeErrorCodes.BOOTSTRAP_ALREADY_INITIALIZED);
        }

        const serviceWorker: ServiceWorkerRegistration = await navigator.serviceWorker.register("./resources/jss.native-web/WebServiceWorker.js");
        this.nativeEventBus = new CommonEventBus();
        await this.nativeEventBus.init();

        window.addEventListener("beforeunload", () => {
            this.nativeEventBus.publish(new AppCloseEvent());
        });

        const configAccess = new CommonConfigAccess(this.nativeEventBus);
        await configAccess.initDefaultConfig(WebBootstrapper.configPath);
        this.nativeConfigAccess = configAccess;
        const fileAccess = new WebFileAccess(this.nativeConfigAccess);
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
        this.logger = this.nativeLoggerFactory.getLogger(WebBootstrapper);
        await configAccess.initRuntimeConfig(WebBootstrapper.configPath, this.logger, this.nativeFileAccess);
        this.nativeAuthenticationAccess = new WebAuthenticationAccess(this.logger);
        this.nativeDatabaseFactory = new CommonDatabaseFactory(this.logger, this.nativeFileAccess);
        this.nativeDeviceInfoAccess = new WebDeviceInfoAccess(this.nativeConfigAccess);
        await this.nativeDeviceInfoAccess.init();
        const keychainAccess = new WebKeychainAccess(this.logger);
        await keychainAccess.init();
        this.nativeKeychainAccess = keychainAccess;
        this.nativeNotificationAccess = new WebNotificationAccess(this.logger, serviceWorker);
        await this.nativeNotificationAccess.init();
        this.nativePushNotificationAccess = new WebPushNotificationAccess(this.logger, this.nativeConfigAccess, this.nativeEventBus, serviceWorker);
        await this.nativePushNotificationAccess.init();
        this.nativeScannerAccess = new CommonScannerAccess(this.logger);
        this.initialized = true;

        this.nativeEventBus.subscribe(ThemeEvent, this.handleThemeEvent.bind(this));

        return Result.ok(undefined);
    }

    private handleThemeEvent(event: ThemeEvent): void {
        this.logger.trace("Received ThemeEvent", event);
    }
}
