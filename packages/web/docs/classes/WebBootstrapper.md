[@js-soft/native-web](../README.md) / [Exports](../modules.md) / WebBootstrapper

# Class: WebBootstrapper

## Implements

- [`INativeBootstrapper`](../interfaces/INativeBootstrapper.md)

## Table of contents

### Constructors

- [constructor](WebBootstrapper.md#constructor)

### Properties

- [initialized](WebBootstrapper.md#initialized)
- [logger](WebBootstrapper.md#logger)
- [nativeAuthenticationAccess](WebBootstrapper.md#nativeauthenticationaccess)
- [nativeConfigAccess](WebBootstrapper.md#nativeconfigaccess)
- [nativeDatabaseFactory](WebBootstrapper.md#nativedatabasefactory)
- [nativeDeviceInfoAccess](WebBootstrapper.md#nativedeviceinfoaccess)
- [nativeEventBus](WebBootstrapper.md#nativeeventbus)
- [nativeFileAccess](WebBootstrapper.md#nativefileaccess)
- [nativeKeychainAccess](WebBootstrapper.md#nativekeychainaccess)
- [nativeLoggerFactory](WebBootstrapper.md#nativeloggerfactory)
- [nativeNotificationAccess](WebBootstrapper.md#nativenotificationaccess)
- [nativePushNotificationAccess](WebBootstrapper.md#nativepushnotificationaccess)
- [nativeScannerAccess](WebBootstrapper.md#nativescanneraccess)
- [configPath](WebBootstrapper.md#configpath)

### Accessors

- [isInitialized](WebBootstrapper.md#isinitialized)
- [nativeEnvironment](WebBootstrapper.md#nativeenvironment)

### Methods

- [handleThemeEvent](WebBootstrapper.md#handlethemeevent)
- [init](WebBootstrapper.md#init)

## Constructors

### constructor

• **new WebBootstrapper**()

## Properties

### initialized

• `Private` **initialized**: `boolean` = `false`

#### Defined in

[web/src/WebBootstrapper.ts:46](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/web/src/WebBootstrapper.ts#L46)

___

### logger

• `Private` **logger**: `ILogger`

#### Defined in

[web/src/WebBootstrapper.ts:33](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/web/src/WebBootstrapper.ts#L33)

___

### nativeAuthenticationAccess

• `Private` **nativeAuthenticationAccess**: [`INativeAuthenticationAccess`](../interfaces/INativeAuthenticationAccess.md)

#### Defined in

[web/src/WebBootstrapper.ts:34](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/web/src/WebBootstrapper.ts#L34)

___

### nativeConfigAccess

• `Private` **nativeConfigAccess**: [`INativeConfigAccess`](../interfaces/INativeConfigAccess.md)

#### Defined in

[web/src/WebBootstrapper.ts:35](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/web/src/WebBootstrapper.ts#L35)

___

### nativeDatabaseFactory

• `Private` **nativeDatabaseFactory**: `ILokiJsDatabaseFactory`

#### Defined in

[web/src/WebBootstrapper.ts:36](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/web/src/WebBootstrapper.ts#L36)

___

### nativeDeviceInfoAccess

• `Private` **nativeDeviceInfoAccess**: [`INativeDeviceInfoAccess`](../interfaces/INativeDeviceInfoAccess.md)

#### Defined in

[web/src/WebBootstrapper.ts:37](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/web/src/WebBootstrapper.ts#L37)

___

### nativeEventBus

• `Private` **nativeEventBus**: [`INativeEventBus`](../interfaces/INativeEventBus.md)

#### Defined in

[web/src/WebBootstrapper.ts:38](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/web/src/WebBootstrapper.ts#L38)

___

### nativeFileAccess

• `Private` **nativeFileAccess**: [`INativeFileAccess`](../interfaces/INativeFileAccess.md)

#### Defined in

[web/src/WebBootstrapper.ts:39](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/web/src/WebBootstrapper.ts#L39)

___

### nativeKeychainAccess

• `Private` **nativeKeychainAccess**: [`INativeKeychainAccess`](../interfaces/INativeKeychainAccess.md)

#### Defined in

[web/src/WebBootstrapper.ts:40](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/web/src/WebBootstrapper.ts#L40)

___

### nativeLoggerFactory

• `Private` **nativeLoggerFactory**: [`INativeLoggerFactory`](../interfaces/INativeLoggerFactory.md)

#### Defined in

[web/src/WebBootstrapper.ts:41](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/web/src/WebBootstrapper.ts#L41)

___

### nativeNotificationAccess

• `Private` **nativeNotificationAccess**: [`INativeNotificationAccess`](../interfaces/INativeNotificationAccess.md)

#### Defined in

[web/src/WebBootstrapper.ts:42](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/web/src/WebBootstrapper.ts#L42)

___

### nativePushNotificationAccess

• `Private` **nativePushNotificationAccess**: [`INativePushNotificationAccess`](../interfaces/INativePushNotificationAccess.md)

#### Defined in

[web/src/WebBootstrapper.ts:44](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/web/src/WebBootstrapper.ts#L44)

___

### nativeScannerAccess

• `Private` **nativeScannerAccess**: [`INativeScannerAccess`](../interfaces/INativeScannerAccess.md)

#### Defined in

[web/src/WebBootstrapper.ts:43](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/web/src/WebBootstrapper.ts#L43)

___

### configPath

▪ `Static` `Readonly` **configPath**: `string` = `"config.json"`

#### Defined in

[web/src/WebBootstrapper.ts:32](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/web/src/WebBootstrapper.ts#L32)

## Accessors

### isInitialized

• `get` **isInitialized**(): `boolean`

Indicates whether the initalisation is finished

#### Returns

`boolean`

#### Implementation of

[INativeBootstrapper](../interfaces/INativeBootstrapper.md).[isInitialized](../interfaces/INativeBootstrapper.md#isinitialized)

#### Defined in

[web/src/WebBootstrapper.ts:48](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/web/src/WebBootstrapper.ts#L48)

___

### nativeEnvironment

• `get` **nativeEnvironment**(): [`INativeEnvironment`](../interfaces/INativeEnvironment.md)

Environment of initialized native features

#### Returns

[`INativeEnvironment`](../interfaces/INativeEnvironment.md)

#### Implementation of

[INativeBootstrapper](../interfaces/INativeBootstrapper.md).[nativeEnvironment](../interfaces/INativeBootstrapper.md#nativeenvironment)

#### Defined in

[web/src/WebBootstrapper.ts:52](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/web/src/WebBootstrapper.ts#L52)

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

[web/src/WebBootstrapper.ts:120](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/web/src/WebBootstrapper.ts#L120)

___

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Function for starting the initialization process

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeBootstrapper](../interfaces/INativeBootstrapper.md).[init](../interfaces/INativeBootstrapper.md#init)

#### Defined in

[web/src/WebBootstrapper.ts:72](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/web/src/WebBootstrapper.ts#L72)
