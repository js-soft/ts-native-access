[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / INativeAuthenticationAccess

# Interface: INativeAuthenticationAccess

Authentication of user

## Table of contents

### Methods

- [authenticate](INativeAuthenticationAccess.md#authenticate)

## Methods

### authenticate

▸ **authenticate**(`options?`): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

Start the authentication process

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`INativeAuthenticationOptions`](INativeAuthenticationOptions.md) | Configuration of the authentication process |

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

True if authentication was successful and false if authentication was unsuccessful

#### Defined in

[src/INativeAuthenticationAccess.ts:34](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/abstractions/src/INativeAuthenticationAccess.ts#L34)
