[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / ConfigurationRemoveEvent

# Class: ConfigurationRemoveEvent

Event fired when the [configuration module](./INativeConfigAccess.md) removes a configuration element

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

[src/NativeEvents.ts:49](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/abstractions/src/NativeEvents.ts#L49)

## Properties

### key

• `Readonly` **key**: `string`

---

### namespace

• `Readonly` **namespace**: `string`

#### Inherited from

[NativeEvent](NativeEvent.md).[namespace](NativeEvent.md#namespace)

#### Defined in

node_modules/@js-soft/ts-utils/dist/events/Event.d.ts:2

---

### namespace

▪ `Static` **namespace**: `string` = `"ConfigurationRemove"`

#### Defined in

[src/NativeEvents.ts:48](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/abstractions/src/NativeEvents.ts#L48)
