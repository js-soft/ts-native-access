[@js-soft/native-cordova](../README.md) / [Exports](../modules.md) / INativeDatabaseFactory

# Interface: INativeDatabaseFactory

Database factory which creates a lokijs database with a persistance adapter [INativeDatabaseFilesystemAdapter](INativeDatabaseFilesystemAdapter.md) for saving and loading the database on/from the filesystem.

## Hierarchy

-   `ILokiJsDatabaseFactory`

    ↳ **`INativeDatabaseFactory`**

## Implemented by

-   [`CommonDatabaseFactory`](../classes/CommonDatabaseFactory.md)

## Table of contents

### Methods

-   [create](INativeDatabaseFactory.md#create)

## Methods

### create

▸ **create**(`name`, `options?`): `Loki`

Create or load a database.

#### Parameters

| Name       | Type                                                                                                             | Description          |
| :--------- | :--------------------------------------------------------------------------------------------------------------- | :------------------- |
| `name`     | `string`                                                                                                         | name of the database |
| `options?` | `Partial`<`LokiConstructorOptions`\> & `Partial`<`LokiConfigOptions`\> & `Partial`<`ThrottledSaveDrainOptions`\> |                      |

#### Returns

`Loki`

#### Overrides

ILokiJsDatabaseFactory.create

#### Defined in

abstractions/dist/INativeDatabaseFactory.d.ts:12
