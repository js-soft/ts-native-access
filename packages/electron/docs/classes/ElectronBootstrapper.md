[@js-soft/native-electron](../README.md) / [Exports](../modules.md) / ElectronBootstrapper

# Class: ElectronBootstrapper

## Implements

- [`INativeBootstrapper`](../interfaces/INativeBootstrapper.md)

## Table of contents

### Constructors

- [constructor](ElectronBootstrapper.md#constructor)

### Properties

- [initialized](ElectronBootstrapper.md#initialized)
- [logger](ElectronBootstrapper.md#logger)
- [nativeAuthenticationAccess](ElectronBootstrapper.md#nativeauthenticationaccess)
- [nativeConfigAccess](ElectronBootstrapper.md#nativeconfigaccess)
- [nativeDatabaseFactory](ElectronBootstrapper.md#nativedatabasefactory)
- [nativeDeviceInfoAccess](ElectronBootstrapper.md#nativedeviceinfoaccess)
- [nativeEventBus](ElectronBootstrapper.md#nativeeventbus)
- [nativeFileAccess](ElectronBootstrapper.md#nativefileaccess)
- [nativeKeychainAccess](ElectronBootstrapper.md#nativekeychainaccess)
- [nativeLaunchOptions](ElectronBootstrapper.md#nativelaunchoptions)
- [nativeLoggerFactory](ElectronBootstrapper.md#nativeloggerfactory)
- [nativeNotificationAccess](ElectronBootstrapper.md#nativenotificationaccess)
- [nativePushNotificationAccess](ElectronBootstrapper.md#nativepushnotificationaccess)
- [nativeScannerAccess](ElectronBootstrapper.md#nativescanneraccess)
- [configPath](ElectronBootstrapper.md#configpath)

### Accessors

- [isInitialized](ElectronBootstrapper.md#isinitialized)
- [nativeEnvironment](ElectronBootstrapper.md#nativeenvironment)

### Methods

- [handleThemeEvent](ElectronBootstrapper.md#handlethemeevent)
- [init](ElectronBootstrapper.md#init)

## Constructors

### constructor

• **new ElectronBootstrapper**()

## Properties

### initialized

• `Private` **initialized**: `boolean` = `false`

#### Defined in

[electron/src/ElectronBootstrapper.ts:48](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronBootstrapper.ts#L48)

___

### logger

• `Private` **logger**: `ILogger`

#### Defined in

[electron/src/ElectronBootstrapper.ts:34](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronBootstrapper.ts#L34)

___

### nativeAuthenticationAccess

• `Private` **nativeAuthenticationAccess**: [`INativeAuthenticationAccess`](../interfaces/INativeAuthenticationAccess.md)

#### Defined in

[electron/src/ElectronBootstrapper.ts:35](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronBootstrapper.ts#L35)

___

### nativeConfigAccess

• `Private` **nativeConfigAccess**: [`INativeConfigAccess`](../interfaces/INativeConfigAccess.md)

#### Defined in

[electron/src/ElectronBootstrapper.ts:36](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronBootstrapper.ts#L36)

___

### nativeDatabaseFactory

• `Private` **nativeDatabaseFactory**: `ILokiJsDatabaseFactory`

#### Defined in

[electron/src/ElectronBootstrapper.ts:37](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronBootstrapper.ts#L37)

___

### nativeDeviceInfoAccess

• `Private` **nativeDeviceInfoAccess**: [`INativeDeviceInfoAccess`](../interfaces/INativeDeviceInfoAccess.md)

#### Defined in

[electron/src/ElectronBootstrapper.ts:38](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronBootstrapper.ts#L38)

___

### nativeEventBus

• `Private` **nativeEventBus**: [`INativeEventBus`](../interfaces/INativeEventBus.md)

#### Defined in

[electron/src/ElectronBootstrapper.ts:39](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronBootstrapper.ts#L39)

___

### nativeFileAccess

• `Private` **nativeFileAccess**: [`INativeFileAccess`](../interfaces/INativeFileAccess.md)

#### Defined in

[electron/src/ElectronBootstrapper.ts:40](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronBootstrapper.ts#L40)

___

### nativeKeychainAccess

• `Private` **nativeKeychainAccess**: [`INativeKeychainAccess`](../interfaces/INativeKeychainAccess.md)

#### Defined in

[electron/src/ElectronBootstrapper.ts:41](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronBootstrapper.ts#L41)

___

### nativeLaunchOptions

• `Private` **nativeLaunchOptions**: [`INativeLaunchOptions`](../interfaces/INativeLaunchOptions.md)

#### Defined in

[electron/src/ElectronBootstrapper.ts:46](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronBootstrapper.ts#L46)

___

### nativeLoggerFactory

• `Private` **nativeLoggerFactory**: [`INativeLoggerFactory`](../interfaces/INativeLoggerFactory.md)

#### Defined in

[electron/src/ElectronBootstrapper.ts:42](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronBootstrapper.ts#L42)

___

### nativeNotificationAccess

• `Private` **nativeNotificationAccess**: [`INativeNotificationAccess`](../interfaces/INativeNotificationAccess.md)

#### Defined in

[electron/src/ElectronBootstrapper.ts:43](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronBootstrapper.ts#L43)

___

### nativePushNotificationAccess

• `Private` **nativePushNotificationAccess**: [`INativePushNotificationAccess`](../interfaces/INativePushNotificationAccess.md)

#### Defined in

[electron/src/ElectronBootstrapper.ts:45](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronBootstrapper.ts#L45)

___

### nativeScannerAccess

• `Private` **nativeScannerAccess**: [`INativeScannerAccess`](../interfaces/INativeScannerAccess.md)

#### Defined in

[electron/src/ElectronBootstrapper.ts:44](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronBootstrapper.ts#L44)

___

### configPath

▪ `Static` `Readonly` **configPath**: `string` = `"config.json"`

#### Defined in

[electron/src/ElectronBootstrapper.ts:33](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronBootstrapper.ts#L33)

## Accessors

### isInitialized

• `get` **isInitialized**(): `boolean`

Indicates whether the initalisation is finished

#### Returns

`boolean`

#### Implementation of

[INativeBootstrapper](../interfaces/INativeBootstrapper.md).[isInitialized](../interfaces/INativeBootstrapper.md#isinitialized)

#### Defined in

[electron/src/ElectronBootstrapper.ts:49](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronBootstrapper.ts#L49)

___

### nativeEnvironment

• `get` **nativeEnvironment**(): [`INativeEnvironment`](../interfaces/INativeEnvironment.md)

Environment of initialized native features

#### Returns

[`INativeEnvironment`](../interfaces/INativeEnvironment.md)

#### Implementation of

[INativeBootstrapper](../interfaces/INativeBootstrapper.md).[nativeEnvironment](../interfaces/INativeBootstrapper.md#nativeenvironment)

#### Defined in

[electron/src/ElectronBootstrapper.ts:53](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronBootstrapper.ts#L53)

## Methods

### handleThemeEvent

▸ `Private` **handleThemeEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`ThemeEvent`](ThemeEvent.md) |

#### Returns

`void`

#### Defined in

[electron/src/ElectronBootstrapper.ts:122](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronBootstrapper.ts#L122)

___

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Function for starting the initialization process

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeBootstrapper](../interfaces/INativeBootstrapper.md).[init](../interfaces/INativeBootstrapper.md#init)

#### Defined in

[electron/src/ElectronBootstrapper.ts:74](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/electron/src/ElectronBootstrapper.ts#L74)
