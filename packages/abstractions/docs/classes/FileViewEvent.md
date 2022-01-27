[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / FileViewEvent

# Class: FileViewEvent

Event fired when the [launch options module](./INativeLaunchOptions.md) registers, that the app was started by a file open instruction

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

[src/NativeEvents.ts:69](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/abstractions/src/NativeEvents.ts#L69)

## Properties

### namespace

• `Readonly` **namespace**: `string`

#### Inherited from

[NativeEvent](NativeEvent.md).[namespace](NativeEvent.md#namespace)

#### Defined in

node_modules/@js-soft/ts-utils/dist/events/Event.d.ts:2

---

### uri

• `Readonly` **uri**: `string`

---

### namespace

▪ `Static` **namespace**: `string` = `"FileViewEvent"`

#### Defined in

[src/NativeEvents.ts:68](https://github.com/js-soft/ts-native-access/blob/2235f5c/packages/abstractions/src/NativeEvents.ts#L68)
