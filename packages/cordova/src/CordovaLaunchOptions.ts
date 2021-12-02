import { ILogger } from "@js-soft/logging-abstractions";
import { FileViewEvent, ILaunchOptionsConfig, INativeConfigAccess, INativeEventBus, INativeLaunchOptions, UrlOpenEvent } from "@js-soft/native-abstractions";
import { Result } from "@js-soft/ts-utils";

export class CordovaLaunchOptions implements INativeLaunchOptions {
    public constructor(private readonly logger: ILogger, private readonly eventBus: INativeEventBus, private readonly config: INativeConfigAccess) {}

    public async init(): Promise<Result<void>> {
        const launchOptionsConfig: ILaunchOptionsConfig = this.config.get("launchOptions").value;
        // This function gets called by cordova-plugin-customurlscheme on android and ios
        // and manually on electron (see below)
        window.handleOpenURL = (uri) => {
            // has to be assigned to window because of cordova plugin
            this.logger.info(`Incoming uri: ${uri}`);
            // This function decides, which event to publish for the respective platforms
            const handleURLType = (uri: string) => {
                switch (cordova.platformId) {
                    case "android":
                        if (uri.substr(0, 8) === launchOptionsConfig.uri) {
                            this.eventBus.publish(new UrlOpenEvent(uri));
                            this.logger.info(`Android url open: ${uri}`);
                        } else if (uri.substr(0, 10) === "content://") {
                            this.eventBus.publish(new FileViewEvent(uri));
                            this.logger.info(`Android file view: ${uri}`);
                        }
                        break;
                    case "ios":
                        if (uri.substr(0, 8) === launchOptionsConfig.uri) {
                            this.eventBus.publish(new UrlOpenEvent(uri));
                            this.logger.info(`iOS url open: ${uri}`);
                        } else if (uri.substr(0, 7) === "file://") {
                            this.eventBus.publish(new FileViewEvent(uri));
                            this.logger.info(`iOS file view: ${uri}`);
                        }
                        break;
                }
            };

            handleURLType(uri);
            return Promise.resolve();
        };

        const androidIntentInit = async () => {
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
        };

        if (cordova.platformId === "android") await androidIntentInit();
        return Result.ok(undefined);
    }
}
