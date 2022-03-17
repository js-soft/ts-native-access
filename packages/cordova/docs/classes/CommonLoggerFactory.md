[@js-soft/native-cordova](../README.md) / [Exports](../modules.md) / CommonLoggerFactory

# Class: CommonLoggerFactory

## Implements

- [`INativeLoggerFactory`](../interfaces/INativeLoggerFactory.md)

## Table of contents

### Constructors

- [constructor](CommonLoggerFactory.md#constructor)

### Properties

- [addLog](CommonLoggerFactory.md#addlog)
- [busy](CommonLoggerFactory.md#busy)
- [fileAccess](CommonLoggerFactory.md#fileaccess)
- [formatMessages](CommonLoggerFactory.md#formatmessages)
- [queue](CommonLoggerFactory.md#queue)
- [saveQueue](CommonLoggerFactory.md#savequeue)

### Methods

- [getLogger](CommonLoggerFactory.md#getlogger)
- [init](CommonLoggerFactory.md#init)

## Constructors

### constructor

• **new CommonLoggerFactory**(`fileAccess`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileAccess` | [`INativeFileAccess`](../interfaces/INativeFileAccess.md) |

#### Defined in

common/dist/CommonLoggerFactory.d.ts:6

## Properties

### addLog

• `Private` **addLog**: `any`

Add the log to a queue for saving to filesystem

#### Defined in

common/dist/CommonLoggerFactory.d.ts:18

___

### busy

• `Private` **busy**: `any`

#### Defined in

common/dist/CommonLoggerFactory.d.ts:10

___

### fileAccess

• `Private` `Readonly` **fileAccess**: `any`

#### Defined in

common/dist/CommonLoggerFactory.d.ts:5

___

### formatMessages

• `Private` **formatMessages**: `any`

#### Defined in

common/dist/CommonLoggerFactory.d.ts:8

___

### queue

• `Private` `Readonly` **queue**: `any`

#### Defined in

common/dist/CommonLoggerFactory.d.ts:9

___

### saveQueue

• `Private` **saveQueue**: `any`

Save the queue of logs to the filesystem

#### Defined in

common/dist/CommonLoggerFactory.d.ts:14

## Methods

### getLogger

▸ **getLogger**(`oName`): `ILogger`

#### Parameters

| Name | Type |
| :------ | :------ |
| `oName` | `string` \| `Function` |

#### Returns

`ILogger`

#### Implementation of

[INativeLoggerFactory](../interfaces/INativeLoggerFactory.md).[getLogger](../interfaces/INativeLoggerFactory.md#getlogger)

#### Defined in

common/dist/CommonLoggerFactory.d.ts:19

___

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize logger

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeLoggerFactory](../interfaces/INativeLoggerFactory.md).[init](../interfaces/INativeLoggerFactory.md#init)

#### Defined in

common/dist/CommonLoggerFactory.d.ts:7
