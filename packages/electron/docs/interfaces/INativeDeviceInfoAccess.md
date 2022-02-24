[@js-soft/native-electron](../README.md) / [Exports](../modules.md) / INativeDeviceInfoAccess

# Interface: INativeDeviceInfoAccess

Get information about the device running the app

## Implemented by

- [`ElectronDeviceInfoAccess`](../classes/ElectronDeviceInfoAccess.md)

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

abstractions/dist/INativeDeviceInfoAccess.d.ts:21

## Methods

### init

▸ **init**(): `Promise`<`Result`<[`INativeDeviceInfo`](INativeDeviceInfo.md), `ApplicationError`\>\>

Initialize the module to retrieve relevant device information

#### Returns

`Promise`<`Result`<[`INativeDeviceInfo`](INativeDeviceInfo.md), `ApplicationError`\>\>

#### Defined in

abstractions/dist/INativeDeviceInfoAccess.d.ts:17
