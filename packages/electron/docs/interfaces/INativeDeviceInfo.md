[@js-soft/native-electron](../README.md) / [Exports](../modules.md) / INativeDeviceInfo

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

abstractions/dist/INativeDeviceInfoAccess.d.ts:50

___

### languageCode

• **languageCode**: `string`

Language used on the operating system

#### Defined in

abstractions/dist/INativeDeviceInfoAccess.d.ts:54

___

### manufacturer

• **manufacturer**: `string`

Manufacturer name of the device

#### Defined in

abstractions/dist/INativeDeviceInfoAccess.d.ts:46

___

### model

• **model**: `string`

Value set by the device manufacturer describing the device

#### Defined in

abstractions/dist/INativeDeviceInfoAccess.d.ts:30

___

### platform

• **platform**: `string`

Operating system of the device

#### Defined in

abstractions/dist/INativeDeviceInfoAccess.d.ts:34

___

### pushService

• **pushService**: [`PushServices`](../enums/PushServices.md)

Type of remote push notification service used

#### Defined in

abstractions/dist/INativeDeviceInfoAccess.d.ts:58

___

### uuid

• **uuid**: `string`

Unique identifier of the device generated by the operating system

#### Defined in

abstractions/dist/INativeDeviceInfoAccess.d.ts:38

___

### version

• **version**: `string`

Version of th eoperating system

#### Defined in

abstractions/dist/INativeDeviceInfoAccess.d.ts:42