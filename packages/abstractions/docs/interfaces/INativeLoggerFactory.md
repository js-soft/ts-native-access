[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / INativeLoggerFactory

# Interface: INativeLoggerFactory

## Hierarchy

- `ILoggerFactory`

  ↳ **`INativeLoggerFactory`**

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

node_modules/@js-soft/logging-abstractions/dist/ILoggerFactory.d.ts:3

___

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeLoggerFactory.ts:5](https://github.com/js-soft/ts-native-access/blob/7416af4/packages/abstractions/src/INativeLoggerFactory.ts#L5)
