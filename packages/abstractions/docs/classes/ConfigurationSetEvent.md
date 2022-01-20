[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / ConfigurationSetEvent

# Class: ConfigurationSetEvent

## Hierarchy

- [`NativeEvent`](NativeEvent.md)

  ↳ **`ConfigurationSetEvent`**

## Table of contents

### Constructors

- [constructor](ConfigurationSetEvent.md#constructor)

### Properties

- [key](ConfigurationSetEvent.md#key)
- [namespace](ConfigurationSetEvent.md#namespace)
- [value](ConfigurationSetEvent.md#value)
- [namespace](ConfigurationSetEvent.md#namespace)

## Constructors

### constructor

• **new ConfigurationSetEvent**(`key`, `value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Overrides

[NativeEvent](NativeEvent.md).[constructor](NativeEvent.md#constructor)

#### Defined in

[src/NativeEvents.ts:27](https://github.com/js-soft/ts-native-access/blob/93dbc36/packages/abstractions/src/NativeEvents.ts#L27)

## Properties

### key

• `Readonly` **key**: `string`

___

### namespace

• `Readonly` **namespace**: `string`

#### Inherited from

[NativeEvent](NativeEvent.md).[namespace](NativeEvent.md#namespace)

#### Defined in

node_modules/@js-soft/ts-utils/dist/events/Event.d.ts:2

___

### value

• `Readonly` **value**: `any`

___

### namespace

▪ `Static` `Readonly` **namespace**: ``"ConfigurationSet"``

#### Defined in

[src/NativeEvents.ts:26](https://github.com/js-soft/ts-native-access/blob/93dbc36/packages/abstractions/src/NativeEvents.ts#L26)
