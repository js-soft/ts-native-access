[@js-soft/native-cordova](../README.md) / [Exports](../modules.md) / CommonDatabaseFactory

# Class: CommonDatabaseFactory

## Implements

-   `ILokiJsDatabaseFactory`

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

common/dist/CommonDatabaseFactory.d.ts:8

## Properties

### fileAccess

• `Private` `Readonly` **fileAccess**: `any`

#### Defined in

common/dist/CommonDatabaseFactory.d.ts:7

---

### logger

• `Private` `Readonly` **logger**: `any`

#### Defined in

common/dist/CommonDatabaseFactory.d.ts:6

## Methods

### create

▸ **create**(`name`, `options?`): `Loki`

#### Parameters

| Name       | Type                                                                                                             |
| :--------- | :--------------------------------------------------------------------------------------------------------------- |
| `name`     | `string`                                                                                                         |
| `options?` | `Partial`<`LokiConstructorOptions`\> & `Partial`<`LokiConfigOptions`\> & `Partial`<`ThrottledSaveDrainOptions`\> |

#### Returns

`Loki`

#### Implementation of

ILokiJsDatabaseFactory.create

#### Defined in

common/dist/CommonDatabaseFactory.d.ts:9
