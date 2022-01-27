[@js-soft/native-web](../README.md) / [Exports](../modules.md) / WebPushNotificationAccess

# Class: WebPushNotificationAccess

## Implements

-   [`INativePushNotificationAccess`](../interfaces/INativePushNotificationAccess.md)

## Table of contents

### Constructors

-   [constructor](WebPushNotificationAccess.md#constructor)

### Methods

-   [init](WebPushNotificationAccess.md#init)

## Constructors

### constructor

• **new WebPushNotificationAccess**(`logger`, `config`, `eventBus`, `serviceWorker`)

#### Parameters

| Name            | Type                                                          |
| :-------------- | :------------------------------------------------------------ |
| `logger`        | `ILogger`                                                     |
| `config`        | [`INativeConfigAccess`](../interfaces/INativeConfigAccess.md) |
| `eventBus`      | [`INativeEventBus`](../interfaces/INativeEventBus.md)         |
| `serviceWorker` | `ServiceWorkerRegistration`                                   |

#### Defined in

[web/src/WebPushNotificationAccess.ts:15](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/web/src/WebPushNotificationAccess.ts#L15)

## Methods

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize module

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativePushNotificationAccess](../interfaces/INativePushNotificationAccess.md).[init](../interfaces/INativePushNotificationAccess.md#init)

#### Defined in

[web/src/WebPushNotificationAccess.ts:22](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/web/src/WebPushNotificationAccess.ts#L22)
