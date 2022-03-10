[@js-soft/native-electron](../README.md) / [Exports](../modules.md) / INativeEventBus

# Interface: INativeEventBus

Event bus used for sending and receiving messages

## Implemented by

-   [`CommonEventBus`](../classes/CommonEventBus.md)

## Table of contents

### Methods

-   [init](INativeEventBus.md#init)
-   [publish](INativeEventBus.md#publish)
-   [subscribe](INativeEventBus.md#subscribe)
-   [subscribeOnce](INativeEventBus.md#subscribeonce)
-   [unsubscribe](INativeEventBus.md#unsubscribe)

## Methods

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize the event bus.
Initially the event bus is in a **locked state**. Once an [AppReadyEvent](../classes/AppReadyEvent.md) is fired (usually from outside), the event bus is unlocked.
The locked event bus queues published events and publishes them once it is unlocked.

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

abstractions/dist/INativeEventBus.d.ts:34

---

### publish

▸ **publish**(`event`): `Result`<`void`, `ApplicationError`\>

Publish a specific event

#### Parameters

| Name    | Type    |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`Result`<`void`, `ApplicationError`\>

#### Defined in

abstractions/dist/INativeEventBus.d.ts:28

---

### subscribe

▸ **subscribe**(`event`, `handler`): `Result`<`number`, `ApplicationError`\>

Subscribe for a handler to be called each time a specific event occurs

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `event`   | `Event`    |
| `handler` | `Function` |

#### Returns

`Result`<`number`, `ApplicationError`\>

#### Defined in

abstractions/dist/INativeEventBus.d.ts:11

---

### subscribeOnce

▸ **subscribeOnce**(`event`, `handler`): `Result`<`number`, `ApplicationError`\>

Subscribe for a handler to be called the next time a specific event occurs

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `event`   | `Event`    |
| `handler` | `Function` |

#### Returns

`Result`<`number`, `ApplicationError`\>

#### Defined in

abstractions/dist/INativeEventBus.d.ts:17

---

### unsubscribe

▸ **unsubscribe**(`event`, `id`): `Result`<`void`, `ApplicationError`\>

Unsunscribe a handler from being called when a specific event occurs

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `event` | `Event`  |
| `id`    | `number` |

#### Returns

`Result`<`void`, `ApplicationError`\>

#### Defined in

abstractions/dist/INativeEventBus.d.ts:23
