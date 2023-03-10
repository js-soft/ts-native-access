import { ILogger } from "@js-soft/logging-abstractions";
import { FileViewEvent, ILaunchOptionsConfig, INativeConfigAccess, INativeEventBus, INativeLaunchOptions, UrlOpenEvent } from "@js-soft/native-abstractions";
import { Result } from "@js-soft/ts-utils";

export class CordovaLaunchOptions implements INativeLaunchOptions {
    private readonly launchOptionsConfig: ILaunchOptionsConfig;

    public constructor(private readonly logger: ILogger, private readonly eventBus: INativeEventBus, private readonly config: INativeConfigAccess) {
        this.launchOptionsConfig = this.config.get("launchOptions").value;
    }

    public async init(): Promise<Result<void>> {
        if (window.earlyHandleOpenURLEventContent) {
            this.handleUrlOpenEvent(window.earlyHandleOpenURLEventContent);
            window.earlyHandleOpenURLEventContent = undefined;
        }

        // This function gets called by cordova-plugin-customurlscheme on android and ios
        // has to be assigned to window because of cordova plugin
        window.handleOpenURL = (uri) => this.handleUrlOpenEvent(uri);

        if (cordova.platformId === "android") await this.initAndroidIntent();
        return Result.ok(undefined);
    }

    private async initAndroidIntent(): Promise<void> {
        const intent: any = await new Promise((resolve, reject) => plugins.intentShim.getIntent(resolve, reject));
        switch (intent.action) {
            case "android.intent.action.SEND":
                this.eventBus.publish(new FileViewEvent(intent.clipItems[0].uri));
                this.logger.info("Opened by android SEND intent");
                break;
            case "android.intent.action.MAIN":
                this.logger.info("Opened by android MAIN (standard) intent");
                break;
        }
    }

    private handleUrlOpenEvent(uri: string): void {
        this.logger.info(`Incoming uri: ${uri}`);

        if (uri.startsWith(this.launchOptionsConfig.uri)) {
            this.eventBus.publish(new UrlOpenEvent(uri));
            this.logger.info(`URL open: ${uri}`);

            return;
        }

        if (uri.startsWith("file://") || uri.startsWith("content://")) {
            this.eventBus.publish(new FileViewEvent(uri));
            this.logger.info(`file view: ${uri}`);
        }
    }
}
