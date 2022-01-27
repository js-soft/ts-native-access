[@js-soft/native-electron](../README.md) / [Exports](../modules.md) / CommonLoggerFactory

# Class: CommonLoggerFactory

## Implements

-   [`INativeLoggerFactory`](../interfaces/INativeLoggerFactory.md)

## Table of contents

### Constructors

-   [constructor](CommonLoggerFactory.md#constructor)

### Properties

-   [\_initWeb](CommonLoggerFactory.md#_initweb)
-   [fileAccess](CommonLoggerFactory.md#fileaccess)
-   [formatMessages](CommonLoggerFactory.md#formatmessages)

### Methods

-   [getLogger](CommonLoggerFactory.md#getlogger)
-   [init](CommonLoggerFactory.md#init)

## Constructors

### constructor

• **new CommonLoggerFactory**(`fileAccess`)

#### Parameters

| Name         | Type                                                      |
| :----------- | :-------------------------------------------------------- |
| `fileAccess` | [`INativeFileAccess`](../interfaces/INativeFileAccess.md) |

#### Defined in

common/dist/CommonLoggerFactory.d.ts:6

## Properties

### \_initWeb

• `Private` **\_initWeb**: `any`

#### Defined in

common/dist/CommonLoggerFactory.d.ts:9

---

### fileAccess

• `Private` `Readonly` **fileAccess**: `any`

#### Defined in

common/dist/CommonLoggerFactory.d.ts:5

---

### formatMessages

• `Private` **formatMessages**: `any`

#### Defined in

common/dist/CommonLoggerFactory.d.ts:8

## Methods

### getLogger

▸ **getLogger**(`oName`): `ILogger`

#### Parameters

| Name    | Type                   |
| :------ | :--------------------- |
| `oName` | `string` \| `Function` |

#### Returns

`ILogger`

#### Implementation of

[INativeLoggerFactory](../interfaces/INativeLoggerFactory.md).[getLogger](../interfaces/INativeLoggerFactory.md#getlogger)

#### Defined in

common/dist/CommonLoggerFactory.d.ts:10

---

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize logger

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeLoggerFactory](../interfaces/INativeLoggerFactory.md).[init](../interfaces/INativeLoggerFactory.md#init)

#### Defined in

common/dist/CommonLoggerFactory.d.ts:7
