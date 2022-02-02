[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / INativeFileMetadata

# Interface: INativeFileMetadata

Meta information about a file

## Table of contents

### Properties

-   [mimeType](INativeFileMetadata.md#mimetype)
-   [modifiedAt](INativeFileMetadata.md#modifiedat)
-   [name](INativeFileMetadata.md#name)
-   [path](INativeFileMetadata.md#path)
-   [size](INativeFileMetadata.md#size)
-   [storage](INativeFileMetadata.md#storage)

## Properties

### mimeType

• `Optional` **mimeType**: `string`

Mime type of the file used to determine which applications can be used to open the file

#### Defined in

[src/INativeFileAccess.ts:22](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/abstractions/src/INativeFileAccess.ts#L22)

---

### modifiedAt

• `Optional` **modifiedAt**: `string`

Modification date

#### Defined in

[src/INativeFileAccess.ts:30](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/abstractions/src/INativeFileAccess.ts#L30)

---

### name

• **name**: `string`

Name of the file

#### Defined in

[src/INativeFileAccess.ts:10](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/abstractions/src/INativeFileAccess.ts#L10)

---

### path

• **path**: `string`

Path to the file relative to the [storage](INativeFileMetadata.md#storage)

#### Defined in

[src/INativeFileAccess.ts:14](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/abstractions/src/INativeFileAccess.ts#L14)

---

### size

• `Optional` **size**: `number`

Size of the file

#### Defined in

[src/INativeFileAccess.ts:26](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/abstractions/src/INativeFileAccess.ts#L26)

---

### storage

• `Optional` **storage**: [`NativeFileStorage`](../enums/NativeFileStorage.md)

storage location of the file

#### Defined in

[src/INativeFileAccess.ts:18](https://github.com/js-soft/ts-native-access/blob/68cf98a/packages/abstractions/src/INativeFileAccess.ts#L18)
