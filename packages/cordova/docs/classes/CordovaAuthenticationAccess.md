[@js-soft/native-cordova](../README.md) / [Exports](../modules.md) / CordovaAuthenticationAccess

# Class: CordovaAuthenticationAccess

## Implements

- [`INativeAuthenticationAccess`](../interfaces/INativeAuthenticationAccess.md)

## Table of contents

### Constructors

- [constructor](CordovaAuthenticationAccess.md#constructor)

### Methods

- [authenticate](CordovaAuthenticationAccess.md#authenticate)

## Constructors

### constructor

• **new CordovaAuthenticationAccess**(`logger`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger` | `ILogger` |

#### Defined in

[cordova/src/CordovaAuthenticationAccess.ts:6](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/cordova/src/CordovaAuthenticationAccess.ts#L6)

## Methods

### authenticate

▸ **authenticate**(`options?`): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

Start the authentication process

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`INativeAuthenticationOptions`](../interfaces/INativeAuthenticationOptions.md) |

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

True if authentication was successful and false if authentication was unsuccessful

#### Implementation of

[INativeAuthenticationAccess](../interfaces/INativeAuthenticationAccess.md).[authenticate](../interfaces/INativeAuthenticationAccess.md#authenticate)

#### Defined in

[cordova/src/CordovaAuthenticationAccess.ts:8](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/cordova/src/CordovaAuthenticationAccess.ts#L8)
