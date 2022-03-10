[@js-soft/native-web](../README.md) / [Exports](../modules.md) / RemoteNotificationRegistrationEvent

# Class: RemoteNotificationRegistrationEvent

Event fired when [INativePushNotificationAccess](../interfaces/INativePushNotificationAccess.md) sucessfully received a registration token

## Hierarchy

-   [`NativeEvent`](NativeEvent.md)

    ↳ **`RemoteNotificationRegistrationEvent`**

## Table of contents

### Constructors

-   [constructor](RemoteNotificationRegistrationEvent.md#constructor)

### Properties

-   [namespace](RemoteNotificationRegistrationEvent.md#namespace)
-   [token](RemoteNotificationRegistrationEvent.md#token)
-   [namespace](RemoteNotificationRegistrationEvent.md#namespace)

## Constructors

### constructor

• **new RemoteNotificationRegistrationEvent**(`token`)

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `token` | `string` |

#### Overrides

[NativeEvent](NativeEvent.md).[constructor](NativeEvent.md#constructor)

#### Defined in

abstractions/dist/NativeEvents.d.ts:9

## Properties

### namespace

• `Readonly` **namespace**: `string`

#### Inherited from

[NativeEvent](NativeEvent.md).[namespace](NativeEvent.md#namespace)

#### Defined in

abstractions/node_modules/@js-soft/ts-utils/dist/events/Event.d.ts:2

---

### token

• `Readonly` **token**: `string`

#### Defined in

abstractions/dist/NativeEvents.d.ts:7

---

### namespace

▪ `Static` **namespace**: `string`

#### Defined in

abstractions/dist/NativeEvents.d.ts:8
