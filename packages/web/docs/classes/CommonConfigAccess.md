[@js-soft/native-web](../README.md) / [Exports](../modules.md) / CommonConfigAccess

# Class: CommonConfigAccess

## Implements

- [`INativeConfigAccess`](../interfaces/INativeConfigAccess.md)

## Table of contents

### Constructors

- [constructor](CommonConfigAccess.md#constructor)

### Properties

- [\_dirty](CommonConfigAccess.md#_dirty)
- [config](CommonConfigAccess.md#config)
- [defaultConfig](CommonConfigAccess.md#defaultconfig)
- [eventBus](CommonConfigAccess.md#eventbus)
- [fileAccess](CommonConfigAccess.md#fileaccess)
- [logger](CommonConfigAccess.md#logger)
- [path](CommonConfigAccess.md#path)
- [refreshConfig](CommonConfigAccess.md#refreshconfig)
- [runtimeConfig](CommonConfigAccess.md#runtimeconfig)

### Methods

- [get](CommonConfigAccess.md#get)
- [initDefaultConfig](CommonConfigAccess.md#initdefaultconfig)
- [initRuntimeConfig](CommonConfigAccess.md#initruntimeconfig)
- [isDirty](CommonConfigAccess.md#isdirty)
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
| `eventBus` | [`INativeEventBus`](../interfaces/INativeEventBus.md) |

#### Defined in

common/dist/CommonConfigAccess.d.ts:9

## Properties

### \_dirty

• `Private` **\_dirty**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:10

___

### config

• `Private` **config**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:14

___

### defaultConfig

• `Private` **defaultConfig**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:13

___

### eventBus

• `Private` `Readonly` **eventBus**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:6

___

### fileAccess

• `Private` **fileAccess**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:7

___

### logger

• `Private` **logger**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:8

___

### path

• `Private` `Readonly` **path**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:5

___

### refreshConfig

• `Private` **refreshConfig**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:15

___

### runtimeConfig

• `Private` **runtimeConfig**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:12

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

[INativeConfigAccess](../interfaces/INativeConfigAccess.md).[get](../interfaces/INativeConfigAccess.md#get)

#### Defined in

common/dist/CommonConfigAccess.d.ts:24

___

### initDefaultConfig

▸ **initDefaultConfig**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize the default config (this does not yet require the filesystem to be initialized)

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeConfigAccess](../interfaces/INativeConfigAccess.md).[initDefaultConfig](../interfaces/INativeConfigAccess.md#initdefaultconfig)

#### Defined in

common/dist/CommonConfigAccess.d.ts:16

___

### initRuntimeConfig

▸ **initRuntimeConfig**(`logger`, `fileAccess`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize the runtime config by reading the existing runtime config from the filesystem

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger` | `ILogger` |
| `fileAccess` | [`INativeFileAccess`](../interfaces/INativeFileAccess.md) |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeConfigAccess](../interfaces/INativeConfigAccess.md).[initRuntimeConfig](../interfaces/INativeConfigAccess.md#initruntimeconfig)

#### Defined in

common/dist/CommonConfigAccess.d.ts:17

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Defined in

common/dist/CommonConfigAccess.d.ts:11

___

### remove

▸ **remove**(`key`): `Result`<`void`, `ApplicationError`\>

Remove a key-value pair

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Result`<`void`, `ApplicationError`\>

#### Implementation of

[INativeConfigAccess](../interfaces/INativeConfigAccess.md).[remove](../interfaces/INativeConfigAccess.md#remove)

#### Defined in

common/dist/CommonConfigAccess.d.ts:26

___

### save

▸ **save**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Save the runtime config on the filesystem

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeConfigAccess](../interfaces/INativeConfigAccess.md).[save](../interfaces/INativeConfigAccess.md#save)

#### Defined in

common/dist/CommonConfigAccess.d.ts:18

___

### set

▸ **set**(`key`, `value`): `Result`<`void`, `ApplicationError`\>

Save a key-value pair in memory

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`Result`<`void`, `ApplicationError`\>

#### Implementation of

[INativeConfigAccess](../interfaces/INativeConfigAccess.md).[set](../interfaces/INativeConfigAccess.md#set)

#### Defined in

common/dist/CommonConfigAccess.d.ts:25
