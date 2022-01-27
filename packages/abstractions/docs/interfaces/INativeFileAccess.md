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

[src/INativeFileAccess.ts:158](https://github.com/js-soft/ts-native-access/blob/b144064/packages/abstractions/src/INativeFileAccess.ts#L158)

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

[src/INativeFileAccess.ts:164](https://github.com/js-soft/ts-native-access/blob/b144064/packages/abstractions/src/INativeFileAccess.ts#L164)

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

[src/INativeFileAccess.ts:140](https://github.com/js-soft/ts-native-access/blob/b144064/packages/abstractions/src/INativeFileAccess.ts#L140)

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

[src/INativeFileAccess.ts:170](https://github.com/js-soft/ts-native-access/blob/b144064/packages/abstractions/src/INativeFileAccess.ts#L170)

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

[src/INativeFileAccess.ts:146](https://github.com/js-soft/ts-native-access/blob/b144064/packages/abstractions/src/INativeFileAccess.ts#L146)

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

[src/INativeFileAccess.ts:152](https://github.com/js-soft/ts-native-access/blob/b144064/packages/abstractions/src/INativeFileAccess.ts#L152)

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

[src/INativeFileAccess.ts:114](https://github.com/js-soft/ts-native-access/blob/b144064/packages/abstractions/src/INativeFileAccess.ts#L114)

___

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize the native features and create a folder structure

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:190](https://github.com/js-soft/ts-native-access/blob/b144064/packages/abstractions/src/INativeFileAccess.ts#L190)

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

[src/INativeFileAccess.ts:180](https://github.com/js-soft/ts-native-access/blob/b144064/packages/abstractions/src/INativeFileAccess.ts#L180)

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

[src/INativeFileAccess.ts:186](https://github.com/js-soft/ts-native-access/blob/b144064/packages/abstractions/src/INativeFileAccess.ts#L186)

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

[src/INativeFileAccess.ts:126](https://github.com/js-soft/ts-native-access/blob/b144064/packages/abstractions/src/INativeFileAccess.ts#L126)

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

[src/INativeFileAccess.ts:120](https://github.com/js-soft/ts-native-access/blob/b144064/packages/abstractions/src/INativeFileAccess.ts#L120)

___

### select

▸ **select**(): `Promise`<`Result`<[`INativeFile`](INativeFile.md), `ApplicationError`\>\>

Open the file selection dialog of the operating system and receive the selected file

#### Returns

`Promise`<`Result`<[`INativeFile`](INativeFile.md), `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:174](https://github.com/js-soft/ts-native-access/blob/b144064/packages/abstractions/src/INativeFileAccess.ts#L174)

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

[src/INativeFileAccess.ts:134](https://github.com/js-soft/ts-native-access/blob/b144064/packages/abstractions/src/INativeFileAccess.ts#L134)
