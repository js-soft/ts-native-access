[@js-soft/native-web](../README.md) / [Exports](../modules.md) / ConfigurationSetEvent

# Class: ConfigurationSetEvent

Event fired when [INativeConfigAccess](../interfaces/INativeConfigAccess.md) changes the configuration

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

abstractions/dist/NativeEvents.d.ts:33

## Properties

### key

• `Readonly` **key**: `string`

#### Defined in

abstractions/dist/NativeEvents.d.ts:30

___

### namespace

• `Readonly` **namespace**: `string`

#### Inherited from

[NativeEvent](NativeEvent.md).[namespace](NativeEvent.md#namespace)

#### Defined in

abstractions/node_modules/@js-soft/ts-utils/dist/events/Event.d.ts:2

___

### value

• `Readonly` **value**: `any`

#### Defined in

abstractions/dist/NativeEvents.d.ts:31

___

### namespace

▪ `Static` `Readonly` **namespace**: ``"ConfigurationSet"``

#### Defined in

abstractions/dist/NativeEvents.d.ts:32
