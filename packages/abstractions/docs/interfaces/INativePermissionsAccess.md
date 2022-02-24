[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / INativePermissionsAccess

# Interface: INativePermissionsAccess

Access to native keychain

## Table of contents

### Methods

- [hasPermission](INativePermissionsAccess.md#haspermission)
- [requestPermission](INativePermissionsAccess.md#requestpermission)

## Methods

### hasPermission

▸ **hasPermission**(`permission`): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `permission` | `Permissions` |

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Defined in

src/INativePermissionsAccess.ts:12

___

### requestPermission

▸ **requestPermission**(`permission`): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `permission` | `Permissions` |

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Defined in

src/INativePermissionsAccess.ts:14
