[@js-soft/native-electron](../README.md) / [Exports](../modules.md) / ElectronPushNotificationAccess

# Class: ElectronPushNotificationAccess

## Implements

- [`INativePushNotificationAccess`](../interfaces/INativePushNotificationAccess.md)

## Table of contents

### Constructors

- [constructor](ElectronPushNotificationAccess.md#constructor)

### Methods

- [init](ElectronPushNotificationAccess.md#init)

## Constructors

### constructor

• **new ElectronPushNotificationAccess**(`logger`, `config`, `eventBus`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger` | `ILogger` |
| `config` | [`INativeConfigAccess`](../interfaces/INativeConfigAccess.md) |
| `eventBus` | [`INativeEventBus`](../interfaces/INativeEventBus.md) |

#### Defined in

[electron/src/ElectronPushNotificationAccess.ts:51](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/electron/src/ElectronPushNotificationAccess.ts#L51)

## Methods

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize module

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativePushNotificationAccess](../interfaces/INativePushNotificationAccess.md).[init](../interfaces/INativePushNotificationAccess.md#init)

#### Defined in

[electron/src/ElectronPushNotificationAccess.ts:53](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/electron/src/ElectronPushNotificationAccess.ts#L53)
