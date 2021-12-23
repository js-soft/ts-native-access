import { ILogger } from "@js-soft/logging-abstractions";
import { INativeConfigAccess, INativeNotificationAccess, INativeNotificationScheduleOptions } from "@js-soft/native-abstractions";
import { Result } from "@js-soft/ts-utils";
// @ts-expect-error
import { notify } from "node-notifier";

export class ElectronNotificationAccess implements INativeNotificationAccess {
    // Store scheduled notifications in memory => resets after restart
    private notifications: number[] = [];
    private appId: string;

    public constructor(private readonly logger: ILogger, private readonly config: INativeConfigAccess) {}

    public init(): Promise<Result<void>> {
        this.appId = this.config.get("appId").value;
        return Promise.resolve(Result.ok(undefined));
    }

    public schedule(title: string, body: string, options?: INativeNotificationScheduleOptions): Promise<Result<number>> {
        if (options?.textInput) this.logger.warn("Notification text input actions not supported on this platform");

        const id = options?.id ? options.id : Math.round(Math.random() * 1000);

        notify(
            {
                title: title,
                message: body,
                actions: options?.buttonInput?.map((elem) => elem.title),
                icon: `${__dirname}.unpacked/img/app.png`,
                id: id,
                appID: this.appId
            },
            (err: string, response: any) => {
                if (err) this.logger.error(["Local Notifications Error:", err]);
                switch (response) {
                    case "":
                        break;
                    case "timeout":
                        this.filterNotifications(id);
                        break;
                    case "dismissed":
                        this.filterNotifications(id);
                        break;
                    case "activate":
                        // notification clicked
                        this.filterNotifications(id);
                        if (options?.callback) options.callback();
                        break;
                    default:
                        // button clicked
                        this.filterNotifications(id);
                        const action = options?.buttonInput?.filter((elem) => elem.title.toLowerCase() === response);
                        if (!action || action.length !== 1) {
                            this.logger.error("Local Notifications Error:", "Cannot determine notification action callback function");
                        } else {
                            action[0].callback();
                        }
                        break;
                }
            }
        );
        this.notifications.push(id);

        return Promise.resolve(Result.ok(id));
    }

    public async update(id: number, title: string, body: string, options?: INativeNotificationScheduleOptions): Promise<Result<void>> {
        await this.schedule(title, body, { ...options, id });
        return Result.ok(undefined);
    }

    public clear(id: number): Promise<Result<void>> {
        notify({ remove: id, message: "", appID: this.appId, title: "" }); // TODO: JSSNMSHDD-2684 (make appid configurable)
        this.filterNotifications(id);
        return Promise.resolve(Result.ok(undefined));
    }

    public clearAll(): Promise<Result<void>> {
        this.notifications.forEach((id) => this.clear(id));
        return Promise.resolve(Result.ok(undefined));
    }

    public getAll(): Promise<Result<number[]>> {
        return Promise.resolve(Result.ok(this.notifications));
    }

    private filterNotifications(id: number): void {
        this.notifications = this.notifications.filter((elem) => elem !== id);
    }
}
