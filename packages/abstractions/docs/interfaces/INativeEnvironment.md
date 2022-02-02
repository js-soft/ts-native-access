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
- [platform](INativeEnvironment.md#platform)
- [pushNotificationAccess](INativeEnvironment.md#pushnotificationaccess)
- [scannerAccess](INativeEnvironment.md#scanneraccess)

## Properties

### authenticationAccess

• **authenticationAccess**: [`INativeAuthenticationAccess`](INativeAuthenticationAccess.md)

Module for biometric user authentication

#### Defined in

[src/INativeEnvironment.ts:29](https://github.com/js-soft/ts-native-access/blob/2fee55d/packages/abstractions/src/INativeEnvironment.ts#L29)

___

### configAccess

• **configAccess**: [`INativeConfigAccess`](INativeConfigAccess.md)

Module for configuration of the app

#### Defined in

[src/INativeEnvironment.ts:33](https://github.com/js-soft/ts-native-access/blob/2fee55d/packages/abstractions/src/INativeEnvironment.ts#L33)

___

### databaseFactory

• **databaseFactory**: `ILokiJsDatabaseFactory`

Module for database creation

#### Defined in

[src/INativeEnvironment.ts:37](https://github.com/js-soft/ts-native-access/blob/2fee55d/packages/abstractions/src/INativeEnvironment.ts#L37)

___

### deviceInfoAccess

• **deviceInfoAccess**: [`INativeDeviceInfoAccess`](INativeDeviceInfoAccess.md)

Module for retrieving information about the device running the app

#### Defined in

[src/INativeEnvironment.ts:41](https://github.com/js-soft/ts-native-access/blob/2fee55d/packages/abstractions/src/INativeEnvironment.ts#L41)

___

### eventBus

• **eventBus**: [`INativeEventBus`](INativeEventBus.md)

Event bus for sending and receiving events

#### Defined in

[src/INativeEnvironment.ts:25](https://github.com/js-soft/ts-native-access/blob/2fee55d/packages/abstractions/src/INativeEnvironment.ts#L25)

___

### fileAccess

• **fileAccess**: [`INativeFileAccess`](INativeFileAccess.md)

Module for accessing the filesystem (read/write)

#### Defined in

[src/INativeEnvironment.ts:45](https://github.com/js-soft/ts-native-access/blob/2fee55d/packages/abstractions/src/INativeEnvironment.ts#L45)

___

### keychainAccess

• **keychainAccess**: [`INativeKeychainAccess`](INativeKeychainAccess.md)

Module for accessing the native keychain (read/write)

#### Defined in

[src/INativeEnvironment.ts:49](https://github.com/js-soft/ts-native-access/blob/2fee55d/packages/abstractions/src/INativeEnvironment.ts#L49)

___

### loggerFactory

• **loggerFactory**: [`INativeLoggerFactory`](INativeLoggerFactory.md)

Module for creating a logger

#### Defined in

[src/INativeEnvironment.ts:53](https://github.com/js-soft/ts-native-access/blob/2fee55d/packages/abstractions/src/INativeEnvironment.ts#L53)

___

### notificationAccess

• **notificationAccess**: [`INativeNotificationAccess`](INativeNotificationAccess.md)

Module for creating local notifications

#### Defined in

[src/INativeEnvironment.ts:57](https://github.com/js-soft/ts-native-access/blob/2fee55d/packages/abstractions/src/INativeEnvironment.ts#L57)

___

### platform

• **platform**: [`NativePlatform`](../enums/NativePlatform.md)

Framework used to access native functionalities

#### Defined in

[src/INativeEnvironment.ts:21](https://github.com/js-soft/ts-native-access/blob/2fee55d/packages/abstractions/src/INativeEnvironment.ts#L21)

___

### pushNotificationAccess

• **pushNotificationAccess**: [`INativePushNotificationAccess`](INativePushNotificationAccess.md)

Module for receiving and processing incoming remote push notifications

#### Defined in

[src/INativeEnvironment.ts:61](https://github.com/js-soft/ts-native-access/blob/2fee55d/packages/abstractions/src/INativeEnvironment.ts#L61)

___

### scannerAccess

• **scannerAccess**: [`INativeScannerAccess`](INativeScannerAccess.md)

Module for scanning qr-codes

#### Defined in

[src/INativeEnvironment.ts:65](https://github.com/js-soft/ts-native-access/blob/2fee55d/packages/abstractions/src/INativeEnvironment.ts#L65)
