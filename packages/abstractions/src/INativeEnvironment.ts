import { ILokiJsDatabaseFactory } from "@js-soft/docdb-access-loki";
import { INativeAuthenticationAccess } from "./INativeAuthenticationAccess";
import { INativeConfigAccess } from "./INativeConfigAccess";
import { INativeDeviceInfoAccess } from "./INativeDeviceInfoAccess";
import { INativeEventBus } from "./INativeEventBus";
import { INativeFileAccess } from "./INativeFileAccess";
import { INativeKeychainAccess } from "./INativeKeychainAccess";
import { INativeLoggerFactory } from "./INativeLoggerFactory";
import { INativeNotificationAccess } from "./INativeNotificationAccess";
import { INativePushNotificationAccess } from "./INativePushNotificationAccess";
import { INativeScannerAccess } from "./INativeScannerAccess";
import { NativePlatform } from "./NativePlatform";

/**
 * Modules for native functionalities: These modules provide an interface for accessing native features of the device.
 */
export interface INativeEnvironment {
    /**
     * Framework used to access native functionalities
     */
    platform: NativePlatform;
    /**
     * Event bus for sending and receiving events
     */
    eventBus: INativeEventBus;
    /**
     * Module for biometric user authentication
     */
    authenticationAccess: INativeAuthenticationAccess;
    /**
     * Module for configuration of the app
     */
    configAccess: INativeConfigAccess;
    /**
     * Module for database creation
     */
    databaseFactory: ILokiJsDatabaseFactory;
    /**
     * Module for retrieving information about the device running the app
     */
    deviceInfoAccess: INativeDeviceInfoAccess;
    /**
     * Module for accessing the filesystem (read/write)
     */
    fileAccess: INativeFileAccess;
    /**
     * Module for accessing the native keychain (read/write)
     */
    keychainAccess: INativeKeychainAccess;
    /**
     * Module for creating a logger
     */
    loggerFactory: INativeLoggerFactory;
    /**
     * Module for creating local notifications
     */
    notificationAccess: INativeNotificationAccess;
    /**
     * Module for receiving and processing incoming remote push notifications
     */
    pushNotificationAccess: INativePushNotificationAccess;
    /**
     * Module for scanning qr-codes
     */
    scannerAccess: INativeScannerAccess;
}
