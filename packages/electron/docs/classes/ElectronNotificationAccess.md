[@js-soft/native-electron](../README.md) / [Exports](../modules.md) / ElectronNotificationAccess

# Class: ElectronNotificationAccess

## Implements

-   [`INativeNotificationAccess`](../interfaces/INativeNotificationAccess.md)

## Table of contents

### Constructors

-   [constructor](ElectronNotificationAccess.md#constructor)

### Properties

-   [applicationId](ElectronNotificationAccess.md#applicationid)
-   [notifications](ElectronNotificationAccess.md#notifications)

### Methods

-   [clear](ElectronNotificationAccess.md#clear)
-   [clearAll](ElectronNotificationAccess.md#clearall)
-   [filterNotifications](ElectronNotificationAccess.md#filternotifications)
-   [getAll](ElectronNotificationAccess.md#getall)
-   [init](ElectronNotificationAccess.md#init)
-   [schedule](ElectronNotificationAccess.md#schedule)
-   [update](ElectronNotificationAccess.md#update)

## Constructors

### constructor

• **new ElectronNotificationAccess**(`logger`, `config`)

#### Parameters

| Name     | Type                                                          |
| :------- | :------------------------------------------------------------ |
| `logger` | `ILogger`                                                     |
| `config` | [`INativeConfigAccess`](../interfaces/INativeConfigAccess.md) |

#### Defined in

[electron/src/ElectronNotificationAccess.ts:12](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/electron/src/ElectronNotificationAccess.ts#L12)

## Properties

### applicationId

• `Private` **applicationId**: `string`

#### Defined in

[electron/src/ElectronNotificationAccess.ts:10](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/electron/src/ElectronNotificationAccess.ts#L10)

---

### notifications

• `Private` **notifications**: `number`[] = `[]`

#### Defined in

[electron/src/ElectronNotificationAccess.ts:9](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/electron/src/ElectronNotificationAccess.ts#L9)

## Methods

### clear

▸ **clear**(`id`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Remove a notification from being displayed

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `number` |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeNotificationAccess](../interfaces/INativeNotificationAccess.md).[clear](../interfaces/INativeNotificationAccess.md#clear)

#### Defined in

[electron/src/ElectronNotificationAccess.ts:72](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/electron/src/ElectronNotificationAccess.ts#L72)

---

### clearAll

▸ **clearAll**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Remove all notifications from being displayed

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeNotificationAccess](../interfaces/INativeNotificationAccess.md).[clearAll](../interfaces/INativeNotificationAccess.md#clearall)

#### Defined in

[electron/src/ElectronNotificationAccess.ts:78](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/electron/src/ElectronNotificationAccess.ts#L78)

---

### filterNotifications

▸ `Private` **filterNotifications**(`id`): `void`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `number` |

#### Returns

`void`

#### Defined in

[electron/src/ElectronNotificationAccess.ts:87](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/electron/src/ElectronNotificationAccess.ts#L87)

---

### getAll

▸ **getAll**(): `Promise`<`Result`<`number`[], `ApplicationError`\>\>

Retrieve all notifications currently being displayed

#### Returns

`Promise`<`Result`<`number`[], `ApplicationError`\>\>

#### Implementation of

[INativeNotificationAccess](../interfaces/INativeNotificationAccess.md).[getAll](../interfaces/INativeNotificationAccess.md#getall)

#### Defined in

[electron/src/ElectronNotificationAccess.ts:83](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/electron/src/ElectronNotificationAccess.ts#L83)

---

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize module

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeNotificationAccess](../interfaces/INativeNotificationAccess.md).[init](../interfaces/INativeNotificationAccess.md#init)

#### Defined in

[electron/src/ElectronNotificationAccess.ts:14](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/electron/src/ElectronNotificationAccess.ts#L14)

---

### schedule

▸ **schedule**(`title`, `body`, `options?`): `Promise`<`Result`<`number`, `ApplicationError`\>\>

Display a local notification

#### Parameters

| Name       | Type                                                                                        |
| :--------- | :------------------------------------------------------------------------------------------ |
| `title`    | `string`                                                                                    |
| `body`     | `string`                                                                                    |
| `options?` | [`INativeNotificationScheduleOptions`](../interfaces/INativeNotificationScheduleOptions.md) |

#### Returns

`Promise`<`Result`<`number`, `ApplicationError`\>\>

#### Implementation of

[INativeNotificationAccess](../interfaces/INativeNotificationAccess.md).[schedule](../interfaces/INativeNotificationAccess.md#schedule)

#### Defined in

[electron/src/ElectronNotificationAccess.ts:19](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/electron/src/ElectronNotificationAccess.ts#L19)

---

### update

▸ **update**(`id`, `title`, `body`, `options?`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Update the content of an already displayed notification

#### Parameters

| Name       | Type                                                                                        |
| :--------- | :------------------------------------------------------------------------------------------ |
| `id`       | `number`                                                                                    |
| `title`    | `string`                                                                                    |
| `body`     | `string`                                                                                    |
| `options?` | [`INativeNotificationScheduleOptions`](../interfaces/INativeNotificationScheduleOptions.md) |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeNotificationAccess](../interfaces/INativeNotificationAccess.md).[update](../interfaces/INativeNotificationAccess.md#update)

#### Defined in

[electron/src/ElectronNotificationAccess.ts:67](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/electron/src/ElectronNotificationAccess.ts#L67)
