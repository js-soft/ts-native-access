[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / INativeNotificationAccess

# Interface: INativeNotificationAccess

## Table of contents

### Methods

- [clear](INativeNotificationAccess.md#clear)
- [clearAll](INativeNotificationAccess.md#clearall)
- [getAll](INativeNotificationAccess.md#getall)
- [init](INativeNotificationAccess.md#init)
- [schedule](INativeNotificationAccess.md#schedule)
- [update](INativeNotificationAccess.md#update)

## Methods

### clear

▸ **clear**(`id`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeNotificationAccess.ts:21](https://github.com/js-soft/ts-native-access/blob/6589b22/packages/abstractions/src/INativeNotificationAccess.ts#L21)

___

### clearAll

▸ **clearAll**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeNotificationAccess.ts:22](https://github.com/js-soft/ts-native-access/blob/6589b22/packages/abstractions/src/INativeNotificationAccess.ts#L22)

___

### getAll

▸ **getAll**(): `Promise`<`Result`<`number`[], `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`number`[], `ApplicationError`\>\>

#### Defined in

[src/INativeNotificationAccess.ts:23](https://github.com/js-soft/ts-native-access/blob/6589b22/packages/abstractions/src/INativeNotificationAccess.ts#L23)

___

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeNotificationAccess.ts:24](https://github.com/js-soft/ts-native-access/blob/6589b22/packages/abstractions/src/INativeNotificationAccess.ts#L24)

___

### schedule

▸ **schedule**(`title`, `body`, `options?`): `Promise`<`Result`<`number`, `ApplicationError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |
| `body` | `string` |
| `options?` | [`INativeNotificationScheduleOptions`](INativeNotificationScheduleOptions.md) |

#### Returns

`Promise`<`Result`<`number`, `ApplicationError`\>\>

#### Defined in

[src/INativeNotificationAccess.ts:19](https://github.com/js-soft/ts-native-access/blob/6589b22/packages/abstractions/src/INativeNotificationAccess.ts#L19)

___

### update

▸ **update**(`id`, `title`, `body`, `options?`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `title` | `string` |
| `body` | `string` |
| `options?` | [`INativeNotificationScheduleOptions`](INativeNotificationScheduleOptions.md) |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeNotificationAccess.ts:20](https://github.com/js-soft/ts-native-access/blob/6589b22/packages/abstractions/src/INativeNotificationAccess.ts#L20)
