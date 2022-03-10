[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / INativeNotificationAccess

# Interface: INativeNotificationAccess

Mangage local notifications

## Table of contents

### Methods

-   [clear](INativeNotificationAccess.md#clear)
-   [clearAll](INativeNotificationAccess.md#clearall)
-   [getAll](INativeNotificationAccess.md#getall)
-   [init](INativeNotificationAccess.md#init)
-   [schedule](INativeNotificationAccess.md#schedule)
-   [update](INativeNotificationAccess.md#update)

## Methods

### clear

▸ **clear**(`id`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Remove a notification from being displayed

#### Parameters

| Name | Type     | Description                      |
| :--- | :------- | :------------------------------- |
| `id` | `number` | id of the notification to remove |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeNotificationAccess.ts:68](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/abstractions/src/INativeNotificationAccess.ts#L68)

---

### clearAll

▸ **clearAll**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Remove all notifications from being displayed

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeNotificationAccess.ts:72](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/abstractions/src/INativeNotificationAccess.ts#L72)

---

### getAll

▸ **getAll**(): `Promise`<`Result`<`number`[], `ApplicationError`\>\>

Retrieve all notifications currently being displayed

#### Returns

`Promise`<`Result`<`number`[], `ApplicationError`\>\>

#### Defined in

[src/INativeNotificationAccess.ts:76](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/abstractions/src/INativeNotificationAccess.ts#L76)

---

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize module

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeNotificationAccess.ts:80](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/abstractions/src/INativeNotificationAccess.ts#L80)

---

### schedule

▸ **schedule**(`title`, `body`, `options?`): `Promise`<`Result`<`number`, `ApplicationError`\>\>

Display a local notification

#### Parameters

| Name       | Type                                                                          | Description                     |
| :--------- | :---------------------------------------------------------------------------- | :------------------------------ |
| `title`    | `string`                                                                      | title displayed in notification |
| `body`     | `string`                                                                      | body displayed in notification  |
| `options?` | [`INativeNotificationScheduleOptions`](INativeNotificationScheduleOptions.md) | additional options              |

#### Returns

`Promise`<`Result`<`number`, `ApplicationError`\>\>

#### Defined in

[src/INativeNotificationAccess.ts:55](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/abstractions/src/INativeNotificationAccess.ts#L55)

---

### update

▸ **update**(`id`, `title`, `body`, `options?`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Update the content of an already displayed notification

#### Parameters

| Name       | Type                                                                          | Description                                |
| :--------- | :---------------------------------------------------------------------------- | :----------------------------------------- |
| `id`       | `number`                                                                      | id of the notification to update           |
| `title`    | `string`                                                                      | new title of the notification              |
| `body`     | `string`                                                                      | new body of the notification               |
| `options?` | [`INativeNotificationScheduleOptions`](INativeNotificationScheduleOptions.md) | new additional options of the notification |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeNotificationAccess.ts:63](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/abstractions/src/INativeNotificationAccess.ts#L63)
