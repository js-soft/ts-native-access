[@js-soft/native-cordova](../README.md) / [Exports](../modules.md) / CordovaLaunchOptions

# Class: CordovaLaunchOptions

## Implements

-   [`INativeLaunchOptions`](../interfaces/INativeLaunchOptions.md)

## Table of contents

### Constructors

-   [constructor](CordovaLaunchOptions.md#constructor)

### Methods

-   [init](CordovaLaunchOptions.md#init)

## Constructors

### constructor

• **new CordovaLaunchOptions**(`logger`, `eventBus`, `config`)

#### Parameters

| Name       | Type                                                          |
| :--------- | :------------------------------------------------------------ |
| `logger`   | `ILogger`                                                     |
| `eventBus` | [`INativeEventBus`](../interfaces/INativeEventBus.md)         |
| `config`   | [`INativeConfigAccess`](../interfaces/INativeConfigAccess.md) |

#### Defined in

[cordova/src/CordovaLaunchOptions.ts:6](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/cordova/src/CordovaLaunchOptions.ts#L6)

## Methods

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize handling of launch events. Once initialized, it publishes a [UrlOpenEvent](UrlOpenEvent.md) when the app was started by an url or a [FileViewEvent](FileViewEvent.md)
when the app was started to open a file.

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeLaunchOptions](../interfaces/INativeLaunchOptions.md).[init](../interfaces/INativeLaunchOptions.md#init)

#### Defined in

[cordova/src/CordovaLaunchOptions.ts:8](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/cordova/src/CordovaLaunchOptions.ts#L8)
