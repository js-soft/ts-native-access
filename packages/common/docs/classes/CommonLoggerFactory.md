[@js-soft/native-common](../README.md) / [Exports](../modules.md) / CommonLoggerFactory

# Class: CommonLoggerFactory

## Implements

-   `INativeLoggerFactory`

## Table of contents

### Constructors

-   [constructor](CommonLoggerFactory.md#constructor)

### Methods

-   [\_initWeb](CommonLoggerFactory.md#_initweb)
-   [formatMessages](CommonLoggerFactory.md#formatmessages)
-   [getLogger](CommonLoggerFactory.md#getlogger)
-   [init](CommonLoggerFactory.md#init)

## Constructors

### constructor

• **new CommonLoggerFactory**(`fileAccess`)

#### Parameters

| Name         | Type                |
| :----------- | :------------------ |
| `fileAccess` | `INativeFileAccess` |

#### Defined in

[CommonLoggerFactory.ts:7](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/common/src/CommonLoggerFactory.ts#L7)

## Methods

### \_initWeb

▸ `Private` **\_initWeb**(`consoleHandler`): `void`

#### Parameters

| Name             | Type       |
| :--------------- | :--------- |
| `consoleHandler` | `Function` |

#### Returns

`void`

#### Defined in

[CommonLoggerFactory.ts:34](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/common/src/CommonLoggerFactory.ts#L34)

---

### formatMessages

▸ `Private` **formatMessages**(`messages`, `context?`): `string`

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `messages` | `any`[]    |
| `context?` | `Function` |

#### Returns

`string`

#### Defined in

[CommonLoggerFactory.ts:24](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/common/src/CommonLoggerFactory.ts#L24)

---

### getLogger

▸ **getLogger**(`oName`): `ILogger`

#### Parameters

| Name    | Type                   |
| :------ | :--------------------- |
| `oName` | `string` \| `Function` |

#### Returns

`ILogger`

#### Implementation of

INativeLoggerFactory.getLogger

#### Defined in

[CommonLoggerFactory.ts:53](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/common/src/CommonLoggerFactory.ts#L53)

---

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

INativeLoggerFactory.init

#### Defined in

[CommonLoggerFactory.ts:9](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/common/src/CommonLoggerFactory.ts#L9)
