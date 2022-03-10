[@js-soft/native-cordova](../README.md) / [Exports](../modules.md) / CordovaNotificationAccess

# Class: CordovaNotificationAccess

## Implements

- [`INativeNotificationAccess`](../interfaces/INativeNotificationAccess.md)

## Table of contents

### Constructors

- [constructor](CordovaNotificationAccess.md#constructor)

### Methods

- [clear](CordovaNotificationAccess.md#clear)
- [clearAll](CordovaNotificationAccess.md#clearall)
- [getAll](CordovaNotificationAccess.md#getall)
- [init](CordovaNotificationAccess.md#init)
- [schedule](CordovaNotificationAccess.md#schedule)
- [update](CordovaNotificationAccess.md#update)

## Constructors

### constructor

• **new CordovaNotificationAccess**(`logger`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger` | `ILogger` |
| `config` | [`INativeConfigAccess`](../interfaces/INativeConfigAccess.md) |

#### Defined in

[cordova/src/CordovaNotificationAccess.ts:6](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/cordova/src/CordovaNotificationAccess.ts#L6)

## Methods

### clear

▸ **clear**(`id`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Remove a notification from being displayed

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeNotificationAccess](../interfaces/INativeNotificationAccess.md).[clear](../interfaces/INativeNotificationAccess.md#clear)

#### Defined in

[cordova/src/CordovaNotificationAccess.ts:102](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/cordova/src/CordovaNotificationAccess.ts#L102)

___

### clearAll

▸ **clearAll**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Remove all notifications from being displayed

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeNotificationAccess](../interfaces/INativeNotificationAccess.md).[clearAll](../interfaces/INativeNotificationAccess.md#clearall)

#### Defined in

[cordova/src/CordovaNotificationAccess.ts:107](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/cordova/src/CordovaNotificationAccess.ts#L107)

___

### getAll

▸ **getAll**(): `Promise`<`Result`<`number`[], `ApplicationError`\>\>

Retrieve all notifications currently being displayed

#### Returns

`Promise`<`Result`<`number`[], `ApplicationError`\>\>

#### Implementation of

[INativeNotificationAccess](../interfaces/INativeNotificationAccess.md).[getAll](../interfaces/INativeNotificationAccess.md#getall)

#### Defined in

[cordova/src/CordovaNotificationAccess.ts:113](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/cordova/src/CordovaNotificationAccess.ts#L113)

___

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize module

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeNotificationAccess](../interfaces/INativeNotificationAccess.md).[init](../interfaces/INativeNotificationAccess.md#init)

#### Defined in

[cordova/src/CordovaNotificationAccess.ts:8](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/cordova/src/CordovaNotificationAccess.ts#L8)

___

### schedule

▸ **schedule**(`title`, `body`, `options?`): `Promise`<`Result`<`number`, `ApplicationError`\>\>

Display a local notification

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |
| `body` | `string` |
| `options?` | [`INativeNotificationScheduleOptions`](../interfaces/INativeNotificationScheduleOptions.md) |

#### Returns

`Promise`<`Result`<`number`, `ApplicationError`\>\>

#### Implementation of

[INativeNotificationAccess](../interfaces/INativeNotificationAccess.md).[schedule](../interfaces/INativeNotificationAccess.md#schedule)

#### Defined in

[cordova/src/CordovaNotificationAccess.ts:12](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/cordova/src/CordovaNotificationAccess.ts#L12)

___

### update

▸ **update**(`id`, `title`, `body`, `options?`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Update the content of an already displayed notification

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `title` | `string` |
| `body` | `string` |
| `options?` | [`INativeNotificationScheduleOptions`](../interfaces/INativeNotificationScheduleOptions.md) |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeNotificationAccess](../interfaces/INativeNotificationAccess.md).[update](../interfaces/INativeNotificationAccess.md#update)

#### Defined in

[cordova/src/CordovaNotificationAccess.ts:64](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/cordova/src/CordovaNotificationAccess.ts#L64)
