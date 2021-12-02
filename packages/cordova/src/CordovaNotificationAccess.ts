import { ILogger } from "@js-soft/logging-abstractions";
import { ICordovaConfig, INativeConfigAccess, INativeNotificationAccess, INativeNotificationScheduleOptions } from "@js-soft/native-abstractions";
import { Result } from "@js-soft/ts-utils";

export class CordovaNotificationAccess implements INativeNotificationAccess {
    public constructor(private readonly logger: ILogger, private readonly config: INativeConfigAccess) {}

    public init(): Promise<Result<void>> {
        return Promise.resolve(Result.ok(undefined));
    }

    public async schedule(title: string, body: string, options?: INativeNotificationScheduleOptions): Promise<Result<number>> {
        const cordovaConfig: ICordovaConfig = this.config.get("cordova").value;
        const buttonInput = options?.buttonInput ? options.buttonInput : [];
        const textInput = options?.textInput ? options.textInput : [];
        const data = options?.data ? options.data : {};
        const id = options?.id ? options.id : Math.round(Math.random() * 1000);

        const buttonActions = buttonInput.map((button) => {
            const action = {
                title: button.title,
                type: "button",
                id: Math.round(Math.random() * 1000)
            };
            cordova.plugins.notification.local.on(action.id, button.callback);
            return action;
        });

        const textActions = textInput.map((text) => {
            const action = {
                title: text.title,
                type: "input",
                id: Math.round(Math.random() * 1000)
            };
            cordova.plugins.notification.local.on(action.id, (notification: any, input: any) => text.callback(input.text));
            return action;
        });

        await cordova.plugins.notification.local.schedule({
            title: title,
            text: body,
            actions: [...buttonActions, ...textActions],
            data: data,
            id: id,
            ...cordovaConfig.localNotificationConfig
        });

        return Result.ok(id);
    }

    public update(id: number, title: string, body: string, options?: INativeNotificationScheduleOptions): Promise<Result<void>> {
        const cordovaConfig: ICordovaConfig = this.config.get("cordova").value;
        const buttonInput = options?.buttonInput ? options.buttonInput : [];
        const textInput = options?.textInput ? options.textInput : [];
        const data = options?.data ? options.data : {};

        const buttonActions = buttonInput.map((button) => {
            const action = {
                title: button.title,
                type: "button",
                id: Math.round(Math.random() * 1000)
            };
            cordova.plugins.notification.local.on(action.id, button.callback);
            return action;
        });

        const textActions = textInput.map((text) => {
            const action = {
                title: text.title,
                type: "input",
                id: Math.round(Math.random() * 1000)
            };
            cordova.plugins.notification.local.on(action.id, text.callback);
            return action;
        });

        cordova.plugins.notification.local.update({
            title: title,
            text: body,
            actions: [...buttonActions, ...textActions],
            data: data,
            id: id,
            ...cordovaConfig.localNotificationConfig
        });

        return Promise.resolve(Result.ok(undefined));
    }

    public async clear(id: number): Promise<Result<void>> {
        await new Promise((resolve, reject) => cordova.plugins.notification.local.clear(id, resolve, reject));
        return Result.ok(undefined);
    }

    public async clearAll(): Promise<Result<void>> {
        const ids = await new Promise((resolve, reject) => cordova.plugins.notification.local.getIds(resolve, reject));
        await new Promise((resolve, reject) => cordova.plugins.notification.local.clearAll(ids, resolve, reject));
        return Result.ok(undefined);
    }

    public async getAll(): Promise<Result<number[]>> {
        const ids: number[] = await new Promise((resolve, reject) => cordova.plugins.notification.local.getIds(resolve, reject));
        return Result.ok(ids);
    }
}
