[@js-soft/native-cordova](../README.md) / [Exports](../modules.md) / CordovaPushNotificationAccess

# Class: CordovaPushNotificationAccess

## Implements

- [`INativePushNotificationAccess`](../interfaces/INativePushNotificationAccess.md)

## Table of contents

### Constructors

- [constructor](CordovaPushNotificationAccess.md#constructor)

### Properties

- [push](CordovaPushNotificationAccess.md#push)

### Methods

- [handleError](CordovaPushNotificationAccess.md#handleerror)
- [handleRegistration](CordovaPushNotificationAccess.md#handleregistration)
- [init](CordovaPushNotificationAccess.md#init)

## Constructors

### constructor

• **new CordovaPushNotificationAccess**(`logger`, `config`, `eventBus`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger` | `ILogger` |
| `config` | [`INativeConfigAccess`](../interfaces/INativeConfigAccess.md) |
| `eventBus` | [`INativeEventBus`](../interfaces/INativeEventBus.md) |

#### Defined in

[cordova/src/CordovaPushNotificationAccess.ts:15](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/cordova/src/CordovaPushNotificationAccess.ts#L15)

## Properties

### push

• `Private` **push**: `any`

#### Defined in

[cordova/src/CordovaPushNotificationAccess.ts:17](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/cordova/src/CordovaPushNotificationAccess.ts#L17)

## Methods

### handleError

▸ `Private` `Readonly` **handleError**(`err`): `void`

Handle an error during the bootstrap of remote push notifications

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `err` | `unknown` | Error to publish |

#### Returns

`void`

#### Defined in

[cordova/src/CordovaPushNotificationAccess.ts:33](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/cordova/src/CordovaPushNotificationAccess.ts#L33)

___

### handleRegistration

▸ `Private` `Readonly` **handleRegistration**(`token`): `Promise`<`void`\>

Handle the registration of a push token for remote push notifications

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[cordova/src/CordovaPushNotificationAccess.ts:23](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/cordova/src/CordovaPushNotificationAccess.ts#L23)

___

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize module.
Once initialized it publishes a [RemoteNotificationRegistrationEvent](RemoteNotificationRegistrationEvent.md) when the registration of the push notification service was successful.
It also publishes a [RemoteNotificationEvent](RemoteNotificationEvent.md) when a remote push notification is received.

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativePushNotificationAccess](../interfaces/INativePushNotificationAccess.md).[init](../interfaces/INativePushNotificationAccess.md#init)

#### Defined in

[cordova/src/CordovaPushNotificationAccess.ts:37](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/cordova/src/CordovaPushNotificationAccess.ts#L37)
