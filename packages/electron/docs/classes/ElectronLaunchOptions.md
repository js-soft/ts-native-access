[@js-soft/native-electron](../README.md) / [Exports](../modules.md) / ElectronLaunchOptions

# Class: ElectronLaunchOptions

## Implements

-   [`INativeLaunchOptions`](../interfaces/INativeLaunchOptions.md)

## Table of contents

### Constructors

-   [constructor](ElectronLaunchOptions.md#constructor)

### Methods

-   [init](ElectronLaunchOptions.md#init)

## Constructors

### constructor

• **new ElectronLaunchOptions**(`logger`, `eventBus`, `config`)

#### Parameters

| Name       | Type                                                          |
| :--------- | :------------------------------------------------------------ |
| `logger`   | `ILogger`                                                     |
| `eventBus` | [`INativeEventBus`](../interfaces/INativeEventBus.md)         |
| `config`   | [`INativeConfigAccess`](../interfaces/INativeConfigAccess.md) |

#### Defined in

[electron/src/ElectronLaunchOptions.ts:7](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/electron/src/ElectronLaunchOptions.ts#L7)

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

[electron/src/ElectronLaunchOptions.ts:9](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/electron/src/ElectronLaunchOptions.ts#L9)
