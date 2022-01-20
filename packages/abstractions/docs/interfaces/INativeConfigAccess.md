[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / INativeConfigAccess

# Interface: INativeConfigAccess

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Result`<`any`, `ApplicationError`\>

#### Defined in

[src/INativeConfigAccess.ts:82](https://github.com/js-soft/ts-native-access/blob/93dbc36/packages/abstractions/src/INativeConfigAccess.ts#L82)

___

### initDefaultConfig

▸ **initDefaultConfig**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeConfigAccess.ts:87](https://github.com/js-soft/ts-native-access/blob/93dbc36/packages/abstractions/src/INativeConfigAccess.ts#L87)

___

### initRuntimeConfig

▸ **initRuntimeConfig**(`logger`, `fileAccess`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger` | `ILogger` |
| `fileAccess` | [`INativeFileAccess`](INativeFileAccess.md) |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeConfigAccess.ts:86](https://github.com/js-soft/ts-native-access/blob/93dbc36/packages/abstractions/src/INativeConfigAccess.ts#L86)

___

### remove

▸ **remove**(`key`): `Result`<`void`, `ApplicationError`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Result`<`void`, `ApplicationError`\>

#### Defined in

[src/INativeConfigAccess.ts:84](https://github.com/js-soft/ts-native-access/blob/93dbc36/packages/abstractions/src/INativeConfigAccess.ts#L84)

___

### save

▸ **save**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeConfigAccess.ts:85](https://github.com/js-soft/ts-native-access/blob/93dbc36/packages/abstractions/src/INativeConfigAccess.ts#L85)

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

#### Defined in

[src/INativeConfigAccess.ts:83](https://github.com/js-soft/ts-native-access/blob/93dbc36/packages/abstractions/src/INativeConfigAccess.ts#L83)
