[@js-soft/native-web](../README.md) / [Exports](../modules.md) / INativeKeychainAccess

# Interface: INativeKeychainAccess

Access to native keychain

## Implemented by

- [`WebKeychainAccess`](../classes/WebKeychainAccess.md)

## Table of contents

### Methods

- [delete](INativeKeychainAccess.md#delete)
- [get](INativeKeychainAccess.md#get)
- [init](INativeKeychainAccess.md#init)
- [list](INativeKeychainAccess.md#list)
- [set](INativeKeychainAccess.md#set)

## Methods

### delete

▸ **delete**(`key`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Delete key-value pair

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

abstractions/dist/INativeKeychainAccess.d.ts:28

___

### get

▸ **get**(`key`): `Promise`<`Result`<[`INativeKeychainEntry`](INativeKeychainEntry.md), `ApplicationError`\>\>

Get value for the specified {@link key}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | string identifying a value |

#### Returns

`Promise`<`Result`<[`INativeKeychainEntry`](INativeKeychainEntry.md), `ApplicationError`\>\>

#### Defined in

abstractions/dist/INativeKeychainAccess.d.ts:17

___

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize the module

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

abstractions/dist/INativeKeychainAccess.d.ts:36

___

### list

▸ **list**(): `Promise`<`Result`<[`INativeKeychainEntry`](INativeKeychainEntry.md)[], `ApplicationError`\>\>

List all key-value pairs added by the applicaion

#### Returns

`Promise`<`Result`<[`INativeKeychainEntry`](INativeKeychainEntry.md)[], `ApplicationError`\>\>

#### Defined in

abstractions/dist/INativeKeychainAccess.d.ts:32

___

### set

▸ **set**(`key`, `value`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Add key-value pair to keychain

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

abstractions/dist/INativeKeychainAccess.d.ts:23
