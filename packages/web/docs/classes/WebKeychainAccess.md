[@js-soft/native-web](../README.md) / [Exports](../modules.md) / WebKeychainAccess

# Class: WebKeychainAccess

## Implements

- [`INativeKeychainAccess`](../interfaces/INativeKeychainAccess.md)

## Table of contents

### Constructors

- [constructor](WebKeychainAccess.md#constructor)

### Properties

- [listkey](WebKeychainAccess.md#listkey)
- [prefix](WebKeychainAccess.md#prefix)

### Methods

- [addToList](WebKeychainAccess.md#addtolist)
- [delete](WebKeychainAccess.md#delete)
- [get](WebKeychainAccess.md#get)
- [getListOfKeys](WebKeychainAccess.md#getlistofkeys)
- [init](WebKeychainAccess.md#init)
- [list](WebKeychainAccess.md#list)
- [removeFromList](WebKeychainAccess.md#removefromlist)
- [set](WebKeychainAccess.md#set)

## Constructors

### constructor

• **new WebKeychainAccess**(`logger`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger` | `ILogger` |

#### Defined in

[web/src/WebKeychainAccess.ts:8](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/web/src/WebKeychainAccess.ts#L8)

## Properties

### listkey

▪ `Static` `Readonly` **listkey**: `string` = `"secrets"`

#### Defined in

[web/src/WebKeychainAccess.ts:7](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/web/src/WebKeychainAccess.ts#L7)

___

### prefix

▪ `Static` `Readonly` **prefix**: `string` = `"secret_"`

#### Defined in

[web/src/WebKeychainAccess.ts:6](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/web/src/WebKeychainAccess.ts#L6)

## Methods

### addToList

▸ `Private` **addToList**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[web/src/WebKeychainAccess.ts:22](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/web/src/WebKeychainAccess.ts#L22)

___

### delete

▸ **delete**(`key`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Delete key-value pair

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeKeychainAccess](../interfaces/INativeKeychainAccess.md).[delete](../interfaces/INativeKeychainAccess.md#delete)

#### Defined in

[web/src/WebKeychainAccess.ts:63](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/web/src/WebKeychainAccess.ts#L63)

___

### get

▸ **get**(`key`): `Promise`<`Result`<[`INativeKeychainEntry`](../interfaces/INativeKeychainEntry.md), `ApplicationError`\>\>

Get value for the specified {@link key}

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`Result`<[`INativeKeychainEntry`](../interfaces/INativeKeychainEntry.md), `ApplicationError`\>\>

#### Implementation of

[INativeKeychainAccess](../interfaces/INativeKeychainAccess.md).[get](../interfaces/INativeKeychainAccess.md#get)

#### Defined in

[web/src/WebKeychainAccess.ts:43](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/web/src/WebKeychainAccess.ts#L43)

___

### getListOfKeys

▸ `Private` **getListOfKeys**(): `string`[]

#### Returns

`string`[]

#### Defined in

[web/src/WebKeychainAccess.ts:10](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/web/src/WebKeychainAccess.ts#L10)

___

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize the module

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeKeychainAccess](../interfaces/INativeKeychainAccess.md).[init](../interfaces/INativeKeychainAccess.md#init)

#### Defined in

[web/src/WebKeychainAccess.ts:39](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/web/src/WebKeychainAccess.ts#L39)

___

### list

▸ **list**(): `Promise`<`Result`<[`INativeKeychainEntry`](../interfaces/INativeKeychainEntry.md)[], `ApplicationError`\>\>

List all key-value pairs added by the applicaion

#### Returns

`Promise`<`Result`<[`INativeKeychainEntry`](../interfaces/INativeKeychainEntry.md)[], `ApplicationError`\>\>

#### Implementation of

[INativeKeychainAccess](../interfaces/INativeKeychainAccess.md).[list](../interfaces/INativeKeychainAccess.md#list)

#### Defined in

[web/src/WebKeychainAccess.ts:73](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/web/src/WebKeychainAccess.ts#L73)

___

### removeFromList

▸ `Private` **removeFromList**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[web/src/WebKeychainAccess.ts:30](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/web/src/WebKeychainAccess.ts#L30)

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

#### Implementation of

[INativeKeychainAccess](../interfaces/INativeKeychainAccess.md).[set](../interfaces/INativeKeychainAccess.md#set)

#### Defined in

[web/src/WebKeychainAccess.ts:53](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/web/src/WebKeychainAccess.ts#L53)
