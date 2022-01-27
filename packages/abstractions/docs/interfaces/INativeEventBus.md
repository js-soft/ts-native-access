[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / INativeEventBus

# Interface: INativeEventBus

Event bus used for sending and receiving messages

## Table of contents

### Methods

- [init](INativeEventBus.md#init)
- [publish](INativeEventBus.md#publish)
- [subscribe](INativeEventBus.md#subscribe)
- [subscribeOnce](INativeEventBus.md#subscribeonce)
- [unsubscribe](INativeEventBus.md#unsubscribe)

## Methods

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize the event bus.

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeEventBus.ts:33](https://github.com/js-soft/ts-native-access/blob/20019e8/packages/abstractions/src/INativeEventBus.ts#L33)

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

#### Defined in

[src/INativeEventBus.ts:29](https://github.com/js-soft/ts-native-access/blob/20019e8/packages/abstractions/src/INativeEventBus.ts#L29)

___

### subscribe

▸ **subscribe**(`event`, `handler`): `Result`<`number`, `ApplicationError`\>

Subscribe for a handler to be called each time a specific event occurs

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |
| `handler` | `Function` |

#### Returns

`Result`<`number`, `ApplicationError`\>

#### Defined in

[src/INativeEventBus.ts:12](https://github.com/js-soft/ts-native-access/blob/20019e8/packages/abstractions/src/INativeEventBus.ts#L12)

___

### subscribeOnce

▸ **subscribeOnce**(`event`, `handler`): `Result`<`number`, `ApplicationError`\>

Subscribe for a handler to be called the next time a specific event occurs

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |
| `handler` | `Function` |

#### Returns

`Result`<`number`, `ApplicationError`\>

#### Defined in

[src/INativeEventBus.ts:18](https://github.com/js-soft/ts-native-access/blob/20019e8/packages/abstractions/src/INativeEventBus.ts#L18)

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

#### Defined in

[src/INativeEventBus.ts:24](https://github.com/js-soft/ts-native-access/blob/20019e8/packages/abstractions/src/INativeEventBus.ts#L24)
