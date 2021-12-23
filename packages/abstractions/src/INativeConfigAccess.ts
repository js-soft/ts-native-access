import { ILogger } from "@js-soft/logging-abstractions";
import { Result } from "@js-soft/ts-utils";
import { INativeFileAccess } from "./INativeFileAccess";

enum AppType {
    Debug = "debug",
    Release = "release",
    Webapp = "webapp"
}

export interface IAppConfig {
    name: string;
    applicationId: string;
    type: AppType;
    pushToken: string | null;
    theme: string | null;
    transport: ITransportConfig;
    cordova?: ICordovaConfig;
    electron?: IElectronConfig;
    firebase?: IFirebaseConfig;
    localforage?: ILocalForageConfig;
    launchOptions?: ILaunchOptionsConfig;
}

export interface ITransportConfig {
    baseUrl: string;
    logLevel: string;
    datawalletEnabled: boolean;
    platformClientId: string;
    platformClientSecret: string;
}

export interface IFirebaseConfig {
    config: {
        apiKey: string;
        authDomain: string;
        projectId: string;
        storageBucket: string;
        messagingSenderId: string;
        appId: string;
    };
    vapidKey: string;
}
export interface ILocalForageConfig {
    driver: string;
    name: string;
    version: number;
    size: number;
    storeName: string;
    description: string;
}

export interface IElectronConfig {
    persistentIDsremoveDays: number;
    fcmSenderId: string;
    pushCredentials: any;
    persistentIDs: any;
}

export interface ILaunchOptionsConfig {
    uri: string;
}

export interface ICordovaConfig {
    pushChannelConfig: {
        id: string;
        description: string;
        importance: number;
        vibration: boolean;
        visibility: number;
    };
    localNotificationConfig: {
        foreground: boolean;
        channel: string;
        launch: boolean;
        icon: string;
        smallIcon: string;
    };
}

export interface INativeConfigAccess {
    get(key: string): Result<any>;
    set(key: string, value: any): Result<void>;
    remove(key: string): Result<void>;
    save(): Promise<Result<void>>;
    initRuntimeConfig(logger: ILogger, fileAccess: INativeFileAccess): Promise<Result<void>>;
    initDefaultConfig(): Promise<Result<void>>;
}
