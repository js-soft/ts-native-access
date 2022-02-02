[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / INativeDatabaseFactory

# Interface: INativeDatabaseFactory

Database factory which creates a lokijs database with a persistance adapter [INativeDatabaseFilesystemAdapter](INativeDatabaseFilesystemAdapter.md) for saving and loading the database on/from the filesystem.

## Hierarchy

- `ILokiJsDatabaseFactory`

  ↳ **`INativeDatabaseFactory`**

## Table of contents

### Methods

- [create](INativeDatabaseFactory.md#create)

## Methods

### create

▸ **create**(`name`, `options?`): `Loki`

Create or load a database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | name of the database |
| `options?` | `Partial`<`LokiConstructorOptions`\> & `Partial`<`LokiConfigOptions`\> & `Partial`<`ThrottledSaveDrainOptions`\> |  |

#### Returns

`Loki`

#### Overrides

ILokiJsDatabaseFactory.create

#### Defined in

[src/INativeDatabaseFactory.ts:12](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/abstractions/src/INativeDatabaseFactory.ts#L12)
