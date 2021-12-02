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

export interface INativeEnvironment {
    platform: NativePlatform;
    eventBus: INativeEventBus;
    authenticationAccess: INativeAuthenticationAccess;
    configAccess: INativeConfigAccess;
    databaseFactory: ILokiJsDatabaseFactory;
    deviceInfoAccess: INativeDeviceInfoAccess;
    fileAccess: INativeFileAccess;
    keychainAccess: INativeKeychainAccess;
    loggerFactory: INativeLoggerFactory;
    notificationAccess: INativeNotificationAccess;
    pushNotificationAccess: INativePushNotificationAccess;
    scannerAccess: INativeScannerAccess;
}
