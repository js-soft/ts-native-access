[@js-soft/native-web](../README.md) / [Exports](../modules.md) / WebDeviceInfoAccess

# Class: WebDeviceInfoAccess

## Implements

- [`INativeDeviceInfoAccess`](../interfaces/INativeDeviceInfoAccess.md)

## Table of contents

### Constructors

- [constructor](WebDeviceInfoAccess.md#constructor)

### Properties

- [\_deviceInfo](WebDeviceInfoAccess.md#_deviceinfo)

### Accessors

- [deviceInfo](WebDeviceInfoAccess.md#deviceinfo)

### Methods

- [init](WebDeviceInfoAccess.md#init)

## Constructors

### constructor

• **new WebDeviceInfoAccess**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`INativeConfigAccess`](../interfaces/INativeConfigAccess.md) |

#### Defined in

[web/src/WebDeviceInfoAccess.ts:6](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/web/src/WebDeviceInfoAccess.ts#L6)

## Properties

### \_deviceInfo

• `Private` **\_deviceInfo**: [`INativeDeviceInfo`](../interfaces/INativeDeviceInfo.md)

#### Defined in

[web/src/WebDeviceInfoAccess.ts:11](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/web/src/WebDeviceInfoAccess.ts#L11)

## Accessors

### deviceInfo

• `get` **deviceInfo**(): [`INativeDeviceInfo`](../interfaces/INativeDeviceInfo.md)

Available information about the device running the app

#### Returns

[`INativeDeviceInfo`](../interfaces/INativeDeviceInfo.md)

#### Implementation of

[INativeDeviceInfoAccess](../interfaces/INativeDeviceInfoAccess.md).[deviceInfo](../interfaces/INativeDeviceInfoAccess.md#deviceinfo)

#### Defined in

[web/src/WebDeviceInfoAccess.ts:8](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/web/src/WebDeviceInfoAccess.ts#L8)

## Methods

### init

▸ **init**(): `Promise`<`Result`<[`INativeDeviceInfo`](../interfaces/INativeDeviceInfo.md), `ApplicationError`\>\>

Initialize the module to retrieve relevant device information

#### Returns

`Promise`<`Result`<[`INativeDeviceInfo`](../interfaces/INativeDeviceInfo.md), `ApplicationError`\>\>

#### Implementation of

[INativeDeviceInfoAccess](../interfaces/INativeDeviceInfoAccess.md).[init](../interfaces/INativeDeviceInfoAccess.md#init)

#### Defined in

[web/src/WebDeviceInfoAccess.ts:13](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/web/src/WebDeviceInfoAccess.ts#L13)
