[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / INativeConfigAccess

# Interface: INativeConfigAccess

Management of default and runtime config

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

[src/INativeConfigAccess.ts:89](https://github.com/js-soft/ts-native-access/blob/6589b22/packages/abstractions/src/INativeConfigAccess.ts#L89)

___

### initDefaultConfig

▸ **initDefaultConfig**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize the default config (this does not yet require the filesystem to be initialized)

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeConfigAccess.ts:108](https://github.com/js-soft/ts-native-access/blob/6589b22/packages/abstractions/src/INativeConfigAccess.ts#L108)

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

[src/INativeConfigAccess.ts:114](https://github.com/js-soft/ts-native-access/blob/6589b22/packages/abstractions/src/INativeConfigAccess.ts#L114)

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

[src/INativeConfigAccess.ts:100](https://github.com/js-soft/ts-native-access/blob/6589b22/packages/abstractions/src/INativeConfigAccess.ts#L100)

___

### save

▸ **save**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Save the runtime config on the filesystem

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeConfigAccess.ts:104](https://github.com/js-soft/ts-native-access/blob/6589b22/packages/abstractions/src/INativeConfigAccess.ts#L104)

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

[src/INativeConfigAccess.ts:95](https://github.com/js-soft/ts-native-access/blob/6589b22/packages/abstractions/src/INativeConfigAccess.ts#L95)
