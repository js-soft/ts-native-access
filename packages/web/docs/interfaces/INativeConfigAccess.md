[@js-soft/native-web](../README.md) / [Exports](../modules.md) / INativeConfigAccess

# Interface: INativeConfigAccess

Management of default and runtime config

## Implemented by

- [`CommonConfigAccess`](../classes/CommonConfigAccess.md)

## Table of contents

### Methods

- [get](INativeConfigAccess.md#get)
- [initDefaultConfig](INativeConfigAccess.md#initdefaultconfig)
- [initRuntimeConfig](INativeConfigAccess.md#initruntimeconfig)
- [remove](INativeConfigAccess.md#remove)
- [save](INativeConfigAccess.md#save)
- [set](INativeConfigAccess.md#set)

## Methods

### get

▸ **get**(`key`): `Result`<`any`, `ApplicationError`\>

Read the value associated to a key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Result`<`any`, `ApplicationError`\>

#### Defined in

abstractions/dist/INativeConfigAccess.d.ts:142

___

### initDefaultConfig

▸ **initDefaultConfig**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize the default config (this does not yet require the filesystem to be initialized)

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

abstractions/dist/INativeConfigAccess.d.ts:161

___

### initRuntimeConfig

▸ **initRuntimeConfig**(`logger`, `fileAccess`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize the runtime config by reading the existing runtime config from the filesystem

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger` | `ILogger` |
| `fileAccess` | [`INativeFileAccess`](INativeFileAccess.md) |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

abstractions/dist/INativeConfigAccess.d.ts:167

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

#### Defined in

abstractions/dist/INativeConfigAccess.d.ts:153

___

### save

▸ **save**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Save the runtime config on the filesystem

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

abstractions/dist/INativeConfigAccess.d.ts:157

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

#### Defined in

abstractions/dist/INativeConfigAccess.d.ts:148
