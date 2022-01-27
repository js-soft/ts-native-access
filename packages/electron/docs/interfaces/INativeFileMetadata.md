[@js-soft/native-electron](../README.md) / [Exports](../modules.md) / INativeFileMetadata

# Interface: INativeFileMetadata

Meta information about a file

## Table of contents

### Properties

- [mimeType](INativeFileMetadata.md#mimetype)
- [modifiedAt](INativeFileMetadata.md#modifiedat)
- [name](INativeFileMetadata.md#name)
- [path](INativeFileMetadata.md#path)
- [size](INativeFileMetadata.md#size)
- [storage](INativeFileMetadata.md#storage)

## Properties

### mimeType

• `Optional` **mimeType**: `string`

Mime type of the file used to determine which applications can be used to open the file

#### Defined in

abstractions/dist/INativeFileAccess.d.ts:21

___

### modifiedAt

• `Optional` **modifiedAt**: `string`

Modification date

#### Defined in

abstractions/dist/INativeFileAccess.d.ts:29

___

### name

• **name**: `string`

Name of the file

#### Defined in

abstractions/dist/INativeFileAccess.d.ts:9

___

### path

• **path**: `string`

Path to the file relative to the [storage](INativeFileMetadata.md#storage)

#### Defined in

abstractions/dist/INativeFileAccess.d.ts:13

___

### size

• `Optional` **size**: `number`

Size of the file

#### Defined in

abstractions/dist/INativeFileAccess.d.ts:25

___

### storage

• `Optional` **storage**: [`NativeFileStorage`](../enums/NativeFileStorage.md)

storage location of the file

#### Defined in

abstractions/dist/INativeFileAccess.d.ts:17
