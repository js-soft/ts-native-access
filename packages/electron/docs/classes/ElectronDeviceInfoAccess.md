[@js-soft/native-electron](../README.md) / [Exports](../modules.md) / ElectronDeviceInfoAccess

# Class: ElectronDeviceInfoAccess

## Implements

- [`INativeDeviceInfoAccess`](../interfaces/INativeDeviceInfoAccess.md)

## Table of contents

### Constructors

- [constructor](ElectronDeviceInfoAccess.md#constructor)

### Properties

- [\_deviceInfo](ElectronDeviceInfoAccess.md#_deviceinfo)

### Accessors

- [deviceInfo](ElectronDeviceInfoAccess.md#deviceinfo)

### Methods

- [init](ElectronDeviceInfoAccess.md#init)

## Constructors

### constructor

• **new ElectronDeviceInfoAccess**()

## Properties

### \_deviceInfo

• `Private` **\_deviceInfo**: [`INativeDeviceInfo`](../interfaces/INativeDeviceInfo.md)

#### Defined in

[electron/src/ElectronDeviceInfoAccess.ts:10](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/electron/src/ElectronDeviceInfoAccess.ts#L10)

## Accessors

### deviceInfo

• `get` **deviceInfo**(): [`INativeDeviceInfo`](../interfaces/INativeDeviceInfo.md)

Available information about the device running the app

#### Returns

[`INativeDeviceInfo`](../interfaces/INativeDeviceInfo.md)

#### Implementation of

[INativeDeviceInfoAccess](../interfaces/INativeDeviceInfoAccess.md).[deviceInfo](../interfaces/INativeDeviceInfoAccess.md#deviceinfo)

#### Defined in

[electron/src/ElectronDeviceInfoAccess.ts:7](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/electron/src/ElectronDeviceInfoAccess.ts#L7)

## Methods

### init

▸ **init**(): `Promise`<`Result`<[`INativeDeviceInfo`](../interfaces/INativeDeviceInfo.md), `ApplicationError`\>\>

Initialize the module to retrieve relevant device information

#### Returns

`Promise`<`Result`<[`INativeDeviceInfo`](../interfaces/INativeDeviceInfo.md), `ApplicationError`\>\>

#### Implementation of

[INativeDeviceInfoAccess](../interfaces/INativeDeviceInfoAccess.md).[init](../interfaces/INativeDeviceInfoAccess.md#init)

#### Defined in

[electron/src/ElectronDeviceInfoAccess.ts:12](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/electron/src/ElectronDeviceInfoAccess.ts#L12)
