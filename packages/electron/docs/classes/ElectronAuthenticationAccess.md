[@js-soft/native-electron](../README.md) / [Exports](../modules.md) / ElectronAuthenticationAccess

# Class: ElectronAuthenticationAccess

## Implements

- [`INativeAuthenticationAccess`](../interfaces/INativeAuthenticationAccess.md)

## Table of contents

### Constructors

- [constructor](ElectronAuthenticationAccess.md#constructor)

### Methods

- [authenticate](ElectronAuthenticationAccess.md#authenticate)

## Constructors

### constructor

• **new ElectronAuthenticationAccess**(`logger`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger` | `ILogger` |

#### Defined in

[electron/src/ElectronAuthenticationAccess.ts:8](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/electron/src/ElectronAuthenticationAccess.ts#L8)

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

[electron/src/ElectronAuthenticationAccess.ts:10](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/electron/src/ElectronAuthenticationAccess.ts#L10)
