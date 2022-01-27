[@js-soft/native-common](../README.md) / [Exports](../modules.md) / CommonDatabaseFactory

# Class: CommonDatabaseFactory

## Implements

-   `ILokiJsDatabaseFactory`

## Table of contents

### Constructors

-   [constructor](CommonDatabaseFactory.md#constructor)

### Methods

-   [create](CommonDatabaseFactory.md#create)

## Constructors

### constructor

• **new CommonDatabaseFactory**(`logger`, `fileAccess`)

#### Parameters

| Name         | Type                |
| :----------- | :------------------ |
| `logger`     | `ILogger`           |
| `fileAccess` | `INativeFileAccess` |

#### Defined in

[CommonDatabaseFactory.ts:9](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/common/src/CommonDatabaseFactory.ts#L9)

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

[CommonDatabaseFactory.ts:11](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/common/src/CommonDatabaseFactory.ts#L11)
