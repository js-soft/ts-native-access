[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / INativeDeviceInfoAccess

# Interface: INativeDeviceInfoAccess

Get information about the device running the app

## Table of contents

### Properties

- [deviceInfo](INativeDeviceInfoAccess.md#deviceinfo)

### Methods

- [init](INativeDeviceInfoAccess.md#init)

## Properties

### deviceInfo

• **deviceInfo**: [`INativeDeviceInfo`](INativeDeviceInfo.md)

Available information about the device running the app

#### Defined in

[src/INativeDeviceInfoAccess.ts:23](https://github.com/js-soft/ts-native-access/blob/f2bbc45/packages/abstractions/src/INativeDeviceInfoAccess.ts#L23)

## Methods

### init

▸ **init**(): `Promise`<`Result`<[`INativeDeviceInfo`](INativeDeviceInfo.md), `ApplicationError`\>\>

Initialize the module to retrieve relevant device information

#### Returns

`Promise`<`Result`<[`INativeDeviceInfo`](INativeDeviceInfo.md), `ApplicationError`\>\>

#### Defined in

[src/INativeDeviceInfoAccess.ts:19](https://github.com/js-soft/ts-native-access/blob/f2bbc45/packages/abstractions/src/INativeDeviceInfoAccess.ts#L19)
