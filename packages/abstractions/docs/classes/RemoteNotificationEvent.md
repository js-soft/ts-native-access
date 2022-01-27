[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / RemoteNotificationEvent

# Class: RemoteNotificationEvent

Event fired when the [push notification module](./INativePushNotification.md) received a remote notification

## Hierarchy

- [`NativeEvent`](NativeEvent.md)

  ↳ **`RemoteNotificationEvent`**

## Table of contents

### Constructors

- [constructor](RemoteNotificationEvent.md#constructor)

### Properties

- [namespace](RemoteNotificationEvent.md#namespace)
- [notification](RemoteNotificationEvent.md#notification)
- [namespace](RemoteNotificationEvent.md#namespace)

## Constructors

### constructor

• **new RemoteNotificationEvent**(`notification`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `notification` | [`INativePushNotification`](../interfaces/INativePushNotification.md) |

#### Overrides

[NativeEvent](NativeEvent.md).[constructor](NativeEvent.md#constructor)

#### Defined in

[src/NativeEvents.ts:19](https://github.com/js-soft/ts-native-access/blob/20019e8/packages/abstractions/src/NativeEvents.ts#L19)

## Properties

### namespace

• `Readonly` **namespace**: `string`

#### Inherited from

[NativeEvent](NativeEvent.md).[namespace](NativeEvent.md#namespace)

#### Defined in

node_modules/@js-soft/ts-utils/dist/events/Event.d.ts:2

___

### notification

• `Readonly` **notification**: [`INativePushNotification`](../interfaces/INativePushNotification.md)

___

### namespace

▪ `Static` **namespace**: `string` = `"RemoteNotification"`

#### Defined in

[src/NativeEvents.ts:18](https://github.com/js-soft/ts-native-access/blob/20019e8/packages/abstractions/src/NativeEvents.ts#L18)
