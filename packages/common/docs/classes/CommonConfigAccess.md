[@js-soft/native-common](../README.md) / [Exports](../modules.md) / CommonConfigAccess

# Class: CommonConfigAccess

## Implements

- `INativeConfigAccess`

## Table of contents

### Constructors

- [constructor](CommonConfigAccess.md#constructor)

### Properties

- [\_dirty](CommonConfigAccess.md#_dirty)
- [config](CommonConfigAccess.md#config)
- [defaultConfig](CommonConfigAccess.md#defaultconfig)
- [fileAccess](CommonConfigAccess.md#fileaccess)
- [logger](CommonConfigAccess.md#logger)
- [runtimeConfig](CommonConfigAccess.md#runtimeconfig)

### Methods

- [get](CommonConfigAccess.md#get)
- [initDefaultConfig](CommonConfigAccess.md#initdefaultconfig)
- [initRuntimeConfig](CommonConfigAccess.md#initruntimeconfig)
- [isDirty](CommonConfigAccess.md#isdirty)
- [refreshConfig](CommonConfigAccess.md#refreshconfig)
- [remove](CommonConfigAccess.md#remove)
- [save](CommonConfigAccess.md#save)
- [set](CommonConfigAccess.md#set)

## Constructors

### constructor

• **new CommonConfigAccess**(`path`, `eventBus`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `eventBus` | `INativeEventBus` |

#### Defined in

[CommonConfigAccess.ts:17](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/common/src/CommonConfigAccess.ts#L17)

## Properties

### \_dirty

• `Private` **\_dirty**: `boolean`

#### Defined in

[CommonConfigAccess.ts:19](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/common/src/CommonConfigAccess.ts#L19)

___

### config

• `Private` **config**: `any` = `{}`

#### Defined in

[CommonConfigAccess.ts:26](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/common/src/CommonConfigAccess.ts#L26)

___

### defaultConfig

• `Private` **defaultConfig**: `any` = `{}`

#### Defined in

[CommonConfigAccess.ts:25](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/common/src/CommonConfigAccess.ts#L25)

___

### fileAccess

• `Private` **fileAccess**: `INativeFileAccess`

#### Defined in

[CommonConfigAccess.ts:15](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/common/src/CommonConfigAccess.ts#L15)

___

### logger

• `Private` **logger**: `ILogger`

#### Defined in

[CommonConfigAccess.ts:16](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/common/src/CommonConfigAccess.ts#L16)

___

### runtimeConfig

• `Private` **runtimeConfig**: `any` = `{}`

#### Defined in

[CommonConfigAccess.ts:24](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/common/src/CommonConfigAccess.ts#L24)

## Methods

### get

▸ **get**(`key`): `Result`<`any`, `ApplicationError`\>

Optional: Config object can be accessed directly

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Result`<`any`, `ApplicationError`\>

#### Implementation of

INativeConfigAccess.get

#### Defined in

[CommonConfigAccess.ts:82](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/common/src/CommonConfigAccess.ts#L82)

___

### initDefaultConfig

▸ **initDefaultConfig**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

INativeConfigAccess.initDefaultConfig

#### Defined in

[CommonConfigAccess.ts:32](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/common/src/CommonConfigAccess.ts#L32)

___

### initRuntimeConfig

▸ **initRuntimeConfig**(`logger`, `fileAccess`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger` | `ILogger` |
| `fileAccess` | `INativeFileAccess` |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

INativeConfigAccess.initRuntimeConfig

#### Defined in

[CommonConfigAccess.ts:40](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/common/src/CommonConfigAccess.ts#L40)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[CommonConfigAccess.ts:20](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/common/src/CommonConfigAccess.ts#L20)

___

### refreshConfig

▸ `Private` **refreshConfig**(): `void`

#### Returns

`void`

#### Defined in

[CommonConfigAccess.ts:28](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/common/src/CommonConfigAccess.ts#L28)

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

[CommonConfigAccess.ts:102](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/common/src/CommonConfigAccess.ts#L102)

___

### save

▸ **save**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

INativeConfigAccess.save

#### Defined in

[CommonConfigAccess.ts:66](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/common/src/CommonConfigAccess.ts#L66)

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

[CommonConfigAccess.ts:90](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/common/src/CommonConfigAccess.ts#L90)
