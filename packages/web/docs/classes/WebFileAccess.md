[@js-soft/native-web](../README.md) / [Exports](../modules.md) / WebFileAccess

# Class: WebFileAccess

## Implements

- [`INativeFileAccess`](../interfaces/INativeFileAccess.md)

## Table of contents

### Constructors

- [constructor](WebFileAccess.md#constructor)

### Properties

- [localStorage](WebFileAccess.md#localstorage)
- [sessionStorage](WebFileAccess.md#sessionstorage)

### Methods

- [createDirectory](WebFileAccess.md#createdirectory)
- [deleteDirectory](WebFileAccess.md#deletedirectory)
- [deleteFile](WebFileAccess.md#deletefile)
- [existsDirectory](WebFileAccess.md#existsdirectory)
- [existsFile](WebFileAccess.md#existsfile)
- [handleBrowserFile](WebFileAccess.md#handlebrowserfile)
- [infoDirectory](WebFileAccess.md#infodirectory)
- [infoFile](WebFileAccess.md#infofile)
- [init](WebFileAccess.md#init)
- [normalizePath](WebFileAccess.md#normalizepath)
- [openAndWaitForUserFileSelection](WebFileAccess.md#openandwaitforuserfileselection)
- [openFile](WebFileAccess.md#openfile)
- [openFileContent](WebFileAccess.md#openfilecontent)
- [readBrowserFile](WebFileAccess.md#readbrowserfile)
- [readFileAsBinary](WebFileAccess.md#readfileasbinary)
- [readFileAsText](WebFileAccess.md#readfileastext)
- [select](WebFileAccess.md#select)
- [writeFile](WebFileAccess.md#writefile)

## Constructors

### constructor

• **new WebFileAccess**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`INativeConfigAccess`](../interfaces/INativeConfigAccess.md) |

#### Defined in

[web/src/WebFileAccess.ts:27](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebFileAccess.ts#L27)

## Properties

### localStorage

• `Private` **localStorage**: `LocalForage`

#### Defined in

[web/src/WebFileAccess.ts:29](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebFileAccess.ts#L29)

___

### sessionStorage

• `Private` **sessionStorage**: `LocalForage`

#### Defined in

[web/src/WebFileAccess.ts:30](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebFileAccess.ts#L30)

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

[web/src/WebFileAccess.ts:236](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebFileAccess.ts#L236)

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

[web/src/WebFileAccess.ts:273](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebFileAccess.ts#L273)

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

[web/src/WebFileAccess.ts:183](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebFileAccess.ts#L183)

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

[web/src/WebFileAccess.ts:312](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebFileAccess.ts#L312)

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

[web/src/WebFileAccess.ts:208](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebFileAccess.ts#L208)

___

### handleBrowserFile

▸ `Private` **handleBrowserFile**(`fileEntry`): `Promise`<[`INativeFile`](../interfaces/INativeFile.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileEntry` | `File` |

#### Returns

`Promise`<[`INativeFile`](../interfaces/INativeFile.md)\>

#### Defined in

[web/src/WebFileAccess.ts:368](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebFileAccess.ts#L368)

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

[web/src/WebFileAccess.ts:220](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebFileAccess.ts#L220)

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

[web/src/WebFileAccess.ts:64](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebFileAccess.ts#L64)

___

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize the native features and create a folder structure

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[init](../interfaces/INativeFileAccess.md#init)

#### Defined in

[web/src/WebFileAccess.ts:32](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebFileAccess.ts#L32)

___

### normalizePath

▸ `Private` **normalizePath**(`path`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

#### Defined in

[web/src/WebFileAccess.ts:53](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebFileAccess.ts#L53)

___

### openAndWaitForUserFileSelection

▸ `Private` **openAndWaitForUserFileSelection**(): `Promise`<`File`\>

#### Returns

`Promise`<`File`\>

#### Defined in

[web/src/WebFileAccess.ts:324](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebFileAccess.ts#L324)

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

[web/src/WebFileAccess.ts:411](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebFileAccess.ts#L411)

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

[web/src/WebFileAccess.ts:428](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebFileAccess.ts#L428)

___

### readBrowserFile

▸ `Private` **readBrowserFile**(`file`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `File` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[web/src/WebFileAccess.ts:359](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebFileAccess.ts#L359)

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

[web/src/WebFileAccess.ts:97](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebFileAccess.ts#L97)

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

[web/src/WebFileAccess.ts:81](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebFileAccess.ts#L81)

___

### select

▸ **select**(): `Promise`<`Result`<[`INativeFile`](../interfaces/INativeFile.md), `ApplicationError`\>\>

Web's select() can only be called from a user-interaction-event e.g. on a
button click listener.

#### Returns

`Promise`<`Result`<[`INativeFile`](../interfaces/INativeFile.md), `ApplicationError`\>\>

#### Implementation of

[INativeFileAccess](../interfaces/INativeFileAccess.md).[select](../interfaces/INativeFileAccess.md#select)

#### Defined in

[web/src/WebFileAccess.ts:396](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebFileAccess.ts#L396)

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

[web/src/WebFileAccess.ts:114](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebFileAccess.ts#L114)
