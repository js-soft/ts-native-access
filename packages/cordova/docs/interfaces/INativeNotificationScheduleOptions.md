[@js-soft/native-cordova](../README.md) / [Exports](../modules.md) / INativeNotificationScheduleOptions

# Interface: INativeNotificationScheduleOptions

Additional options for displaying notifications

## Table of contents

### Properties

-   [buttonInput](INativeNotificationScheduleOptions.md#buttoninput)
-   [callback](INativeNotificationScheduleOptions.md#callback)
-   [data](INativeNotificationScheduleOptions.md#data)
-   [id](INativeNotificationScheduleOptions.md#id)
-   [textInput](INativeNotificationScheduleOptions.md#textinput)

## Properties

### buttonInput

• `Optional` **buttonInput**: [`INativeNotificationAction`](INativeNotificationAction.md)[]

buttons which should be displayed as part of the notification

#### Defined in

abstractions/dist/INativeNotificationAccess.d.ts:22

---

### callback

• `Optional` **callback**: `Function`

callback function for the notification selection

#### Defined in

abstractions/dist/INativeNotificationAccess.d.ts:30

---

### data

• `Optional` **data**: `any`

additional data stored as part of the notification => can be accessed for example in the [callback](INativeNotificationScheduleOptions.md#callback)

#### Defined in

abstractions/dist/INativeNotificationAccess.d.ts:34

---

### id

• `Optional` **id**: `number`

explicitly specify the id of the notification

#### Defined in

abstractions/dist/INativeNotificationAccess.d.ts:38

---

### textInput

• `Optional` **textInput**: [`INativeNotificationAction`](INativeNotificationAction.md)[]

input field which should be displayed as part of the notification

#### Defined in

abstractions/dist/INativeNotificationAccess.d.ts:26
