[@js-soft/native-cordova](../README.md) / [Exports](../modules.md) / CordovaPermissionsAccess

# Class: CordovaPermissionsAccess

## Implements

- [`INativePermissionsAccess`](../interfaces/INativePermissionsAccess.md)

## Table of contents

### Constructors

- [constructor](CordovaPermissionsAccess.md#constructor)

### Methods

- [hasCameraPermission](CordovaPermissionsAccess.md#hascamerapermission)
- [hasRemoteNotificationPermission](CordovaPermissionsAccess.md#hasremotenotificationpermission)
- [requestCameraPermission](CordovaPermissionsAccess.md#requestcamerapermission)
- [requestRemoteNotificationPermission](CordovaPermissionsAccess.md#requestremotenotificationpermission)

## Constructors

### constructor

• **new CordovaPermissionsAccess**()

## Methods

### hasCameraPermission

▸ **hasCameraPermission**(): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Implementation of

[INativePermissionsAccess](../interfaces/INativePermissionsAccess.md).[hasCameraPermission](../interfaces/INativePermissionsAccess.md#hascamerapermission)

#### Defined in

[cordova/src/CordovaPermissionsAccess.ts:5](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/cordova/src/CordovaPermissionsAccess.ts#L5)

___

### hasRemoteNotificationPermission

▸ **hasRemoteNotificationPermission**(): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Implementation of

[INativePermissionsAccess](../interfaces/INativePermissionsAccess.md).[hasRemoteNotificationPermission](../interfaces/INativePermissionsAccess.md#hasremotenotificationpermission)

#### Defined in

[cordova/src/CordovaPermissionsAccess.ts:15](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/cordova/src/CordovaPermissionsAccess.ts#L15)

___

### requestCameraPermission

▸ **requestCameraPermission**(): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Implementation of

[INativePermissionsAccess](../interfaces/INativePermissionsAccess.md).[requestCameraPermission](../interfaces/INativePermissionsAccess.md#requestcamerapermission)

#### Defined in

[cordova/src/CordovaPermissionsAccess.ts:24](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/cordova/src/CordovaPermissionsAccess.ts#L24)

___

### requestRemoteNotificationPermission

▸ **requestRemoteNotificationPermission**(): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Implementation of

[INativePermissionsAccess](../interfaces/INativePermissionsAccess.md).[requestRemoteNotificationPermission](../interfaces/INativePermissionsAccess.md#requestremotenotificationpermission)

#### Defined in

[cordova/src/CordovaPermissionsAccess.ts:34](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/cordova/src/CordovaPermissionsAccess.ts#L34)
