[@js-soft/native-electron](../README.md) / [Exports](../modules.md) / FileViewEvent

# Class: FileViewEvent

Event fired when [INativeLaunchOptions](../interfaces/INativeLaunchOptions.md) registers, that the app was started by a file open instruction

## Hierarchy

-   [`NativeEvent`](NativeEvent.md)

    ↳ **`FileViewEvent`**

## Table of contents

### Constructors

-   [constructor](FileViewEvent.md#constructor)

### Properties

-   [namespace](FileViewEvent.md#namespace)
-   [uri](FileViewEvent.md#uri)
-   [namespace](FileViewEvent.md#namespace)

## Constructors

### constructor

• **new FileViewEvent**(`uri`)

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `uri` | `string` |

#### Overrides

[NativeEvent](NativeEvent.md).[constructor](NativeEvent.md#constructor)

#### Defined in

abstractions/dist/NativeEvents.d.ts:57

## Properties

### namespace

• `Readonly` **namespace**: `string`

#### Inherited from

[NativeEvent](NativeEvent.md).[namespace](NativeEvent.md#namespace)

#### Defined in

abstractions/node_modules/@js-soft/ts-utils/dist/events/Event.d.ts:2

---

### uri

• `Readonly` **uri**: `string`

#### Defined in

abstractions/dist/NativeEvents.d.ts:55

---

### namespace

▪ `Static` **namespace**: `string`

#### Defined in

abstractions/dist/NativeEvents.d.ts:56
