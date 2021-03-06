[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / RemoteNotificationRegistrationEvent

# Class: RemoteNotificationRegistrationEvent

Event fired when [INativePushNotificationAccess](../interfaces/INativePushNotificationAccess.md) sucessfully received a registration token

## Hierarchy

- [`NativeEvent`](NativeEvent.md)

  ↳ **`RemoteNotificationRegistrationEvent`**

## Table of contents

### Constructors

- [constructor](RemoteNotificationRegistrationEvent.md#constructor)

### Properties

- [namespace](RemoteNotificationRegistrationEvent.md#namespace)
- [token](RemoteNotificationRegistrationEvent.md#token)
- [namespace](RemoteNotificationRegistrationEvent.md#namespace)

## Constructors

### constructor

• **new RemoteNotificationRegistrationEvent**(`token`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Overrides

[NativeEvent](NativeEvent.md).[constructor](NativeEvent.md#constructor)

#### Defined in

[src/NativeEvents.ts:9](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/abstractions/src/NativeEvents.ts#L9)

## Properties

### namespace

• `Readonly` **namespace**: `string`

#### Inherited from

[NativeEvent](NativeEvent.md).[namespace](NativeEvent.md#namespace)

#### Defined in

node_modules/@js-soft/ts-utils/dist/events/Event.d.ts:2

___

### token

• `Readonly` **token**: `string`

___

### namespace

▪ `Static` **namespace**: `string` = `"RemoteNotificationRegistration"`

#### Defined in

[src/NativeEvents.ts:8](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/abstractions/src/NativeEvents.ts#L8)
