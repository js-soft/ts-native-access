[@js-soft/native-web](../README.md) / [Exports](../modules.md) / CommonEventBus

# Class: CommonEventBus

## Implements

-   [`INativeEventBus`](../interfaces/INativeEventBus.md)

## Table of contents

### Constructors

-   [constructor](CommonEventBus.md#constructor)

### Properties

-   [eventBus](CommonEventBus.md#eventbus)
-   [locked](CommonEventBus.md#locked)
-   [queue](CommonEventBus.md#queue)

### Methods

-   [init](CommonEventBus.md#init)
-   [publish](CommonEventBus.md#publish)
-   [subscribe](CommonEventBus.md#subscribe)
-   [subscribeOnce](CommonEventBus.md#subscribeonce)
-   [unsubscribe](CommonEventBus.md#unsubscribe)

## Constructors

### constructor

• **new CommonEventBus**()

## Properties

### eventBus

• `Private` **eventBus**: `any`

#### Defined in

common/dist/CommonEventBus.d.ts:4

---

### locked

• `Private` **locked**: `any`

#### Defined in

common/dist/CommonEventBus.d.ts:5

---

### queue

• `Private` **queue**: `any`

#### Defined in

common/dist/CommonEventBus.d.ts:6

## Methods

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize the event bus.
Initially the event bus is in a **locked state**. Once an [AppReadyEvent](AppReadyEvent.md) is fired (usually from outside), the event bus is unlocked.
The locked event bus queues published events and publishes them once it is unlocked.

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeEventBus](../interfaces/INativeEventBus.md).[init](../interfaces/INativeEventBus.md#init)

#### Defined in

common/dist/CommonEventBus.d.ts:7

---

### publish

▸ **publish**(`event`): `Result`<`void`, `ApplicationError`\>

Publish Events on the EventBus.
The EventBus is initially locked.
Published events are queued to be published after the EventBus is unlocked.
To unlock the EventBus an AppReadyEvent has to be published.

#### Parameters

| Name    | Type    |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`Result`<`void`, `ApplicationError`\>

#### Implementation of

[INativeEventBus](../interfaces/INativeEventBus.md).[publish](../interfaces/INativeEventBus.md#publish)

#### Defined in

common/dist/CommonEventBus.d.ts:19

---

### subscribe

▸ **subscribe**(`event`, `handler`): `Result`<`number`, `ApplicationError`\>

Subscribe for a handler to be called each time a specific event occurs

#### Parameters

| Name      | Type                       |
| :-------- | :------------------------- |
| `event`   | `Event`                    |
| `handler` | (`event`: `any`) => `void` |

#### Returns

`Result`<`number`, `ApplicationError`\>

#### Implementation of

[INativeEventBus](../interfaces/INativeEventBus.md).[subscribe](../interfaces/INativeEventBus.md#subscribe)

#### Defined in

common/dist/CommonEventBus.d.ts:8

---

### subscribeOnce

▸ **subscribeOnce**(`event`, `handler`): `Result`<`number`, `ApplicationError`\>

Subscribe for a handler to be called the next time a specific event occurs

#### Parameters

| Name      | Type                       |
| :-------- | :------------------------- |
| `event`   | `Event`                    |
| `handler` | (`event`: `any`) => `void` |

#### Returns

`Result`<`number`, `ApplicationError`\>

#### Implementation of

[INativeEventBus](../interfaces/INativeEventBus.md).[subscribeOnce](../interfaces/INativeEventBus.md#subscribeonce)

#### Defined in

common/dist/CommonEventBus.d.ts:9

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

#### Implementation of

[INativeEventBus](../interfaces/INativeEventBus.md).[unsubscribe](../interfaces/INativeEventBus.md#unsubscribe)

#### Defined in

common/dist/CommonEventBus.d.ts:10
