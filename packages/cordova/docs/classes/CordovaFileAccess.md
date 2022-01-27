[@js-soft/native-cordova](../README.md) / [Exports](../modules.md) / CordovaFileAccess

# Class: CordovaFileAccess

## Implements

- [`INativeFileAccess`](../interfaces/INativeFileAccess.md)

## Table of contents

### Constructors

- [constructor](CordovaFileAccess.md#constructor)

### Properties

- [fs](CordovaFileAccess.md#fs)
- [fstmp](CordovaFileAccess.md#fstmp)

### Methods

- [createDirectory](CordovaFileAccess.md#createdirectory)
- [createDirectoryEntry](CordovaFileAccess.md#createdirectoryentry)
- [createFileEntry](CordovaFileAccess.md#createfileentry)
- [deleteDirectory](CordovaFileAccess.md#deletedirectory)
- [deleteFile](CordovaFileAccess.md#deletefile)
- [existsDirectory](CordovaFileAccess.md#existsdirectory)
- [existsFile](CordovaFileAccess.md#existsfile)
- [getDirectoryEntries](CordovaFileAccess.md#getdirectoryentries)
- [getDirectoryEntry](CordovaFileAccess.md#getdirectoryentry)
- [getDirectoryReader](CordovaFileAccess.md#getdirectoryreader)
- [getFile](CordovaFileAccess.md#getfile)
- [getFileEntry](CordovaFileAccess.md#getfileentry)
- [getFileReader](CordovaFileAccess.md#getfilereader)
- [getFileWriter](CordovaFileAccess.md#getfilewriter)
- [infoDirectory](CordovaFileAccess.md#infodirectory)
- [infoFile](CordovaFileAccess.md#infofile)
- [init](CordovaFileAccess.md#init)
- [openFile](CordovaFileAccess.md#openfile)
- [openFileContent](CordovaFileAccess.md#openfilecontent)
- [readFileAsBinary](CordovaFileAccess.md#readfileasbinary)
- [readFileAsText](CordovaFileAccess.md#readfileastext)
- [removeDirectoryEntry](CordovaFileAccess.md#removedirectoryentry)
- [removeFileEntry](CordovaFileAccess.md#removefileentry)
- [resolveErrorCode](CordovaFileAccess.md#resolveerrorcode)
- [resolveNativePath](CordovaFileAccess.md#resolvenativepath)
- [select](CordovaFileAccess.md#select)
- [writeFile](CordovaFileAccess.md#writefile)

## Constructors

### constructor

• **new CordovaFileAccess**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`INativeConfigAccess`](../interfaces/INativeConfigAccess.md) |

#### Defined in

[cordova/src/CordovaFileAccess.ts:14](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L14)

## Properties

### fs

• `Private` **fs**: `any`

#### Defined in

[cordova/src/CordovaFileAccess.ts:16](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L16)

___

### fstmp

• `Private` **fstmp**: `any`

#### Defined in

[cordova/src/CordovaFileAccess.ts:17](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L17)

## Methods

### createDirectory

▸ **createDirectory**(`path`, `storage?`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Create a directory

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `storage` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | `NativeFileStorage.App` |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[createDirectory](../interfaces/INativeFileAccess.md#createdirectory)

#### Defined in

[cordova/src/CordovaFileAccess.ts:244](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L244)

___

### createDirectoryEntry

▸ `Private` **createDirectoryEntry**(`path`, `fs`): `Promise`<`DirectoryEntry`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `fs` | `any` |

#### Returns

`Promise`<`DirectoryEntry`\>

#### Defined in

[cordova/src/CordovaFileAccess.ts:37](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L37)

___

### createFileEntry

▸ `Private` **createFileEntry**(`path`, `fs`): `Promise`<`FileEntry`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `fs` | `any` |

#### Returns

`Promise`<`FileEntry`\>

#### Defined in

[cordova/src/CordovaFileAccess.ts:33](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L33)

___

### deleteDirectory

▸ **deleteDirectory**(`path`, `storage?`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Delete a directory

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `storage` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | `NativeFileStorage.App` |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[deleteDirectory](../interfaces/INativeFileAccess.md#deletedirectory)

#### Defined in

[cordova/src/CordovaFileAccess.ts:254](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L254)

___

### deleteFile

▸ **deleteFile**(`path`, `storage?`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Delete specified file

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `storage` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | `NativeFileStorage.App` |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[deleteFile](../interfaces/INativeFileAccess.md#deletefile)

#### Defined in

[cordova/src/CordovaFileAccess.ts:179](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L179)

___

### existsDirectory

▸ **existsDirectory**(`path`, `storage?`): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

Test if a directory exists

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `storage` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | `NativeFileStorage.App` |

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[existsDirectory](../interfaces/INativeFileAccess.md#existsdirectory)

#### Defined in

[cordova/src/CordovaFileAccess.ts:265](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L265)

___

### existsFile

▸ **existsFile**(`path`, `storage?`): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

Test if a file exists

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `storage` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | `NativeFileStorage.App` |

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[existsFile](../interfaces/INativeFileAccess.md#existsfile)

#### Defined in

[cordova/src/CordovaFileAccess.ts:190](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L190)

___

### getDirectoryEntries

▸ `Private` **getDirectoryEntries**(`directoryReader`): `Promise`<`Entry`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `directoryReader` | `DirectoryReader` |

#### Returns

`Promise`<`Entry`[]\>

#### Defined in

[cordova/src/CordovaFileAccess.ts:57](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L57)

___

### getDirectoryEntry

▸ `Private` **getDirectoryEntry**(`path`, `fs`): `Promise`<`DirectoryEntry`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `fs` | `any` |

#### Returns

`Promise`<`DirectoryEntry`\>

#### Defined in

[cordova/src/CordovaFileAccess.ts:29](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L29)

___

### getDirectoryReader

▸ `Private` **getDirectoryReader**(`directoryEntry`): `Promise`<`DirectoryReader`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `directoryEntry` | `DirectoryEntry` |

#### Returns

`Promise`<`DirectoryReader`\>

#### Defined in

[cordova/src/CordovaFileAccess.ts:53](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L53)

___

### getFile

▸ `Private` **getFile**(`fileEntry`): `Promise`<`File`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileEntry` | `FileEntry` |

#### Returns

`Promise`<`File`\>

#### Defined in

[cordova/src/CordovaFileAccess.ts:41](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L41)

___

### getFileEntry

▸ `Private` **getFileEntry**(`path`, `fs`): `Promise`<`FileEntry`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `fs` | `any` |

#### Returns

`Promise`<`FileEntry`\>

#### Defined in

[cordova/src/CordovaFileAccess.ts:25](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L25)

___

### getFileReader

▸ `Private` **getFileReader**(): `FileReader`

#### Returns

`FileReader`

#### Defined in

[cordova/src/CordovaFileAccess.ts:49](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L49)

___

### getFileWriter

▸ `Private` **getFileWriter**(`fileEntry`): `Promise`<`FileWriter`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileEntry` | `FileEntry` |

#### Returns

`Promise`<`FileWriter`\>

#### Defined in

[cordova/src/CordovaFileAccess.ts:45](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L45)

___

### infoDirectory

▸ **infoDirectory**(`path`, `storage?`): `Promise`<`Result`<[`INativeDirectory`](../interfaces/INativeDirectory.md), `ApplicationError`\>\>

Retrieve information about a specified directory

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `storage` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | `NativeFileStorage.App` |

#### Returns

`Promise`<`Result`<[`INativeDirectory`](../interfaces/INativeDirectory.md), `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[infoDirectory](../interfaces/INativeFileAccess.md#infodirectory)

#### Defined in

[cordova/src/CordovaFileAccess.ts:205](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L205)

___

### infoFile

▸ **infoFile**(`path`, `storage?`): `Promise`<`Result`<[`INativeFileMetadata`](../interfaces/INativeFileMetadata.md), `ApplicationError`\>\>

Retrieve meta information about the specified file

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `storage` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | `NativeFileStorage.App` |

#### Returns

`Promise`<`Result`<[`INativeFileMetadata`](../interfaces/INativeFileMetadata.md), `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[infoFile](../interfaces/INativeFileAccess.md#infofile)

#### Defined in

[cordova/src/CordovaFileAccess.ts:105](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L105)

___

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize the native features and create a folder structure

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[init](../interfaces/INativeFileAccess.md#init)

#### Defined in

[cordova/src/CordovaFileAccess.ts:19](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L19)

___

### openFile

▸ **openFile**(`path`, `storage?`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Open a file with the standard application specified by the operating system

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `storage` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | `NativeFileStorage.App` |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[openFile](../interfaces/INativeFileAccess.md#openfile)

#### Defined in

[cordova/src/CordovaFileAccess.ts:320](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L320)

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

[cordova/src/CordovaFileAccess.ts:340](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L340)

___

### readFileAsBinary

▸ **readFileAsBinary**(`path`, `storage?`): `Promise`<`Result`<`Uint8Array`, `ApplicationError`\>\>

Read the data of the specified file as a an array

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `storage` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | `NativeFileStorage.App` |

#### Returns

`Promise`<`Result`<`Uint8Array`, `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[readFileAsBinary](../interfaces/INativeFileAccess.md#readfileasbinary)

#### Defined in

[cordova/src/CordovaFileAccess.ts:141](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L141)

___

### readFileAsText

▸ **readFileAsText**(`path`, `storage?`): `Promise`<`Result`<`string`, `ApplicationError`\>\>

Read the data of the specified file as a string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `storage` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | `NativeFileStorage.App` |

#### Returns

`Promise`<`Result`<`string`, `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[readFileAsText](../interfaces/INativeFileAccess.md#readfileastext)

#### Defined in

[cordova/src/CordovaFileAccess.ts:124](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L124)

___

### removeDirectoryEntry

▸ `Private` **removeDirectoryEntry**(`directoryEntry`, `recursive`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `directoryEntry` | `DirectoryEntry` |
| `recursive` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

[cordova/src/CordovaFileAccess.ts:65](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L65)

___

### removeFileEntry

▸ `Private` **removeFileEntry**(`fileEntry`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileEntry` | `FileEntry` |

#### Returns

`Promise`<`void`\>

#### Defined in

[cordova/src/CordovaFileAccess.ts:61](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L61)

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

[cordova/src/CordovaFileAccess.ts:73](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L73)

___

### resolveNativePath

▸ `Private` **resolveNativePath**(`uri`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[cordova/src/CordovaFileAccess.ts:69](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L69)

___

### select

▸ **select**(): `Promise`<`Result`<[`INativeFile`](../interfaces/INativeFile.md), `ApplicationError`\>\>

Open the file selection dialog of the operating system and receive the selected file

#### Returns

`Promise`<`Result`<[`INativeFile`](../interfaces/INativeFile.md), `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[select](../interfaces/INativeFileAccess.md#select)

#### Defined in

[cordova/src/CordovaFileAccess.ts:280](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L280)

___

### writeFile

▸ **writeFile**(`path`, `data`, `storage?`, `append?`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Write data to a file

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `data` | `string` \| `Uint8Array` | `undefined` |
| `storage` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | `NativeFileStorage.App` |
| `append` | `boolean` | `false` |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[writeFile](../interfaces/INativeFileAccess.md#writefile)

#### Defined in

[cordova/src/CordovaFileAccess.ts:158](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaFileAccess.ts#L158)
