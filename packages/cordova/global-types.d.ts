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
    handleOpenURL(uri: string): Promise<void>;
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
