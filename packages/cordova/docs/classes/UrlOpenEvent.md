[@js-soft/native-cordova](../README.md) / [Exports](../modules.md) / UrlOpenEvent

# Class: UrlOpenEvent

Event fired when the [launch options module](./INativeLaunchOptions.md) registers, that the app was started by an url

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

abstractions/dist/NativeEvents.d.ts:49

## Properties

### namespace

• `Readonly` **namespace**: `string`

#### Inherited from

[NativeEvent](NativeEvent.md).[namespace](NativeEvent.md#namespace)

#### Defined in

abstractions/node_modules/@js-soft/ts-utils/dist/events/Event.d.ts:2

___

### url

• `Readonly` **url**: `string`

#### Defined in

abstractions/dist/NativeEvents.d.ts:47

___

### namespace

▪ `Static` **namespace**: `string`

#### Defined in

abstractions/dist/NativeEvents.d.ts:48
