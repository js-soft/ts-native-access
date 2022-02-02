[@js-soft/native-common](../README.md) / [Exports](../modules.md) / CommonLoggerFactory

# Class: CommonLoggerFactory

## Implements

- `INativeLoggerFactory`

## Table of contents

### Constructors

- [constructor](CommonLoggerFactory.md#constructor)

### Properties

- [busy](CommonLoggerFactory.md#busy)
- [queue](CommonLoggerFactory.md#queue)

### Methods

- [addLog](CommonLoggerFactory.md#addlog)
- [formatMessages](CommonLoggerFactory.md#formatmessages)
- [getLogger](CommonLoggerFactory.md#getlogger)
- [init](CommonLoggerFactory.md#init)
- [saveQueue](CommonLoggerFactory.md#savequeue)

## Constructors

### constructor

• **new CommonLoggerFactory**(`fileAccess`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileAccess` | `INativeFileAccess` |

#### Defined in

[CommonLoggerFactory.ts:7](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/common/src/CommonLoggerFactory.ts#L7)

## Properties

### busy

• `Private` **busy**: `boolean` = `false`

#### Defined in

[CommonLoggerFactory.ts:33](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/common/src/CommonLoggerFactory.ts#L33)

___

### queue

• `Private` `Readonly` **queue**: { `loggerName`: `string` ; `message`: `string`  }[] = `[]`

#### Defined in

[CommonLoggerFactory.ts:32](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/common/src/CommonLoggerFactory.ts#L32)

## Methods

### addLog

▸ `Private` **addLog**(`loggerName`, `message`): `Promise`<`void`\>

Add the log to a queue for saving to filesystem

#### Parameters

| Name | Type |
| :------ | :------ |
| `loggerName` | `string` |
| `message` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[CommonLoggerFactory.ts:70](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/common/src/CommonLoggerFactory.ts#L70)

___

### formatMessages

▸ `Private` **formatMessages**(`messages`, `context?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messages` | `any`[] |
| `context?` | `Function` |

#### Returns

`string`

#### Defined in

[CommonLoggerFactory.ts:26](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/common/src/CommonLoggerFactory.ts#L26)

___

### getLogger

▸ **getLogger**(`oName`): `ILogger`

#### Parameters

| Name | Type |
| :------ | :------ |
| `oName` | `string` \| `Function` |

#### Returns

`ILogger`

#### Implementation of

INativeLoggerFactory.getLogger

#### Defined in

[CommonLoggerFactory.ts:77](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/common/src/CommonLoggerFactory.ts#L77)

___

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

INativeLoggerFactory.init

#### Defined in

[CommonLoggerFactory.ts:22](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/common/src/CommonLoggerFactory.ts#L22)

___

### saveQueue

▸ `Private` **saveQueue**(): `Promise`<`void`\>

Save the queue of logs to the filesystem

#### Returns

`Promise`<`void`\>

#### Defined in

[CommonLoggerFactory.ts:38](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/common/src/CommonLoggerFactory.ts#L38)
