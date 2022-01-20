[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / INativeFileAccess

# Interface: INativeFileAccess

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `storage?` | [`NativeFileStorage`](../enums/NativeFileStorage.md) |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:53](https://github.com/js-soft/ts-native-access/blob/93dbc36/packages/abstractions/src/INativeFileAccess.ts#L53)

___

### deleteDirectory

▸ **deleteDirectory**(`path`, `storage?`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `storage?` | [`NativeFileStorage`](../enums/NativeFileStorage.md) |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:54](https://github.com/js-soft/ts-native-access/blob/93dbc36/packages/abstractions/src/INativeFileAccess.ts#L54)

___

### deleteFile

▸ **deleteFile**(`path`, `storage?`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `storage?` | [`NativeFileStorage`](../enums/NativeFileStorage.md) |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:50](https://github.com/js-soft/ts-native-access/blob/93dbc36/packages/abstractions/src/INativeFileAccess.ts#L50)

___

### existsDirectory

▸ **existsDirectory**(`path`, `storage?`): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `storage?` | [`NativeFileStorage`](../enums/NativeFileStorage.md) |

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:55](https://github.com/js-soft/ts-native-access/blob/93dbc36/packages/abstractions/src/INativeFileAccess.ts#L55)

___

### existsFile

▸ **existsFile**(`path`, `storage?`): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `storage?` | [`NativeFileStorage`](../enums/NativeFileStorage.md) |

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:51](https://github.com/js-soft/ts-native-access/blob/93dbc36/packages/abstractions/src/INativeFileAccess.ts#L51)

___

### infoDirectory

▸ **infoDirectory**(`path`, `storage?`): `Promise`<`Result`<[`INativeDirectory`](INativeDirectory.md), `ApplicationError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `storage?` | [`NativeFileStorage`](../enums/NativeFileStorage.md) |

#### Returns

`Promise`<`Result`<[`INativeDirectory`](INativeDirectory.md), `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:52](https://github.com/js-soft/ts-native-access/blob/93dbc36/packages/abstractions/src/INativeFileAccess.ts#L52)

___

### infoFile

▸ **infoFile**(`path`, `storage?`): `Promise`<`Result`<[`INativeFileMetadata`](INativeFileMetadata.md), `ApplicationError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `storage?` | [`NativeFileStorage`](../enums/NativeFileStorage.md) |

#### Returns

`Promise`<`Result`<[`INativeFileMetadata`](INativeFileMetadata.md), `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:46](https://github.com/js-soft/ts-native-access/blob/93dbc36/packages/abstractions/src/INativeFileAccess.ts#L46)

___

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:59](https://github.com/js-soft/ts-native-access/blob/93dbc36/packages/abstractions/src/INativeFileAccess.ts#L59)

___

### openFile

▸ **openFile**(`path`, `storage?`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `storage?` | [`NativeFileStorage`](../enums/NativeFileStorage.md) |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:57](https://github.com/js-soft/ts-native-access/blob/93dbc36/packages/abstractions/src/INativeFileAccess.ts#L57)

___

### openFileContent

▸ **openFileContent**(`content`, `metadata`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `Uint8Array` |
| `metadata` | [`INativeFileMetadata`](INativeFileMetadata.md) |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:58](https://github.com/js-soft/ts-native-access/blob/93dbc36/packages/abstractions/src/INativeFileAccess.ts#L58)

___

### readFileAsBinary

▸ **readFileAsBinary**(`path`, `storage?`): `Promise`<`Result`<`Uint8Array`, `ApplicationError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `storage?` | [`NativeFileStorage`](../enums/NativeFileStorage.md) |

#### Returns

`Promise`<`Result`<`Uint8Array`, `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:48](https://github.com/js-soft/ts-native-access/blob/93dbc36/packages/abstractions/src/INativeFileAccess.ts#L48)

___

### readFileAsText

▸ **readFileAsText**(`path`, `storage?`): `Promise`<`Result`<`string`, `ApplicationError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `storage?` | [`NativeFileStorage`](../enums/NativeFileStorage.md) |

#### Returns

`Promise`<`Result`<`string`, `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:47](https://github.com/js-soft/ts-native-access/blob/93dbc36/packages/abstractions/src/INativeFileAccess.ts#L47)

___

### select

▸ **select**(): `Promise`<`Result`<[`INativeFile`](INativeFile.md), `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<[`INativeFile`](INativeFile.md), `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:56](https://github.com/js-soft/ts-native-access/blob/93dbc36/packages/abstractions/src/INativeFileAccess.ts#L56)

___

### writeFile

▸ **writeFile**(`path`, `data`, `storage?`, `append?`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `data` | `string` \| `Uint8Array` |
| `storage?` | [`NativeFileStorage`](../enums/NativeFileStorage.md) |
| `append?` | `boolean` |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeFileAccess.ts:49](https://github.com/js-soft/ts-native-access/blob/93dbc36/packages/abstractions/src/INativeFileAccess.ts#L49)
