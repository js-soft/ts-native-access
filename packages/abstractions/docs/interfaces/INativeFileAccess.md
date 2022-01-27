[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / INativeFileAccess

# Interface: INativeFileAccess

Access the native filesystem (read/write)

## Table of contents

### Methods

- [createDirectory](INativeFileAccess.md#createdirectory)
- [deleteDirectory](INativeFileAccess.md#deletedirectory)
- [deleteFile](INativeFileAccess.md#deletefile)
- [existsDirectory](INativeFileAccess.md#existsdirectory)
- [existsFile](INativeFileAccess.md#existsfile)
- [infoDirectory](INativeFileAccess.md#infodirectory)
- [infoFile](INativeFileAccess.md#infofile)
- [init](INativeFileAccess.md#init)
- [openFile](INativeFileAccess.md#openfile)
- [openFileContent](INativeFileAccess.md#openfilecontent)
- [readFileAsBinary](INativeFileAccess.md#readfileasbinary)
- [readFileAsText](INativeFileAccess.md#readfileastext)
- [select](INativeFileAccess.md#select)
- [writeFile](INativeFileAccess.md#writefile)

## Methods

### createDirectory

▸ **createDirectory**(`path`, `storage?`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Create a directory

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | path of the directory relative to the [storage](INativeFileMetadata.md#storage) |
| `storage?` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | storage location of the directory |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:128](https://github.com/js-soft/ts-native-access/blob/7416af4/packages/abstractions/src/INativeFileAccess.ts#L128)

___

### deleteDirectory

▸ **deleteDirectory**(`path`, `storage?`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Delete a directory

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | path of the directory relative to the [storage](INativeFileMetadata.md#storage) |
| `storage?` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | storage location of the directory |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:134](https://github.com/js-soft/ts-native-access/blob/7416af4/packages/abstractions/src/INativeFileAccess.ts#L134)

___

### deleteFile

▸ **deleteFile**(`path`, `storage?`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Delete specified file

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | path to the file relative to the [storage](INativeFileMetadata.md#storage) |
| `storage?` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | storage location of the file |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:110](https://github.com/js-soft/ts-native-access/blob/7416af4/packages/abstractions/src/INativeFileAccess.ts#L110)

___

### existsDirectory

▸ **existsDirectory**(`path`, `storage?`): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

Test if a directory exists

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | path of the directory relative to the [storage](INativeFileMetadata.md#storage) |
| `storage?` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | storage location of the directory |

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:140](https://github.com/js-soft/ts-native-access/blob/7416af4/packages/abstractions/src/INativeFileAccess.ts#L140)

___

### existsFile

▸ **existsFile**(`path`, `storage?`): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

Test if a file exists

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | path to the file relative to the [storage](INativeFileMetadata.md#storage) |
| `storage?` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | storage location of the file |

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:116](https://github.com/js-soft/ts-native-access/blob/7416af4/packages/abstractions/src/INativeFileAccess.ts#L116)

___

### infoDirectory

▸ **infoDirectory**(`path`, `storage?`): `Promise`<`Result`<[`INativeDirectory`](INativeDirectory.md), `ApplicationError`\>\>

Retrieve information about a specified directory

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | path of the directory relative to the [storage](INativeFileMetadata.md#storage) |
| `storage?` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | storage location of the directory |

#### Returns

`Promise`<`Result`<[`INativeDirectory`](INativeDirectory.md), `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:122](https://github.com/js-soft/ts-native-access/blob/7416af4/packages/abstractions/src/INativeFileAccess.ts#L122)

___

### infoFile

▸ **infoFile**(`path`, `storage?`): `Promise`<`Result`<[`INativeFileMetadata`](INativeFileMetadata.md), `ApplicationError`\>\>

Retrieve meta information about the specified file

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | path to the file relative to the [storage](INativeFileMetadata.md#storage) |
| `storage?` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | storage location of the file |

#### Returns

`Promise`<`Result`<[`INativeFileMetadata`](INativeFileMetadata.md), `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:84](https://github.com/js-soft/ts-native-access/blob/7416af4/packages/abstractions/src/INativeFileAccess.ts#L84)

___

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize the native features and create a folder structure

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:160](https://github.com/js-soft/ts-native-access/blob/7416af4/packages/abstractions/src/INativeFileAccess.ts#L160)

___

### openFile

▸ **openFile**(`path`, `storage?`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Open a file with the standard application specified by the operating system

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | path to the file relative to the [storage](INativeFileMetadata.md#storage) |
| `storage?` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | storage location of the file |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:150](https://github.com/js-soft/ts-native-access/blob/7416af4/packages/abstractions/src/INativeFileAccess.ts#L150)

___

### openFileContent

▸ **openFileContent**(`content`, `metadata`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Create and open a file with the standard application specified by the operating system

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `Uint8Array` | content of the file |
| `metadata` | [`INativeFileMetadata`](INativeFileMetadata.md) | metadata of the file |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:156](https://github.com/js-soft/ts-native-access/blob/7416af4/packages/abstractions/src/INativeFileAccess.ts#L156)

___

### readFileAsBinary

▸ **readFileAsBinary**(`path`, `storage?`): `Promise`<`Result`<`Uint8Array`, `ApplicationError`\>\>

Read the data of the specified file as a an array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | path to the file relative to the [storage](INativeFileMetadata.md#storage) |
| `storage?` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | storage location of the file |

#### Returns

`Promise`<`Result`<`Uint8Array`, `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:96](https://github.com/js-soft/ts-native-access/blob/7416af4/packages/abstractions/src/INativeFileAccess.ts#L96)

___

### readFileAsText

▸ **readFileAsText**(`path`, `storage?`): `Promise`<`Result`<`string`, `ApplicationError`\>\>

Read the data of the specified file as a string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | path to the file relative to the [storage](INativeFileMetadata.md#storage) |
| `storage?` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | storage location of the file |

#### Returns

`Promise`<`Result`<`string`, `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:90](https://github.com/js-soft/ts-native-access/blob/7416af4/packages/abstractions/src/INativeFileAccess.ts#L90)

___

### select

▸ **select**(): `Promise`<`Result`<[`INativeFile`](INativeFile.md), `ApplicationError`\>\>

Open the file selection dialog of the operating system and receive the selected file

#### Returns

`Promise`<`Result`<[`INativeFile`](INativeFile.md), `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:144](https://github.com/js-soft/ts-native-access/blob/7416af4/packages/abstractions/src/INativeFileAccess.ts#L144)

___

### writeFile

▸ **writeFile**(`path`, `data`, `storage?`, `append?`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Write data to a file

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | path to the file relative to the [storage](INativeFileMetadata.md#storage) |
| `data` | `string` \| `Uint8Array` | data to write to the file |
| `storage?` | [`NativeFileStorage`](../enums/NativeFileStorage.md) | storage location of the file |
| `append?` | `boolean` | overwrite file or append data on the end of the file |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:104](https://github.com/js-soft/ts-native-access/blob/7416af4/packages/abstractions/src/INativeFileAccess.ts#L104)
