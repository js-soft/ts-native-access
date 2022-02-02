[@js-soft/native-cordova](../README.md) / [Exports](../modules.md) / CommonEventBus

# Class: CommonEventBus

## Implements

- [`INativeEventBus`](../interfaces/INativeEventBus.md)

## Table of contents

### Constructors

- [constructor](CommonEventBus.md#constructor)

### Properties

- [eventBus](CommonEventBus.md#eventbus)
- [locked](CommonEventBus.md#locked)
- [queue](CommonEventBus.md#queue)

### Methods

- [init](CommonEventBus.md#init)
- [publish](CommonEventBus.md#publish)
- [subscribe](CommonEventBus.md#subscribe)
- [subscribeOnce](CommonEventBus.md#subscribeonce)
- [unsubscribe](CommonEventBus.md#unsubscribe)

## Constructors

### constructor

• **new CommonEventBus**()

## Properties

### eventBus

• `Private` **eventBus**: `any`

#### Defined in

common/dist/CommonEventBus.d.ts:4

___

### locked

• `Private` **locked**: `any`

#### Defined in

common/dist/CommonEventBus.d.ts:5

___

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

___

### publish

▸ **publish**(`event`): `Result`<`void`, `ApplicationError`\>

Publish a specific event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`Result`<`void`, `ApplicationError`\>

#### Implementation of

[INativeEventBus](../interfaces/INativeEventBus.md).[publish](../interfaces/INativeEventBus.md#publish)

#### Defined in

common/dist/CommonEventBus.d.ts:11

___

### subscribe

▸ **subscribe**(`event`, `handler`): `Result`<`number`, `ApplicationError`\>

Subscribe for a handler to be called each time a specific event occurs

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |
| `handler` | (`event`: `any`) => `void` |

#### Returns

`Result`<`number`, `ApplicationError`\>

#### Implementation of

[INativeEventBus](../interfaces/INativeEventBus.md).[subscribe](../interfaces/INativeEventBus.md#subscribe)

#### Defined in

common/dist/CommonEventBus.d.ts:8

___

### subscribeOnce

▸ **subscribeOnce**(`event`, `handler`): `Result`<`number`, `ApplicationError`\>

Subscribe for a handler to be called the next time a specific event occurs

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |
| `handler` | (`event`: `any`) => `void` |

#### Returns

`Result`<`number`, `ApplicationError`\>

#### Implementation of

[INativeEventBus](../interfaces/INativeEventBus.md).[subscribeOnce](../interfaces/INativeEventBus.md#subscribeonce)

#### Defined in

common/dist/CommonEventBus.d.ts:9

___

### unsubscribe

▸ **unsubscribe**(`event`, `id`): `Result`<`void`, `ApplicationError`\>

Unsunscribe a handler from being called when a specific event occurs

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |
| `id` | `number` |

#### Returns

`Result`<`void`, `ApplicationError`\>

#### Implementation of

[INativeEventBus](../interfaces/INativeEventBus.md).[unsubscribe](../interfaces/INativeEventBus.md#unsubscribe)

#### Defined in

common/dist/CommonEventBus.d.ts:10
