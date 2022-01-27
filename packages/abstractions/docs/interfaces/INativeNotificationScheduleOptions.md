[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / INativeNotificationScheduleOptions

# Interface: INativeNotificationScheduleOptions

Additional options for displaying notifications

## Table of contents

### Properties

- [buttonInput](INativeNotificationScheduleOptions.md#buttoninput)
- [callback](INativeNotificationScheduleOptions.md#callback)
- [data](INativeNotificationScheduleOptions.md#data)
- [id](INativeNotificationScheduleOptions.md#id)
- [textInput](INativeNotificationScheduleOptions.md#textinput)

## Properties

### buttonInput

• `Optional` **buttonInput**: [`INativeNotificationAction`](INativeNotificationAction.md)[]

buttons which should be displayed as part of the notification

#### Defined in

[src/INativeNotificationAccess.ts:26](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/abstractions/src/INativeNotificationAccess.ts#L26)

___

### callback

• `Optional` **callback**: `Function`

callback function for the notification selection

#### Defined in

[src/INativeNotificationAccess.ts:34](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/abstractions/src/INativeNotificationAccess.ts#L34)

___

### data

• `Optional` **data**: `any`

additional data stored as part of the notification => can be accessed for example in the [callback](INativeNotificationScheduleOptions.md#callback)

#### Defined in

[src/INativeNotificationAccess.ts:38](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/abstractions/src/INativeNotificationAccess.ts#L38)

___

### id

• `Optional` **id**: `number`

explicitly specify the id of the notification

#### Defined in

[src/INativeNotificationAccess.ts:42](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/abstractions/src/INativeNotificationAccess.ts#L42)

___

### textInput

• `Optional` **textInput**: [`INativeNotificationAction`](INativeNotificationAction.md)[]

input field which should be displayed as part of the notification

#### Defined in

[src/INativeNotificationAccess.ts:30](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/abstractions/src/INativeNotificationAccess.ts#L30)
