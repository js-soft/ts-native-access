[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / INativePushNotificationAccess

# Interface: INativePushNotificationAccess

Receive and handle remote push notifications

## Table of contents

### Methods

- [init](INativePushNotificationAccess.md#init)

## Methods

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize module.
Once initialized it publishes a [RemoteNotificationRegistrationEvent](../classes/RemoteNotificationRegistrationEvent.md) when the registration of the push notification service was successful.
It also publishes a [RemoteNotificationEvent](../classes/RemoteNotificationEvent.md) when a remote push notification is received.

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativePushNotificationAccess.ts:12](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/abstractions/src/INativePushNotificationAccess.ts#L12)
