[@js-soft/native-electron](../README.md) / [Exports](../modules.md) / ElectronPermissionsAccess

# Class: ElectronPermissionsAccess

## Implements

- [`INativePermissionsAccess`](../interfaces/INativePermissionsAccess.md)

## Table of contents

### Constructors

- [constructor](ElectronPermissionsAccess.md#constructor)

### Methods

- [hasCameraPermission](ElectronPermissionsAccess.md#hascamerapermission)
- [hasRemoteNotificationPermission](ElectronPermissionsAccess.md#hasremotenotificationpermission)
- [requestCameraPermission](ElectronPermissionsAccess.md#requestcamerapermission)
- [requestRemoteNotificationPermission](ElectronPermissionsAccess.md#requestremotenotificationpermission)

## Constructors

### constructor

• **new ElectronPermissionsAccess**()

## Methods

### hasCameraPermission

▸ **hasCameraPermission**(): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Implementation of

[INativePermissionsAccess](../interfaces/INativePermissionsAccess.md).[hasCameraPermission](../interfaces/INativePermissionsAccess.md#hascamerapermission)

#### Defined in

[electron/src/ElectronPermissionsAccess.ts:5](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/electron/src/ElectronPermissionsAccess.ts#L5)

___

### hasRemoteNotificationPermission

▸ **hasRemoteNotificationPermission**(): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Implementation of

[INativePermissionsAccess](../interfaces/INativePermissionsAccess.md).[hasRemoteNotificationPermission](../interfaces/INativePermissionsAccess.md#hasremotenotificationpermission)

#### Defined in

[electron/src/ElectronPermissionsAccess.ts:9](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/electron/src/ElectronPermissionsAccess.ts#L9)

___

### requestCameraPermission

▸ **requestCameraPermission**(): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Implementation of

[INativePermissionsAccess](../interfaces/INativePermissionsAccess.md).[requestCameraPermission](../interfaces/INativePermissionsAccess.md#requestcamerapermission)

#### Defined in

[electron/src/ElectronPermissionsAccess.ts:13](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/electron/src/ElectronPermissionsAccess.ts#L13)

___

### requestRemoteNotificationPermission

▸ **requestRemoteNotificationPermission**(): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Implementation of

[INativePermissionsAccess](../interfaces/INativePermissionsAccess.md).[requestRemoteNotificationPermission](../interfaces/INativePermissionsAccess.md#requestremotenotificationpermission)

#### Defined in

[electron/src/ElectronPermissionsAccess.ts:17](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/electron/src/ElectronPermissionsAccess.ts#L17)
