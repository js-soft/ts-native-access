[@js-soft/native-electron](../README.md) / [Exports](../modules.md) / ElectronFileAccess

# Class: ElectronFileAccess

## Implements

- [`INativeFileAccess`](../interfaces/INativeFileAccess.md)

## Table of contents

### Constructors

- [constructor](ElectronFileAccess.md#constructor)

### Properties

- [datadir](ElectronFileAccess.md#datadir)
- [homedir](ElectronFileAccess.md#homedir)
- [tmpdir](ElectronFileAccess.md#tmpdir)

### Methods

- [createDirectory](ElectronFileAccess.md#createdirectory)
- [deleteDirectory](ElectronFileAccess.md#deletedirectory)
- [deleteFile](ElectronFileAccess.md#deletefile)
- [existsDirectory](ElectronFileAccess.md#existsdirectory)
- [existsFile](ElectronFileAccess.md#existsfile)
- [getStoragePath](ElectronFileAccess.md#getstoragepath)
- [infoDirectory](ElectronFileAccess.md#infodirectory)
- [infoFile](ElectronFileAccess.md#infofile)
- [init](ElectronFileAccess.md#init)
- [openFile](ElectronFileAccess.md#openfile)
- [openFileContent](ElectronFileAccess.md#openfilecontent)
- [readFileAsBinary](ElectronFileAccess.md#readfileasbinary)
- [readFileAsText](ElectronFileAccess.md#readfileastext)
- [resolveErrorCode](ElectronFileAccess.md#resolveerrorcode)
- [select](ElectronFileAccess.md#select)
- [writeFile](ElectronFileAccess.md#writefile)

## Constructors

### constructor

• **new ElectronFileAccess**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`INativeConfigAccess`](../interfaces/INativeConfigAccess.md) |

#### Defined in

[electron/src/ElectronFileAccess.ts:14](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronFileAccess.ts#L14)

## Properties

### datadir

• `Private` **datadir**: `string`

#### Defined in

[electron/src/ElectronFileAccess.ts:18](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronFileAccess.ts#L18)

___

### homedir

• `Private` **homedir**: `string`

#### Defined in

[electron/src/ElectronFileAccess.ts:16](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronFileAccess.ts#L16)

___

### tmpdir

• `Private` **tmpdir**: `string`

#### Defined in

[electron/src/ElectronFileAccess.ts:17](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronFileAccess.ts#L17)

## Methods

### createDirectory

▸ **createDirectory**(`path`, `storage?`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Create a directory

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `storage` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | `NativeFileStorage.Data` |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[createDirectory](../interfaces/INativeFileAccess.md#createdirectory)

#### Defined in

[electron/src/ElectronFileAccess.ts:195](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronFileAccess.ts#L195)

___

### deleteDirectory

▸ **deleteDirectory**(`path`, `storage?`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Delete a directory

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `storage` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | `NativeFileStorage.Data` |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[deleteDirectory](../interfaces/INativeFileAccess.md#deletedirectory)

#### Defined in

[electron/src/ElectronFileAccess.ts:205](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronFileAccess.ts#L205)

___

### deleteFile

▸ **deleteFile**(`path`, `storage?`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Delete specified file

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `storage` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | `NativeFileStorage.Data` |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[deleteFile](../interfaces/INativeFileAccess.md#deletefile)

#### Defined in

[electron/src/ElectronFileAccess.ts:128](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronFileAccess.ts#L128)

___

### existsDirectory

▸ **existsDirectory**(`path`, `storage?`): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

Test if a directory exists

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `storage` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | `NativeFileStorage.Data` |

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[existsDirectory](../interfaces/INativeFileAccess.md#existsdirectory)

#### Defined in

[electron/src/ElectronFileAccess.ts:225](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronFileAccess.ts#L225)

___

### existsFile

▸ **existsFile**(`path`, `storage?`): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

Test if a file exists

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `storage` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | `NativeFileStorage.Data` |

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[existsFile](../interfaces/INativeFileAccess.md#existsfile)

#### Defined in

[electron/src/ElectronFileAccess.ts:138](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronFileAccess.ts#L138)

___

### getStoragePath

▸ `Private` **getStoragePath**(`path`, `storage`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `storage` | [`NativeFileStorage`](../enums/NativeFileStorage.md) |

#### Returns

`string`

#### Defined in

[electron/src/ElectronFileAccess.ts:37](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronFileAccess.ts#L37)

___

### infoDirectory

▸ **infoDirectory**(`path`, `storage?`): `Promise`<`Result`<[`INativeDirectory`](../interfaces/INativeDirectory.md), `ApplicationError`\>\>

Retrieve information about a specified directory

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `storage` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | `NativeFileStorage.Data` |

#### Returns

`Promise`<`Result`<[`INativeDirectory`](../interfaces/INativeDirectory.md), `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[infoDirectory](../interfaces/INativeFileAccess.md#infodirectory)

#### Defined in

[electron/src/ElectronFileAccess.ts:153](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronFileAccess.ts#L153)

___

### infoFile

▸ **infoFile**(`path`, `storage?`): `Promise`<`Result`<[`INativeFileMetadata`](../interfaces/INativeFileMetadata.md), `ApplicationError`\>\>

Retrieve meta information about the specified file

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `storage` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | `NativeFileStorage.Data` |

#### Returns

`Promise`<`Result`<[`INativeFileMetadata`](../interfaces/INativeFileMetadata.md), `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[infoFile](../interfaces/INativeFileAccess.md#infofile)

#### Defined in

[electron/src/ElectronFileAccess.ts:71](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronFileAccess.ts#L71)

___

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize the native features and create a folder structure

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[init](../interfaces/INativeFileAccess.md#init)

#### Defined in

[electron/src/ElectronFileAccess.ts:20](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronFileAccess.ts#L20)

___

### openFile

▸ **openFile**(`path`, `storage?`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Open a file with the standard application specified by the operating system

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `storage` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | `NativeFileStorage.Data` |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[openFile](../interfaces/INativeFileAccess.md#openfile)

#### Defined in

[electron/src/ElectronFileAccess.ts:273](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronFileAccess.ts#L273)

___

### openFileContent

▸ **openFileContent**(`data`, `metadata`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Create and open a file with the standard application specified by the operating system

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `metadata` | [`INativeFileMetadata`](../interfaces/INativeFileMetadata.md) |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[openFileContent](../interfaces/INativeFileAccess.md#openfilecontent)

#### Defined in

[electron/src/ElectronFileAccess.ts:279](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronFileAccess.ts#L279)

___

### readFileAsBinary

▸ **readFileAsBinary**(`path`, `storage?`): `Promise`<`Result`<`Uint8Array`, `ApplicationError`\>\>

Read the data of the specified file as a an array

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `storage` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | `NativeFileStorage.Data` |

#### Returns

`Promise`<`Result`<`Uint8Array`, `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[readFileAsBinary](../interfaces/INativeFileAccess.md#readfileasbinary)

#### Defined in

[electron/src/ElectronFileAccess.ts:101](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronFileAccess.ts#L101)

___

### readFileAsText

▸ **readFileAsText**(`path`, `storage?`): `Promise`<`Result`<`string`, `ApplicationError`\>\>

Read the data of the specified file as a string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `storage` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | `NativeFileStorage.Data` |

#### Returns

`Promise`<`Result`<`string`, `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[readFileAsText](../interfaces/INativeFileAccess.md#readfileastext)

#### Defined in

[electron/src/ElectronFileAccess.ts:91](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronFileAccess.ts#L91)

___

### resolveErrorCode

▸ `Private` **resolveErrorCode**(`error`): `ApplicationError`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

#### Returns

`ApplicationError`

#### Defined in

[electron/src/ElectronFileAccess.ts:52](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronFileAccess.ts#L52)

___

### select

▸ **select**(): `Promise`<`Result`<[`INativeFile`](../interfaces/INativeFile.md), `ApplicationError`\>\>

Open the file selection dialog of the operating system and receive the selected file

#### Returns

`Promise`<`Result`<[`INativeFile`](../interfaces/INativeFile.md), `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[select](../interfaces/INativeFileAccess.md#select)

#### Defined in

[electron/src/ElectronFileAccess.ts:240](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronFileAccess.ts#L240)

___

### writeFile

▸ **writeFile**(`path`, `data`, `storage?`, `append?`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Write data to a file

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `data` | `string` \| `Uint8Array` | `undefined` |
| `storage` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | `NativeFileStorage.Data` |
| `append` | `boolean` | `false` |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[writeFile](../interfaces/INativeFileAccess.md#writefile)

#### Defined in

[electron/src/ElectronFileAccess.ts:112](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronFileAccess.ts#L112)
