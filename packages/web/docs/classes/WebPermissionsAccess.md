[@js-soft/native-web](../README.md) / [Exports](../modules.md) / WebPermissionsAccess

# Class: WebPermissionsAccess

## Implements

- [`INativePermissionsAccess`](../interfaces/INativePermissionsAccess.md)

## Table of contents

### Constructors

- [constructor](WebPermissionsAccess.md#constructor)

### Methods

- [hasCameraPermission](WebPermissionsAccess.md#hascamerapermission)
- [hasRemoteNotificationPermission](WebPermissionsAccess.md#hasremotenotificationpermission)
- [requestCameraPermission](WebPermissionsAccess.md#requestcamerapermission)
- [requestRemoteNotificationPermission](WebPermissionsAccess.md#requestremotenotificationpermission)

## Constructors

### constructor

• **new WebPermissionsAccess**()

## Methods

### hasCameraPermission

▸ **hasCameraPermission**(): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Implementation of

[INativePermissionsAccess](../interfaces/INativePermissionsAccess.md).[hasCameraPermission](../interfaces/INativePermissionsAccess.md#hascamerapermission)

#### Defined in

[web/src/WebPermissionsAccess.ts:5](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebPermissionsAccess.ts#L5)

___

### hasRemoteNotificationPermission

▸ **hasRemoteNotificationPermission**(): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Implementation of

[INativePermissionsAccess](../interfaces/INativePermissionsAccess.md).[hasRemoteNotificationPermission](../interfaces/INativePermissionsAccess.md#hasremotenotificationpermission)

#### Defined in

[web/src/WebPermissionsAccess.ts:9](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebPermissionsAccess.ts#L9)

___

### requestCameraPermission

▸ **requestCameraPermission**(): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Implementation of

[INativePermissionsAccess](../interfaces/INativePermissionsAccess.md).[requestCameraPermission](../interfaces/INativePermissionsAccess.md#requestcamerapermission)

#### Defined in

[web/src/WebPermissionsAccess.ts:13](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebPermissionsAccess.ts#L13)

___

### requestRemoteNotificationPermission

▸ **requestRemoteNotificationPermission**(): `Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Returns

`Promise`<`Result`<`boolean`, `ApplicationError`\>\>

#### Implementation of

[INativePermissionsAccess](../interfaces/INativePermissionsAccess.md).[requestRemoteNotificationPermission](../interfaces/INativePermissionsAccess.md#requestremotenotificationpermission)

#### Defined in

[web/src/WebPermissionsAccess.ts:17](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/web/src/WebPermissionsAccess.ts#L17)
