[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / INativeEventBus

# Interface: INativeEventBus

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

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeEventBus.ts:8](https://github.com/js-soft/ts-native-access/blob/6589b22/packages/abstractions/src/INativeEventBus.ts#L8)

___

### publish

▸ **publish**(`event`): `Result`<`void`, `ApplicationError`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`Result`<`void`, `ApplicationError`\>

#### Defined in

[src/INativeEventBus.ts:7](https://github.com/js-soft/ts-native-access/blob/6589b22/packages/abstractions/src/INativeEventBus.ts#L7)

___

### subscribe

▸ **subscribe**(`event`, `handler`): `Result`<`number`, `ApplicationError`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |
| `handler` | `Function` |

#### Returns

`Result`<`number`, `ApplicationError`\>

#### Defined in

[src/INativeEventBus.ts:4](https://github.com/js-soft/ts-native-access/blob/6589b22/packages/abstractions/src/INativeEventBus.ts#L4)

___

### subscribeOnce

▸ **subscribeOnce**(`event`, `handler`): `Result`<`number`, `ApplicationError`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |
| `handler` | `Function` |

#### Returns

`Result`<`number`, `ApplicationError`\>

#### Defined in

[src/INativeEventBus.ts:5](https://github.com/js-soft/ts-native-access/blob/6589b22/packages/abstractions/src/INativeEventBus.ts#L5)

___

### unsubscribe

▸ **unsubscribe**(`event`, `id`): `Result`<`void`, `ApplicationError`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |
| `id` | `number` |

#### Returns

`Result`<`void`, `ApplicationError`\>

#### Defined in

[src/INativeEventBus.ts:6](https://github.com/js-soft/ts-native-access/blob/6589b22/packages/abstractions/src/INativeEventBus.ts#L6)
