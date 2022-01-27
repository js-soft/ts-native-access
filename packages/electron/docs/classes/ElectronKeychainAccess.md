[@js-soft/native-electron](../README.md) / [Exports](../modules.md) / ElectronKeychainAccess

# Class: ElectronKeychainAccess

## Implements

- [`INativeKeychainAccess`](../interfaces/INativeKeychainAccess.md)

## Table of contents

### Constructors

- [constructor](ElectronKeychainAccess.md#constructor)

### Properties

- [service](ElectronKeychainAccess.md#service)

### Methods

- [delete](ElectronKeychainAccess.md#delete)
- [get](ElectronKeychainAccess.md#get)
- [init](ElectronKeychainAccess.md#init)
- [list](ElectronKeychainAccess.md#list)
- [set](ElectronKeychainAccess.md#set)

## Constructors

### constructor

• **new ElectronKeychainAccess**(`logger`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger` | `ILogger` |
| `config` | [`INativeConfigAccess`](../interfaces/INativeConfigAccess.md) |

#### Defined in

[electron/src/ElectronKeychainAccess.ts:7](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/electron/src/ElectronKeychainAccess.ts#L7)

## Properties

### service

• `Private` `Readonly` **service**: `string`

#### Defined in

[electron/src/ElectronKeychainAccess.ts:6](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/electron/src/ElectronKeychainAccess.ts#L6)

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

[electron/src/ElectronKeychainAccess.ts:37](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/electron/src/ElectronKeychainAccess.ts#L37)

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

[electron/src/ElectronKeychainAccess.ts:15](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/electron/src/ElectronKeychainAccess.ts#L15)

___

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize the module

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeKeychainAccess](../interfaces/INativeKeychainAccess.md).[init](../interfaces/INativeKeychainAccess.md#init)

#### Defined in

[electron/src/ElectronKeychainAccess.ts:11](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/electron/src/ElectronKeychainAccess.ts#L11)

___

### list

▸ **list**(): `Promise`<`Result`<[`INativeKeychainEntry`](../interfaces/INativeKeychainEntry.md)[], `ApplicationError`\>\>

List all key-value pairs added by the applicaion

#### Returns

`Promise`<`Result`<[`INativeKeychainEntry`](../interfaces/INativeKeychainEntry.md)[], `ApplicationError`\>\>

#### Implementation of

[INativeKeychainAccess](../interfaces/INativeKeychainAccess.md).[list](../interfaces/INativeKeychainAccess.md#list)

#### Defined in

[electron/src/ElectronKeychainAccess.ts:46](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/electron/src/ElectronKeychainAccess.ts#L46)

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

[electron/src/ElectronKeychainAccess.ts:28](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/electron/src/ElectronKeychainAccess.ts#L28)
