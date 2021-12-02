import { INativePushNotification } from "./INativePushNotification";
import { NativeEvent } from "./NativeEvent";

export class RemoteNotificationRegistrationEvent extends NativeEvent {
    public static namespace = "RemoteNotificationRegistration";
    public constructor(public readonly token: string) {
        super(RemoteNotificationRegistrationEvent.namespace);
    }
}

export class RemoteNotificationEvent extends NativeEvent {
    public static namespace = "RemoteNotification";
    public constructor(public readonly notification: INativePushNotification) {
        super(RemoteNotificationEvent.namespace);
    }
}

export class ConfigurationSaveEvent extends NativeEvent {
    public static namespace = "ConfigurationSave";
    public constructor() {
        super(ConfigurationSaveEvent.namespace);
    }
}

export class ConfigurationSetEvent extends NativeEvent {
    public static readonly namespace = "ConfigurationSet";
    public constructor(public readonly key: string, public readonly value: any) {
        super(ConfigurationSetEvent.namespace);
    }
}

export class ConfigurationRemoveEvent extends NativeEvent {
    public static namespace = "ConfigurationRemove";
    public constructor(public readonly key: string) {
        super(ConfigurationRemoveEvent.namespace);
    }
}

export class UrlOpenEvent extends NativeEvent {
    public static namespace = "UrlOpenEvent";
    public constructor(public readonly url: string) {
        super(UrlOpenEvent.namespace);
    }
}

export class FileViewEvent extends NativeEvent {
    public static namespace = "FileViewEvent";
    public constructor(public readonly uri: string) {
        super(FileViewEvent.namespace);
    }
}

export class AppReadyEvent extends NativeEvent {
    public static namespace = "AppReadyEvent";
    public constructor() {
        super(AppReadyEvent.namespace);
    }
}

export class AppCloseEvent extends NativeEvent {
    public static namespace = "AppCloseEvent";
    public constructor() {
        super(AppCloseEvent.namespace);
    }
}

export enum ThemeTextStyle {
    Dark = "dark",
    Light = "light"
}

export class ThemeEvent extends NativeEvent {
    public static namespace = "ThemeEvent";
    public constructor(public readonly backgroundColor: string, public readonly textStyle: ThemeTextStyle, public readonly textColor?: string, public readonly image?: string) {
        super(ThemeEvent.namespace);
    }
}

export class BackButtonEvent extends NativeEvent {
    public static namespace = "BackButtonEvent";
    public constructor() {
        super(BackButtonEvent.namespace);
    }
}
