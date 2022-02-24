[@js-soft/native-web](../README.md) / [Exports](../modules.md) / INativeLoggerFactory

# Interface: INativeLoggerFactory

Create logger

## Hierarchy

- `ILoggerFactory`

  ↳ **`INativeLoggerFactory`**

## Implemented by

- [`CommonLoggerFactory`](../classes/CommonLoggerFactory.md)

## Table of contents

### Methods

- [getLogger](INativeLoggerFactory.md#getlogger)
- [init](INativeLoggerFactory.md#init)

## Methods

### getLogger

▸ **getLogger**(`name`): `ILogger`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` |

#### Returns

`ILogger`

#### Inherited from

ILoggerFactory.getLogger

#### Defined in

web/node_modules/@js-soft/logging-abstractions/dist/ILoggerFactory.d.ts:3

___

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize logger

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

abstractions/dist/INativeLoggerFactory.d.ts:10
