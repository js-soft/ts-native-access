[@js-soft/native-web](../README.md) / [Exports](../modules.md) / CommonDatabaseFactory

# Class: CommonDatabaseFactory

## Implements

-   [`INativeDatabaseFactory`](../interfaces/INativeDatabaseFactory.md)

## Table of contents

### Constructors

-   [constructor](CommonDatabaseFactory.md#constructor)

### Properties

-   [fileAccess](CommonDatabaseFactory.md#fileaccess)
-   [logger](CommonDatabaseFactory.md#logger)

### Methods

-   [create](CommonDatabaseFactory.md#create)

## Constructors

### constructor

• **new CommonDatabaseFactory**(`logger`, `fileAccess`)

#### Parameters

| Name         | Type                                                      |
| :----------- | :-------------------------------------------------------- |
| `logger`     | `ILogger`                                                 |
| `fileAccess` | [`INativeFileAccess`](../interfaces/INativeFileAccess.md) |

#### Defined in

common/dist/CommonDatabaseFactory.d.ts:7

## Properties

### fileAccess

• `Private` `Readonly` **fileAccess**: `any`

#### Defined in

common/dist/CommonDatabaseFactory.d.ts:6

---

### logger

• `Private` `Readonly` **logger**: `any`

#### Defined in

common/dist/CommonDatabaseFactory.d.ts:5

## Methods

### create

▸ **create**(`name`, `options?`): `Loki`

Create or load a database.

#### Parameters

| Name       | Type                                                                                                             |
| :--------- | :--------------------------------------------------------------------------------------------------------------- |
| `name`     | `string`                                                                                                         |
| `options?` | `Partial`<`LokiConstructorOptions`\> & `Partial`<`LokiConfigOptions`\> & `Partial`<`ThrottledSaveDrainOptions`\> |

#### Returns

`Loki`

#### Implementation of

[INativeDatabaseFactory](../interfaces/INativeDatabaseFactory.md).[create](../interfaces/INativeDatabaseFactory.md#create)

#### Defined in

common/dist/CommonDatabaseFactory.d.ts:8
