[@js-soft/native-cordova](../README.md) / [Exports](../modules.md) / INativePushNotificationAccess

# Interface: INativePushNotificationAccess

Receive and handle remote push notifications

## Implemented by

- [`CordovaPushNotificationAccess`](../classes/CordovaPushNotificationAccess.md)

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

abstractions/dist/INativePushNotificationAccess.d.ts:11