[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / INativeKeychainAccess

# Interface: INativeKeychainAccess

## Table of contents

### Methods

- [delete](INativeKeychainAccess.md#delete)
- [get](INativeKeychainAccess.md#get)
- [init](INativeKeychainAccess.md#init)
- [list](INativeKeychainAccess.md#list)
- [set](INativeKeychainAccess.md#set)

## Methods

### delete

▸ **delete**(`key`, `value`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeKeychainAccess.ts:11](https://github.com/js-soft/ts-native-access/blob/7416af4/packages/abstractions/src/INativeKeychainAccess.ts#L11)

___

### get

▸ **get**(`name`): `Promise`<`Result`<[`INativeKeychainEntry`](INativeKeychainEntry.md), `ApplicationError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<`Result`<[`INativeKeychainEntry`](INativeKeychainEntry.md), `ApplicationError`\>\>

#### Defined in

[src/INativeKeychainAccess.ts:9](https://github.com/js-soft/ts-native-access/blob/7416af4/packages/abstractions/src/INativeKeychainAccess.ts#L9)

___

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeKeychainAccess.ts:13](https://github.com/js-soft/ts-native-access/blob/7416af4/packages/abstractions/src/INativeKeychainAccess.ts#L13)

___

### list

▸ **list**(): `Promise`<`Result`<[`INativeKeychainEntry`](INativeKeychainEntry.md)[], `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<[`INativeKeychainEntry`](INativeKeychainEntry.md)[], `ApplicationError`\>\>

#### Defined in

[src/INativeKeychainAccess.ts:12](https://github.com/js-soft/ts-native-access/blob/7416af4/packages/abstractions/src/INativeKeychainAccess.ts#L12)

___

### set

▸ **set**(`key`, `value`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeKeychainAccess.ts:10](https://github.com/js-soft/ts-native-access/blob/7416af4/packages/abstractions/src/INativeKeychainAccess.ts#L10)
