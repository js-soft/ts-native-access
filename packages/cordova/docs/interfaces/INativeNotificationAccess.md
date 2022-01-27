[@js-soft/native-cordova](../README.md) / [Exports](../modules.md) / INativeNotificationAccess

# Interface: INativeNotificationAccess

Mangage local notifications

## Implemented by

- [`CordovaNotificationAccess`](../classes/CordovaNotificationAccess.md)

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

Remove a notification from being displayed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the notification to remove |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

abstractions/dist/INativeNotificationAccess.d.ts:63

___

### clearAll

▸ **clearAll**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Remove all notifications from being displayed

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

abstractions/dist/INativeNotificationAccess.d.ts:67

___

### getAll

▸ **getAll**(): `Promise`<`Result`<`number`[], `ApplicationError`\>\>

Retrieve all notifications currently being displayed

#### Returns

`Promise`<`Result`<`number`[], `ApplicationError`\>\>

#### Defined in

abstractions/dist/INativeNotificationAccess.d.ts:71

___

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize module

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

abstractions/dist/INativeNotificationAccess.d.ts:75

___

### schedule

▸ **schedule**(`title`, `body`, `options?`): `Promise`<`Result`<`number`, `ApplicationError`\>\>

Display a local notification

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | title displayed in notification |
| `body` | `string` | body displayed in notification |
| `options?` | [`INativeNotificationScheduleOptions`](INativeNotificationScheduleOptions.md) | additional options |

#### Returns

`Promise`<`Result`<`number`, `ApplicationError`\>\>

#### Defined in

abstractions/dist/INativeNotificationAccess.d.ts:50

___

### update

▸ **update**(`id`, `title`, `body`, `options?`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Update the content of an already displayed notification

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the notification to update |
| `title` | `string` | new title of the notification |
| `body` | `string` | new body of the notification |
| `options?` | [`INativeNotificationScheduleOptions`](INativeNotificationScheduleOptions.md) | new additional options of the notification |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

abstractions/dist/INativeNotificationAccess.d.ts:58
