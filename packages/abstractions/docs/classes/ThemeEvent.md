[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / ThemeEvent

# Class: ThemeEvent

Event fired when the app changes theme

## Hierarchy

- [`NativeEvent`](NativeEvent.md)

  ↳ **`ThemeEvent`**

## Table of contents

### Constructors

- [constructor](ThemeEvent.md#constructor)

### Properties

- [backgroundColor](ThemeEvent.md#backgroundcolor)
- [image](ThemeEvent.md#image)
- [namespace](ThemeEvent.md#namespace)
- [textColor](ThemeEvent.md#textcolor)
- [textStyle](ThemeEvent.md#textstyle)
- [namespace](ThemeEvent.md#namespace)

## Constructors

### constructor

• **new ThemeEvent**(`backgroundColor`, `textStyle`, `textColor?`, `image?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `backgroundColor` | `string` |
| `textStyle` | [`ThemeTextStyle`](../enums/ThemeTextStyle.md) |
| `textColor?` | `string` |
| `image?` | `string` |

#### Overrides

[NativeEvent](NativeEvent.md).[constructor](NativeEvent.md#constructor)

#### Defined in

[src/NativeEvents.ts:104](https://github.com/js-soft/ts-native-access/blob/b144064/packages/abstractions/src/NativeEvents.ts#L104)

## Properties

### backgroundColor

• `Readonly` **backgroundColor**: `string`

___

### image

• `Optional` `Readonly` **image**: `string`

___

### namespace

• `Readonly` **namespace**: `string`

#### Inherited from

[NativeEvent](NativeEvent.md).[namespace](NativeEvent.md#namespace)

#### Defined in

node_modules/@js-soft/ts-utils/dist/events/Event.d.ts:2

___

### textColor

• `Optional` `Readonly` **textColor**: `string`

___

### textStyle

• `Readonly` **textStyle**: [`ThemeTextStyle`](../enums/ThemeTextStyle.md)

___

### namespace

▪ `Static` **namespace**: `string` = `"ThemeEvent"`

#### Defined in

[src/NativeEvents.ts:103](https://github.com/js-soft/ts-native-access/blob/b144064/packages/abstractions/src/NativeEvents.ts#L103)
