[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / INativeLoggerFactory

# Interface: INativeLoggerFactory

Create logger

## Hierarchy

-   `ILoggerFactory`

    ↳ **`INativeLoggerFactory`**

## Table of contents

### Methods

-   [getLogger](INativeLoggerFactory.md#getlogger)
-   [init](INativeLoggerFactory.md#init)

## Methods

### getLogger

▸ **getLogger**(`name`): `ILogger`

#### Parameters

| Name   | Type                   |
| :----- | :--------------------- |
| `name` | `string` \| `Function` |

#### Returns

`ILogger`

#### Inherited from

ILoggerFactory.getLogger

#### Defined in

node_modules/@js-soft/logging-abstractions/dist/ILoggerFactory.d.ts:3

---

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize logger

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeLoggerFactory.ts:11](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/abstractions/src/INativeLoggerFactory.ts#L11)
