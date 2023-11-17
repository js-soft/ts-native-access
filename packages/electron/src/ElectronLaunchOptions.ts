import { ILogger } from "@js-soft/logging-abstractions";
import { FileViewEvent, ILaunchOptionsConfig, INativeConfigAccess, INativeEventBus, INativeLaunchOptions, UrlOpenEvent } from "@js-soft/native-abstractions";
import { Result } from "@js-soft/ts-utils";
import { ipcRenderer } from "electron";

export class ElectronLaunchOptions implements INativeLaunchOptions {
    public constructor(
        private readonly logger: ILogger,
        private readonly eventBus: INativeEventBus,
        private readonly config: INativeConfigAccess
    ) {}

    public init(): Promise<Result<void>> {
        const launchOptionsConfig: ILaunchOptionsConfig = this.config.get("launchOptions").value;
        const handleOpenURL = (uri: string) => {
            this.logger.info(`Incoming uri: ${uri}`);

            if (uri.startsWith(launchOptionsConfig.uri)) {
                this.eventBus.publish(new UrlOpenEvent(uri));
                this.logger.info(`Electron url open: ${uri}`);
                return;
            }

            this.eventBus.publish(new FileViewEvent(uri));
            this.logger.info(`Electron file view: ${uri}`);
        };

        // Electrons main process emits an event upon registering an URL press
        // For info about how the main process registers URL presses look at ../scripts/build/res/electronMainProcessPatch.js
        ipcRenderer.on("url", (_event, uri) => handleOpenURL(uri));
        // Notify the main process, that the renderer is ready to handle a uri event
        ipcRenderer.send("url-ready", null);
        return Promise.resolve(Result.ok(undefined));
    }
}
