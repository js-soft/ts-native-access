[@js-soft/native-electron](../README.md) / [Exports](../modules.md) / INativeEnvironment

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

abstractions/dist/INativeEnvironment.d.ts:28

___

### configAccess

• **configAccess**: [`INativeConfigAccess`](INativeConfigAccess.md)

Module for configuration of the app

#### Defined in

abstractions/dist/INativeEnvironment.d.ts:32

___

### databaseFactory

• **databaseFactory**: `ILokiJsDatabaseFactory`

Module for database creation

#### Defined in

abstractions/dist/INativeEnvironment.d.ts:36

___

### deviceInfoAccess

• **deviceInfoAccess**: [`INativeDeviceInfoAccess`](INativeDeviceInfoAccess.md)

Module for retrieving information about the device running the app

#### Defined in

abstractions/dist/INativeEnvironment.d.ts:40

___

### eventBus

• **eventBus**: [`INativeEventBus`](INativeEventBus.md)

Event bus for sending and receiving events

#### Defined in

abstractions/dist/INativeEnvironment.d.ts:24

___

### fileAccess

• **fileAccess**: [`INativeFileAccess`](INativeFileAccess.md)

Module for accessing the filesystem (read/write)

#### Defined in

abstractions/dist/INativeEnvironment.d.ts:44

___

### keychainAccess

• **keychainAccess**: [`INativeKeychainAccess`](INativeKeychainAccess.md)

Module for accessing the native keychain (read/write)

#### Defined in

abstractions/dist/INativeEnvironment.d.ts:48

___

### loggerFactory

• **loggerFactory**: [`INativeLoggerFactory`](INativeLoggerFactory.md)

Module for creating a logger

#### Defined in

abstractions/dist/INativeEnvironment.d.ts:52

___

### notificationAccess

• **notificationAccess**: [`INativeNotificationAccess`](INativeNotificationAccess.md)

Module for creating local notifications

#### Defined in

abstractions/dist/INativeEnvironment.d.ts:56

___

### platform

• **platform**: [`NativePlatform`](../enums/NativePlatform.md)

Framework used to access native functionalities

#### Defined in

abstractions/dist/INativeEnvironment.d.ts:20

___

### pushNotificationAccess

• **pushNotificationAccess**: [`INativePushNotificationAccess`](INativePushNotificationAccess.md)

Module for receiving and processing incoming remote push notifications

#### Defined in

abstractions/dist/INativeEnvironment.d.ts:60

___

### scannerAccess

• **scannerAccess**: [`INativeScannerAccess`](INativeScannerAccess.md)

Module for scanning qr-codes

#### Defined in

abstractions/dist/INativeEnvironment.d.ts:64
