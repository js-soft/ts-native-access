import { ILogger } from "@js-soft/logging-abstractions";
import { INativeFileAccess, INativeLoggerFactory } from "@js-soft/native-abstractions";
import { Result } from "@js-soft/ts-utils";
import Logger from "js-logger";

export class CommonLoggerFactory implements INativeLoggerFactory {
    public constructor(private readonly fileAccess: INativeFileAccess) {}

    public init(): Promise<Result<void>> {
        Logger.useDefaults({
            defaultLevel: Logger.INFO
        });

        const consoleHandler = Logger.createDefaultHandler({
            formatter: function (messages, context) {
                messages.unshift(`${new Date().toISOString()} [${context.name === "" ? "default" : context.name}]`);
            }
        });
        this._initWeb(consoleHandler);

        return Promise.resolve(Result.ok(undefined));
    }

    private formatMessages(messages: any[], context?: Function) {
        let message = "";

        for (const item of messages) {
            message += JSON.stringify(item);
        }

        return `${new Date().toISOString()} [${!context || !context.name ? "default" : context.name}] ${message}`;
    }

    private _initWeb(consoleHandler: Function) {
        const saveLogs = async (loggerName: string, message: string) => {
            const loggerPath = `logs/logs-${loggerName}`;

            const result = await this.fileAccess.infoFile(loggerPath);
            if (result.isError) {
                // file does not exist
                await this.fileAccess.writeFile(loggerPath, `${message}\n`);
            } else {
                await this.fileAccess.writeFile(loggerPath, `${message}\n`, undefined, true);
            }
        };

        Logger.setHandler(async (messages: any[], context: any) => {
            await saveLogs(context.name, this.formatMessages(messages, context));
            consoleHandler(messages, context);
        });
    }

    public getLogger(oName: string | Function): ILogger {
        let sName = oName instanceof Function ? oName.name : oName;
        if (oName instanceof Function) {
            sName = oName.name;
        } else if (typeof oName === "string") {
            sName = oName;
        } else {
            sName = "";
        }

        return Logger.get(sName) as unknown as ILogger;
    }
}
