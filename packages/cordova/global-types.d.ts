interface Cordova {
    plugins: any;
    platformId: string;
}

interface IntentShim {
    getIntent: Function;
}

interface Plugins {
    intentShim: IntentShim;
}

interface App {
    isInitialized: Function;
}

interface FilePath {
    resolveNativePath: Function;
}

interface Fingerprint {
    isAvailable: Function;
    show: Function;
    registerBiometricSecret: Function;
    loadBiometricSecret: Function;
}

interface Window {
    App: App;
    isCordovaApp: boolean;

    earlyOpenUrlEventContent: string | undefined;
    openedByOpenUrlEvent: boolean | undefined;

    handleOpenURL(uri: string): Promise<void> | void;
}

interface StatusBar {
    styleDefault(): void;
    styleLightContent(): void;
    backgroundColorByHexString(backgroundColor: string): void;
}

declare var StatusBar: StatusBar | undefined;
declare var cordova: Cordova;
declare var plugins: Plugins;
declare var FilePath: FilePath;
declare var Fingerprint: Fingerprint;
