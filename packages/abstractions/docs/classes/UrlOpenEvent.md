[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / UrlOpenEvent

# Class: UrlOpenEvent

Event fired when [INativeLaunchOptions](../interfaces/INativeLaunchOptions.md) registers, that the app was started by an url

## Hierarchy

- [`NativeEvent`](NativeEvent.md)

  ↳ **`UrlOpenEvent`**

## Table of contents

### Constructors

- [constructor](UrlOpenEvent.md#constructor)

### Properties

- [namespace](UrlOpenEvent.md#namespace)
- [url](UrlOpenEvent.md#url)
- [namespace](UrlOpenEvent.md#namespace)

## Constructors

### constructor

• **new UrlOpenEvent**(`url`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Overrides

[NativeEvent](NativeEvent.md).[constructor](NativeEvent.md#constructor)

#### Defined in

[src/NativeEvents.ts:59](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/abstractions/src/NativeEvents.ts#L59)

## Properties

### namespace

• `Readonly` **namespace**: `string`

#### Inherited from

[NativeEvent](NativeEvent.md).[namespace](NativeEvent.md#namespace)

#### Defined in

node_modules/@js-soft/ts-utils/dist/events/Event.d.ts:2

___

### url

• `Readonly` **url**: `string`

___

### namespace

▪ `Static` **namespace**: `string` = `"UrlOpenEvent"`

#### Defined in

[src/NativeEvents.ts:58](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/abstractions/src/NativeEvents.ts#L58)
