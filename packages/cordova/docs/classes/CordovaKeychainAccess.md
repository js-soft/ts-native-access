[@js-soft/native-cordova](../README.md) / [Exports](../modules.md) / CordovaKeychainAccess

# Class: CordovaKeychainAccess

## Implements

- [`INativeKeychainAccess`](../interfaces/INativeKeychainAccess.md)

## Table of contents

### Constructors

- [constructor](CordovaKeychainAccess.md#constructor)

### Properties

- [secureStorage](CordovaKeychainAccess.md#securestorage)

### Methods

- [delete](CordovaKeychainAccess.md#delete)
- [get](CordovaKeychainAccess.md#get)
- [init](CordovaKeychainAccess.md#init)
- [list](CordovaKeychainAccess.md#list)
- [set](CordovaKeychainAccess.md#set)

## Constructors

### constructor

• **new CordovaKeychainAccess**(`logger`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger` | `ILogger` |
| `config` | [`INativeConfigAccess`](../interfaces/INativeConfigAccess.md) |

#### Defined in

[cordova/src/CordovaKeychainAccess.ts:6](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/cordova/src/CordovaKeychainAccess.ts#L6)

## Properties

### secureStorage

• `Private` **secureStorage**: `any`

#### Defined in

[cordova/src/CordovaKeychainAccess.ts:8](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/cordova/src/CordovaKeychainAccess.ts#L8)

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

#### Implementation of

[INativeKeychainAccess](../interfaces/INativeKeychainAccess.md).[delete](../interfaces/INativeKeychainAccess.md#delete)

#### Defined in

[cordova/src/CordovaKeychainAccess.ts:38](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/cordova/src/CordovaKeychainAccess.ts#L38)

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

[cordova/src/CordovaKeychainAccess.ts:19](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/cordova/src/CordovaKeychainAccess.ts#L19)

___

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize the module

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeKeychainAccess](../interfaces/INativeKeychainAccess.md).[init](../interfaces/INativeKeychainAccess.md#init)

#### Defined in

[cordova/src/CordovaKeychainAccess.ts:10](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/cordova/src/CordovaKeychainAccess.ts#L10)

___

### list

▸ **list**(): `Promise`<`Result`<[`INativeKeychainEntry`](../interfaces/INativeKeychainEntry.md)[], `ApplicationError`\>\>

List all key-value pairs added by the applicaion

#### Returns

`Promise`<`Result`<[`INativeKeychainEntry`](../interfaces/INativeKeychainEntry.md)[], `ApplicationError`\>\>

#### Implementation of

[INativeKeychainAccess](../interfaces/INativeKeychainAccess.md).[list](../interfaces/INativeKeychainAccess.md#list)

#### Defined in

[cordova/src/CordovaKeychainAccess.ts:47](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/cordova/src/CordovaKeychainAccess.ts#L47)

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

[cordova/src/CordovaKeychainAccess.ts:29](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/cordova/src/CordovaKeychainAccess.ts#L29)
