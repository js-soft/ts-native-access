[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / INativeEnvironment

# Interface: INativeEnvironment

Modules for native functionalities: These modules provide an interface for accessing native features of the device.

## Table of contents

### Properties

- [authenticationAccess](INativeEnvironment.md#authenticationaccess)
- [configAccess](INativeEnvironment.md#configaccess)
- [databaseFactory](INativeEnvironment.md#databasefactory)
- [deviceInfoAccess](INativeEnvironment.md#deviceinfoaccess)
- [eventBus](INativeEnvironment.md#eventbus)
- [fileAccess](INativeEnvironment.md#fileaccess)
- [keychainAccess](INativeEnvironment.md#keychainaccess)
- [loggerFactory](INativeEnvironment.md#loggerfactory)
- [notificationAccess](INativeEnvironment.md#notificationaccess)
- [permissionsAccess](INativeEnvironment.md#permissionsaccess)
- [platform](INativeEnvironment.md#platform)
- [pushNotificationAccess](INativeEnvironment.md#pushnotificationaccess)
- [scannerAccess](INativeEnvironment.md#scanneraccess)

## Properties

### authenticationAccess

• **authenticationAccess**: [`INativeAuthenticationAccess`](INativeAuthenticationAccess.md)

Module for biometric user authentication

#### Defined in

[src/INativeEnvironment.ts:30](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/abstractions/src/INativeEnvironment.ts#L30)

___

### configAccess

• **configAccess**: [`INativeConfigAccess`](INativeConfigAccess.md)

Module for configuration of the app

#### Defined in

[src/INativeEnvironment.ts:34](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/abstractions/src/INativeEnvironment.ts#L34)

___

### databaseFactory

• **databaseFactory**: `ILokiJsDatabaseFactory`

Module for database creation

#### Defined in

[src/INativeEnvironment.ts:38](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/abstractions/src/INativeEnvironment.ts#L38)

___

### deviceInfoAccess

• **deviceInfoAccess**: [`INativeDeviceInfoAccess`](INativeDeviceInfoAccess.md)

Module for retrieving information about the device running the app

#### Defined in

[src/INativeEnvironment.ts:42](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/abstractions/src/INativeEnvironment.ts#L42)

___

### eventBus

• **eventBus**: [`INativeEventBus`](INativeEventBus.md)

Event bus for sending and receiving events

#### Defined in

[src/INativeEnvironment.ts:26](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/abstractions/src/INativeEnvironment.ts#L26)

___

### fileAccess

• **fileAccess**: [`INativeFileAccess`](INativeFileAccess.md)

Module for accessing the filesystem (read/write)

#### Defined in

[src/INativeEnvironment.ts:46](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/abstractions/src/INativeEnvironment.ts#L46)

___

### keychainAccess

• **keychainAccess**: [`INativeKeychainAccess`](INativeKeychainAccess.md)

Module for accessing the native keychain (read/write)

#### Defined in

[src/INativeEnvironment.ts:50](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/abstractions/src/INativeEnvironment.ts#L50)

___

### loggerFactory

• **loggerFactory**: [`INativeLoggerFactory`](INativeLoggerFactory.md)

Module for creating a logger

#### Defined in

[src/INativeEnvironment.ts:54](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/abstractions/src/INativeEnvironment.ts#L54)

___

### notificationAccess

• **notificationAccess**: [`INativeNotificationAccess`](INativeNotificationAccess.md)

Module for creating local notifications

#### Defined in

[src/INativeEnvironment.ts:58](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/abstractions/src/INativeEnvironment.ts#L58)

___

### permissionsAccess

• **permissionsAccess**: [`INativePermissionsAccess`](INativePermissionsAccess.md)

Module for managing permission

#### Defined in

[src/INativeEnvironment.ts:70](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/abstractions/src/INativeEnvironment.ts#L70)

___

### platform

• **platform**: [`NativePlatform`](../enums/NativePlatform.md)

Framework used to access native functionalities

#### Defined in

[src/INativeEnvironment.ts:22](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/abstractions/src/INativeEnvironment.ts#L22)

___

### pushNotificationAccess

• **pushNotificationAccess**: [`INativePushNotificationAccess`](INativePushNotificationAccess.md)

Module for receiving and processing incoming remote push notifications

#### Defined in

[src/INativeEnvironment.ts:62](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/abstractions/src/INativeEnvironment.ts#L62)

___

### scannerAccess

• **scannerAccess**: [`INativeScannerAccess`](INativeScannerAccess.md)

Module for scanning qr-codes

#### Defined in

[src/INativeEnvironment.ts:66](https://github.com/js-soft/ts-native-access/blob/dceb9d6/packages/abstractions/src/INativeEnvironment.ts#L66)
