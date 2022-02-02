[@js-soft/native-web](../README.md) / [Exports](../modules.md) / WebAuthenticationAccess

# Class: WebAuthenticationAccess

## Implements

- [`INativeAuthenticationAccess`](../interfaces/INativeAuthenticationAccess.md)

## Table of contents

### Constructors

- [constructor](WebAuthenticationAccess.md#constructor)

### Methods

- [authenticate](WebAuthenticationAccess.md#authenticate)

## Constructors

### constructor

• **new WebAuthenticationAccess**(`logger`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger` | `ILogger` |

#### Defined in

[web/src/WebAuthenticationAccess.ts:6](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/web/src/WebAuthenticationAccess.ts#L6)

## Methods

### authenticate

▸ **authenticate**(`_options?`): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

Start the authentication process

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`INativeAuthenticationOptions`](../interfaces/INativeAuthenticationOptions.md) |

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

True if authentication was successful and false if authentication was unsuccessful

#### Implementation of

[INativeAuthenticationAccess](../interfaces/INativeAuthenticationAccess.md).[authenticate](../interfaces/INativeAuthenticationAccess.md#authenticate)

#### Defined in

[web/src/WebAuthenticationAccess.ts:8](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/web/src/WebAuthenticationAccess.ts#L8)
