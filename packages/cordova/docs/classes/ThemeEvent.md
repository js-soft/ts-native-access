[@js-soft/native-cordova](../README.md) / [Exports](../modules.md) / ThemeEvent

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

abstractions/dist/NativeEvents.d.ts:86

## Properties

### backgroundColor

• `Readonly` **backgroundColor**: `string`

#### Defined in

abstractions/dist/NativeEvents.d.ts:81

___

### image

• `Optional` `Readonly` **image**: `string`

#### Defined in

abstractions/dist/NativeEvents.d.ts:84

___

### namespace

• `Readonly` **namespace**: `string`

#### Inherited from

[NativeEvent](NativeEvent.md).[namespace](NativeEvent.md#namespace)

#### Defined in

abstractions/node_modules/@js-soft/ts-utils/dist/events/Event.d.ts:2

___

### textColor

• `Optional` `Readonly` **textColor**: `string`

#### Defined in

abstractions/dist/NativeEvents.d.ts:83

___

### textStyle

• `Readonly` **textStyle**: [`ThemeTextStyle`](../enums/ThemeTextStyle.md)

#### Defined in

abstractions/dist/NativeEvents.d.ts:82

___

### namespace

▪ `Static` **namespace**: `string`

#### Defined in

abstractions/dist/NativeEvents.d.ts:85
