[@js-soft/native-web](../README.md) / [Exports](../modules.md) / INativeAuthenticationAccess

# Interface: INativeAuthenticationAccess

Authentication of user

## Implemented by

- [`WebAuthenticationAccess`](../classes/WebAuthenticationAccess.md)

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

abstractions/dist/INativeAuthenticationAccess.d.ts:32
