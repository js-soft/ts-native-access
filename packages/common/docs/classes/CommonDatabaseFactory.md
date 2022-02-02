[@js-soft/native-common](../README.md) / [Exports](../modules.md) / CommonDatabaseFactory

# Class: CommonDatabaseFactory

## Implements

- `INativeDatabaseFactory`

## Table of contents

### Constructors

- [constructor](CommonDatabaseFactory.md#constructor)

### Methods

- [create](CommonDatabaseFactory.md#create)

## Constructors

### constructor

• **new CommonDatabaseFactory**(`logger`, `fileAccess`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger` | `ILogger` |
| `fileAccess` | `INativeFileAccess` |

#### Defined in

[CommonDatabaseFactory.ts:8](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/common/src/CommonDatabaseFactory.ts#L8)

## Methods

### create

▸ **create**(`name`, `options?`): `Loki`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options?` | `Partial`<`LokiConstructorOptions`\> & `Partial`<`LokiConfigOptions`\> & `Partial`<`ThrottledSaveDrainOptions`\> |

#### Returns

`Loki`

#### Implementation of

INativeDatabaseFactory.create

#### Defined in

[CommonDatabaseFactory.ts:10](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/common/src/CommonDatabaseFactory.ts#L10)
