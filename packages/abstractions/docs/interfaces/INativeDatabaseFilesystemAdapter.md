[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / INativeDatabaseFilesystemAdapter

# Interface: INativeDatabaseFilesystemAdapter

Persistance adapter for a lokijs database.

## Table of contents

### Methods

- [exportDatabase](INativeDatabaseFilesystemAdapter.md#exportdatabase)
- [loadDatabase](INativeDatabaseFilesystemAdapter.md#loaddatabase)

## Methods

### exportDatabase

▸ **exportDatabase**(`dbname`, `dbref`, `callback`): `void`

Store the databse on the filesystem.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dbname` | `string` | name of the database |
| `dbref` | `Loki` | reference to database object |
| `callback` | `Function` | callback for returning on success or failure |

#### Returns

`void`

#### Defined in

[src/INativeDatabaseFactory.ts:31](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/abstractions/src/INativeDatabaseFactory.ts#L31)

___

### loadDatabase

▸ **loadDatabase**(`dbname`, `callback`): `void`

Load the database from the filesystem.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dbname` | `string` | name of the database |
| `callback` | `Function` | callback for returning the database content |

#### Returns

`void`

#### Defined in

[src/INativeDatabaseFactory.ts:24](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/abstractions/src/INativeDatabaseFactory.ts#L24)
