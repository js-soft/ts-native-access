[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / INativeDeviceInfo

# Interface: INativeDeviceInfo

Available information about the device running the app

## Table of contents

### Properties

- [isVirtual](INativeDeviceInfo.md#isvirtual)
- [languageCode](INativeDeviceInfo.md#languagecode)
- [manufacturer](INativeDeviceInfo.md#manufacturer)
- [model](INativeDeviceInfo.md#model)
- [platform](INativeDeviceInfo.md#platform)
- [pushService](INativeDeviceInfo.md#pushservice)
- [uuid](INativeDeviceInfo.md#uuid)
- [version](INativeDeviceInfo.md#version)

## Properties

### isVirtual

• **isVirtual**: `boolean`

Indicator whether the device is virtualized in an emulator (and some features like the keychain are not working)

#### Defined in

[src/INativeDeviceInfoAccess.ts:53](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/abstractions/src/INativeDeviceInfoAccess.ts#L53)

___

### languageCode

• **languageCode**: `string`

Language used on the operating system

#### Defined in

[src/INativeDeviceInfoAccess.ts:57](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/abstractions/src/INativeDeviceInfoAccess.ts#L57)

___

### manufacturer

• **manufacturer**: `string`

Manufacturer name of the device

#### Defined in

[src/INativeDeviceInfoAccess.ts:49](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/abstractions/src/INativeDeviceInfoAccess.ts#L49)

___

### model

• **model**: `string`

Value set by the device manufacturer describing the device

#### Defined in

[src/INativeDeviceInfoAccess.ts:33](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/abstractions/src/INativeDeviceInfoAccess.ts#L33)

___

### platform

• **platform**: `string`

Operating system of the device

#### Defined in

[src/INativeDeviceInfoAccess.ts:37](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/abstractions/src/INativeDeviceInfoAccess.ts#L37)

___

### pushService

• **pushService**: [`PushServices`](../enums/PushServices.md)

Type of remote push notification service used

#### Defined in

[src/INativeDeviceInfoAccess.ts:61](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/abstractions/src/INativeDeviceInfoAccess.ts#L61)

___

### uuid

• **uuid**: `string`

Unique identifier of the device generated by the operating system

#### Defined in

[src/INativeDeviceInfoAccess.ts:41](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/abstractions/src/INativeDeviceInfoAccess.ts#L41)

___

### version

• **version**: `string`

Version of th eoperating system

#### Defined in

[src/INativeDeviceInfoAccess.ts:45](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/abstractions/src/INativeDeviceInfoAccess.ts#L45)
