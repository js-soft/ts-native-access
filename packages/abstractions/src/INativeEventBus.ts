import { Event, Result } from "@js-soft/ts-utils";

export interface INativeEventBus {
    subscribe(event: Event, handler: Function): Result<number>;
    subscribeOnce(event: Event, handler: Function): Result<number>;
    unsubscribe(event: Event, id: number): Result<void>;
    publish(event: Event): Result<void>;
    init(): Promise<Result<void>>;
}
