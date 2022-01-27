import { Event, Result } from "@js-soft/ts-utils";

/**
 * Event bus used for sending and receiving messages
 */
export interface INativeEventBus {
    /**
     * Subscribe for a handler to be called each time a specific event occurs
     * @param event
     * @param handler
     */
    subscribe(event: Event, handler: Function): Result<number>;
    /**
     * Subscribe for a handler to be called the next time a specific event occurs
     * @param event
     * @param handler
     */
    subscribeOnce(event: Event, handler: Function): Result<number>;
    /**
     * Unsunscribe a handler from being called when a specific event occurs
     * @param event
     * @param id
     */
    unsubscribe(event: Event, id: number): Result<void>;
    /**
     * Publish a specific event
     * @param event
     */
    publish(event: Event): Result<void>;
    /**
     * Initialize the event bus
     */
    init(): Promise<Result<void>>;
}
