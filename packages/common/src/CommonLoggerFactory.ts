import { ILogger } from "@js-soft/logging-abstractions";
import { INativeFileAccess, INativeLoggerFactory } from "@js-soft/native-abstractions";
import { Result } from "@js-soft/ts-utils";
import Logger from "js-logger";

export class CommonLoggerFactory implements INativeLoggerFactory {
    public constructor(private readonly fileAccess: INativeFileAccess) {
        Logger.useDefaults({ defaultLevel: Logger.INFO });

        const consoleHandler = Logger.createDefaultHandler({
            formatter: function (messages, context) {
                messages.unshift(`${new Date().toISOString()} [${context.name === undefined ? "default" : context.name}]`);
            }
        });

        Logger.setHandler(async (messages: any[], context: any) => {
            await this.addLog(context.name === undefined ? "default" : context.name, this.formatMessages(messages, context));
            consoleHandler(messages, context);
        });
    }

    public init(): Promise<Result<void>> {
        return Promise.resolve(Result.ok(undefined));
    }

    private formatMessages(messages: any[], context?: Function) {
        let message = "";
        for (const item of messages) message += JSON.stringify(item);
        return `${new Date().toISOString()} [${!context || !context.name ? "default" : context.name}] ${message}`;
    }

    private readonly queue: { loggerName: string; message: string }[] = [];
    private busy = false;

    private async saveQueue() {
        this.busy = true;
        while (this.queue.length) {
            const log = this.queue.shift();
            if (log) {
                const loggerName = log.loggerName;
                const message = log.message;
                const date = new Date();
                const day = date.getDay();
                // Keep at most 7 versions of a log file, one for each day of the week
                const loggerPath = `logs/logs_${loggerName}_${day}`;
                const result1 = await this.fileAccess.infoFile(loggerPath);
                if (result1.isError) {
                    // file does not exist
                    await this.fileAccess.writeFile(loggerPath, `${message}\n`);
                } else {
                    await this.fileAccess.writeFile(loggerPath, `${message}\n`, undefined, true);
                }
                // delete log file from 7 days ago
                const removePath = `logs/logs_${loggerName}_${(day + 1) % 7}`;
                const result2 = await this.fileAccess.infoFile(removePath);
                if (!result2.isError) {
                    await this.fileAccess.deleteFile(removePath);
                }
            }
        }
        this.busy = false;
    }

    /**
     * Add the log to a queue for saving to filesystem
     * @param loggerName
     * @param message
     */
    private async addLog(loggerName: string, message: string) {
        // add log to queue
        this.queue.push({ loggerName, message });
        // save queue to fs if not already happening
        if (!this.busy) await this.saveQueue();
    }

    public getLogger(oName: string | Function): ILogger {
        let sName = oName instanceof Function ? oName.name : oName;
        if (oName instanceof Function) {
            sName = oName.name;
        } else if (typeof oName === "string") {
            sName = oName;
        } else {
            sName = "default";
        }
        return Logger.get(sName) as unknown as ILogger;
    }
}
