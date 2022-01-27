[@js-soft/native-cordova](../README.md) / [Exports](../modules.md) / CordovaDeviceInfoAccess

# Class: CordovaDeviceInfoAccess

## Implements

- [`INativeDeviceInfoAccess`](../interfaces/INativeDeviceInfoAccess.md)

## Table of contents

### Constructors

- [constructor](CordovaDeviceInfoAccess.md#constructor)

### Properties

- [\_deviceInfo](CordovaDeviceInfoAccess.md#_deviceinfo)

### Accessors

- [deviceInfo](CordovaDeviceInfoAccess.md#deviceinfo)

### Methods

- [init](CordovaDeviceInfoAccess.md#init)

## Constructors

### constructor

• **new CordovaDeviceInfoAccess**()

## Properties

### \_deviceInfo

• `Private` **\_deviceInfo**: [`INativeDeviceInfo`](../interfaces/INativeDeviceInfo.md)

#### Defined in

[cordova/src/CordovaDeviceInfoAccess.ts:9](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaDeviceInfoAccess.ts#L9)

## Accessors

### deviceInfo

• `get` **deviceInfo**(): [`INativeDeviceInfo`](../interfaces/INativeDeviceInfo.md)

Available information about the device running the app

#### Returns

[`INativeDeviceInfo`](../interfaces/INativeDeviceInfo.md)

#### Implementation of

[INativeDeviceInfoAccess](../interfaces/INativeDeviceInfoAccess.md).[deviceInfo](../interfaces/INativeDeviceInfoAccess.md#deviceinfo)

#### Defined in

[cordova/src/CordovaDeviceInfoAccess.ts:6](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaDeviceInfoAccess.ts#L6)

## Methods

### init

▸ **init**(): `Promise`<`Result`<[`INativeDeviceInfo`](../interfaces/INativeDeviceInfo.md), `ApplicationError`\>\>

Initialize the module to retrieve relevant device information

#### Returns

`Promise`<`Result`<[`INativeDeviceInfo`](../interfaces/INativeDeviceInfo.md), `ApplicationError`\>\>

#### Implementation of

[INativeDeviceInfoAccess](../interfaces/INativeDeviceInfoAccess.md).[init](../interfaces/INativeDeviceInfoAccess.md#init)

#### Defined in

[cordova/src/CordovaDeviceInfoAccess.ts:11](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaDeviceInfoAccess.ts#L11)
