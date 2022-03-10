[@js-soft/native-cordova](../README.md) / [Exports](../modules.md) / ConfigurationRemoveEvent

# Class: ConfigurationRemoveEvent

Event fired when the [INativeConfigAccess](../interfaces/INativeConfigAccess.md) removes a configuration element

## Hierarchy

-   [`NativeEvent`](NativeEvent.md)

    ↳ **`ConfigurationRemoveEvent`**

## Table of contents

### Constructors

-   [constructor](ConfigurationRemoveEvent.md#constructor)

### Properties

-   [key](ConfigurationRemoveEvent.md#key)
-   [namespace](ConfigurationRemoveEvent.md#namespace)
-   [namespace](ConfigurationRemoveEvent.md#namespace)

## Constructors

### constructor

• **new ConfigurationRemoveEvent**(`key`)

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `key` | `string` |

#### Overrides

[NativeEvent](NativeEvent.md).[constructor](NativeEvent.md#constructor)

#### Defined in

abstractions/dist/NativeEvents.d.ts:41

## Properties

### key

• `Readonly` **key**: `string`

#### Defined in

abstractions/dist/NativeEvents.d.ts:39

---

### namespace

• `Readonly` **namespace**: `string`

#### Inherited from

[NativeEvent](NativeEvent.md).[namespace](NativeEvent.md#namespace)

#### Defined in

abstractions/node_modules/@js-soft/ts-utils/dist/events/Event.d.ts:2

---

### namespace

▪ `Static` **namespace**: `string`

#### Defined in

abstractions/dist/NativeEvents.d.ts:40
