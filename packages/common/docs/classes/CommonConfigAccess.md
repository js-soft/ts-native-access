[@js-soft/native-common](../README.md) / [Exports](../modules.md) / CommonConfigAccess

# Class: CommonConfigAccess

## Implements

- `INativeConfigAccess`

## Table of contents

### Constructors

- [constructor](CommonConfigAccess.md#constructor)

### Properties

- [config](CommonConfigAccess.md#config)
- [defaultConfig](CommonConfigAccess.md#defaultconfig)
- [fileAccess](CommonConfigAccess.md#fileaccess)
- [logger](CommonConfigAccess.md#logger)
- [runtimeConfig](CommonConfigAccess.md#runtimeconfig)
- [runtimeConfigPath](CommonConfigAccess.md#runtimeconfigpath)

### Methods

- [get](CommonConfigAccess.md#get)
- [initDefaultConfig](CommonConfigAccess.md#initdefaultconfig)
- [initRuntimeConfig](CommonConfigAccess.md#initruntimeconfig)
- [refreshConfig](CommonConfigAccess.md#refreshconfig)
- [remove](CommonConfigAccess.md#remove)
- [save](CommonConfigAccess.md#save)
- [set](CommonConfigAccess.md#set)

## Constructors

### constructor

• **new CommonConfigAccess**(`eventBus`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventBus` | `INativeEventBus` |

#### Defined in

[CommonConfigAccess.ts:18](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/common/src/CommonConfigAccess.ts#L18)

## Properties

### config

• `Private` **config**: `any` = `{}`

#### Defined in

[CommonConfigAccess.ts:22](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/common/src/CommonConfigAccess.ts#L22)

___

### defaultConfig

• `Private` **defaultConfig**: `any` = `{}`

#### Defined in

[CommonConfigAccess.ts:21](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/common/src/CommonConfigAccess.ts#L21)

___

### fileAccess

• `Private` **fileAccess**: `INativeFileAccess`

#### Defined in

[CommonConfigAccess.ts:15](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/common/src/CommonConfigAccess.ts#L15)

___

### logger

• `Private` **logger**: `ILogger`

#### Defined in

[CommonConfigAccess.ts:16](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/common/src/CommonConfigAccess.ts#L16)

___

### runtimeConfig

• `Private` **runtimeConfig**: `any` = `{}`

#### Defined in

[CommonConfigAccess.ts:20](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/common/src/CommonConfigAccess.ts#L20)

___

### runtimeConfigPath

• `Private` **runtimeConfigPath**: `string`

#### Defined in

[CommonConfigAccess.ts:17](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/common/src/CommonConfigAccess.ts#L17)

## Methods

### get

▸ **get**(`key`): `Result`<`any`, `ApplicationError`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Result`<`any`, `ApplicationError`\>

#### Implementation of

INativeConfigAccess.get

#### Defined in

[CommonConfigAccess.ts:79](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/common/src/CommonConfigAccess.ts#L79)

___

### initDefaultConfig

▸ **initDefaultConfig**(`path`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

INativeConfigAccess.initDefaultConfig

#### Defined in

[CommonConfigAccess.ts:32](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/common/src/CommonConfigAccess.ts#L32)

___

### initRuntimeConfig

▸ **initRuntimeConfig**(`path`, `logger`, `fileAccess`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `logger` | `ILogger` |
| `fileAccess` | `INativeFileAccess` |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

INativeConfigAccess.initRuntimeConfig

#### Defined in

[CommonConfigAccess.ts:40](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/common/src/CommonConfigAccess.ts#L40)

___

### refreshConfig

▸ `Private` **refreshConfig**(): `void`

Merge runtime and default config. This is done after the runtime config changes.
The runtime config can overwrite entries of the default config.

#### Returns

`void`

#### Defined in

[CommonConfigAccess.ts:28](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/common/src/CommonConfigAccess.ts#L28)

___

### remove

▸ **remove**(`key`): `Result`<`void`, `ApplicationError`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Result`<`void`, `ApplicationError`\>

#### Implementation of

INativeConfigAccess.remove

#### Defined in

[CommonConfigAccess.ts:98](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/common/src/CommonConfigAccess.ts#L98)

___

### save

▸ **save**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

INativeConfigAccess.save

#### Defined in

[CommonConfigAccess.ts:68](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/common/src/CommonConfigAccess.ts#L68)

___

### set

▸ **set**(`key`, `value`): `Result`<`void`, `ApplicationError`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`Result`<`void`, `ApplicationError`\>

#### Implementation of

INativeConfigAccess.set

#### Defined in

[CommonConfigAccess.ts:87](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/common/src/CommonConfigAccess.ts#L87)
