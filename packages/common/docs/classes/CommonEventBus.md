[@js-soft/native-common](../README.md) / [Exports](../modules.md) / CommonEventBus

# Class: CommonEventBus

## Implements

- `INativeEventBus`

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

• `Private` **eventBus**: `EventBus`

#### Defined in

[CommonEventBus.ts:5](https://github.com/js-soft/ts-native-access/blob/2fee55d/packages/common/src/CommonEventBus.ts#L5)

___

### locked

• `Private` **locked**: `boolean` = `true`

#### Defined in

[CommonEventBus.ts:6](https://github.com/js-soft/ts-native-access/blob/2fee55d/packages/common/src/CommonEventBus.ts#L6)

___

### queue

• `Private` **queue**: `Event`[] = `[]`

#### Defined in

[CommonEventBus.ts:7](https://github.com/js-soft/ts-native-access/blob/2fee55d/packages/common/src/CommonEventBus.ts#L7)

## Methods

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

INativeEventBus.init

#### Defined in

[CommonEventBus.ts:9](https://github.com/js-soft/ts-native-access/blob/2fee55d/packages/common/src/CommonEventBus.ts#L9)

___

### publish

▸ **publish**(`event`): `Result`<`void`, `ApplicationError`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`Result`<`void`, `ApplicationError`\>

#### Implementation of

INativeEventBus.publish

#### Defined in

[CommonEventBus.ts:29](https://github.com/js-soft/ts-native-access/blob/2fee55d/packages/common/src/CommonEventBus.ts#L29)

___

### subscribe

▸ **subscribe**(`event`, `handler`): `Result`<`number`, `ApplicationError`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |
| `handler` | (`event`: `any`) => `void` |

#### Returns

`Result`<`number`, `ApplicationError`\>

#### Implementation of

INativeEventBus.subscribe

#### Defined in

[CommonEventBus.ts:14](https://github.com/js-soft/ts-native-access/blob/2fee55d/packages/common/src/CommonEventBus.ts#L14)

___

### subscribeOnce

▸ **subscribeOnce**(`event`, `handler`): `Result`<`number`, `ApplicationError`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |
| `handler` | (`event`: `any`) => `void` |

#### Returns

`Result`<`number`, `ApplicationError`\>

#### Implementation of

INativeEventBus.subscribeOnce

#### Defined in

[CommonEventBus.ts:19](https://github.com/js-soft/ts-native-access/blob/2fee55d/packages/common/src/CommonEventBus.ts#L19)

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

#### Implementation of

INativeEventBus.unsubscribe

#### Defined in

[CommonEventBus.ts:24](https://github.com/js-soft/ts-native-access/blob/2fee55d/packages/common/src/CommonEventBus.ts#L24)
