[@js-soft/native-cordova](../README.md) / [Exports](../modules.md) / CordovaBootstrapper

# Class: CordovaBootstrapper

## Implements

-   [`INativeBootstrapper`](../interfaces/INativeBootstrapper.md)

## Table of contents

### Constructors

-   [constructor](CordovaBootstrapper.md#constructor)

### Properties

-   [initialized](CordovaBootstrapper.md#initialized)
-   [logger](CordovaBootstrapper.md#logger)
-   [nativeAuthenticationAccess](CordovaBootstrapper.md#nativeauthenticationaccess)
-   [nativeConfigAccess](CordovaBootstrapper.md#nativeconfigaccess)
-   [nativeDatabaseFactory](CordovaBootstrapper.md#nativedatabasefactory)
-   [nativeDeviceInfoAccess](CordovaBootstrapper.md#nativedeviceinfoaccess)
-   [nativeEventBus](CordovaBootstrapper.md#nativeeventbus)
-   [nativeFileAccess](CordovaBootstrapper.md#nativefileaccess)
-   [nativeKeychainAccess](CordovaBootstrapper.md#nativekeychainaccess)
-   [nativeLaunchOptions](CordovaBootstrapper.md#nativelaunchoptions)
-   [nativeLoggerFactory](CordovaBootstrapper.md#nativeloggerfactory)
-   [nativeNotificationAccess](CordovaBootstrapper.md#nativenotificationaccess)
-   [nativePushNotificationAccess](CordovaBootstrapper.md#nativepushnotificationaccess)
-   [nativeScannerAccess](CordovaBootstrapper.md#nativescanneraccess)
-   [configPath](CordovaBootstrapper.md#configpath)

### Accessors

-   [isInitialized](CordovaBootstrapper.md#isinitialized)
-   [nativeEnvironment](CordovaBootstrapper.md#nativeenvironment)

### Methods

-   [handleThemeEvent](CordovaBootstrapper.md#handlethemeevent)
-   [init](CordovaBootstrapper.md#init)

## Constructors

### constructor

• **new CordovaBootstrapper**()

## Properties

### initialized

• `Private` **initialized**: `boolean` = `false`

#### Defined in

[cordova/src/CordovaBootstrapper.ts:52](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaBootstrapper.ts#L52)

---

### logger

• `Private` **logger**: `ILogger`

#### Defined in

[cordova/src/CordovaBootstrapper.ts:38](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaBootstrapper.ts#L38)

---

### nativeAuthenticationAccess

• `Private` **nativeAuthenticationAccess**: [`INativeAuthenticationAccess`](../interfaces/INativeAuthenticationAccess.md)

#### Defined in

[cordova/src/CordovaBootstrapper.ts:39](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaBootstrapper.ts#L39)

---

### nativeConfigAccess

• `Private` **nativeConfigAccess**: [`INativeConfigAccess`](../interfaces/INativeConfigAccess.md)

#### Defined in

[cordova/src/CordovaBootstrapper.ts:40](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaBootstrapper.ts#L40)

---

### nativeDatabaseFactory

• `Private` **nativeDatabaseFactory**: `ILokiJsDatabaseFactory`

#### Defined in

[cordova/src/CordovaBootstrapper.ts:41](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaBootstrapper.ts#L41)

---

### nativeDeviceInfoAccess

• `Private` **nativeDeviceInfoAccess**: [`INativeDeviceInfoAccess`](../interfaces/INativeDeviceInfoAccess.md)

#### Defined in

[cordova/src/CordovaBootstrapper.ts:42](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaBootstrapper.ts#L42)

---

### nativeEventBus

• `Private` **nativeEventBus**: [`INativeEventBus`](../interfaces/INativeEventBus.md)

#### Defined in

[cordova/src/CordovaBootstrapper.ts:43](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaBootstrapper.ts#L43)

---

### nativeFileAccess

• `Private` **nativeFileAccess**: [`INativeFileAccess`](../interfaces/INativeFileAccess.md)

#### Defined in

[cordova/src/CordovaBootstrapper.ts:44](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaBootstrapper.ts#L44)

---

### nativeKeychainAccess

• `Private` **nativeKeychainAccess**: [`INativeKeychainAccess`](../interfaces/INativeKeychainAccess.md)

#### Defined in

[cordova/src/CordovaBootstrapper.ts:45](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaBootstrapper.ts#L45)

---

### nativeLaunchOptions

• `Private` **nativeLaunchOptions**: [`INativeLaunchOptions`](../interfaces/INativeLaunchOptions.md)

#### Defined in

[cordova/src/CordovaBootstrapper.ts:50](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaBootstrapper.ts#L50)

---

### nativeLoggerFactory

• `Private` **nativeLoggerFactory**: [`INativeLoggerFactory`](../interfaces/INativeLoggerFactory.md)

#### Defined in

[cordova/src/CordovaBootstrapper.ts:46](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaBootstrapper.ts#L46)

---

### nativeNotificationAccess

• `Private` **nativeNotificationAccess**: [`INativeNotificationAccess`](../interfaces/INativeNotificationAccess.md)

#### Defined in

[cordova/src/CordovaBootstrapper.ts:47](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaBootstrapper.ts#L47)

---

### nativePushNotificationAccess

• `Private` **nativePushNotificationAccess**: [`INativePushNotificationAccess`](../interfaces/INativePushNotificationAccess.md)

#### Defined in

[cordova/src/CordovaBootstrapper.ts:49](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaBootstrapper.ts#L49)

---

### nativeScannerAccess

• `Private` **nativeScannerAccess**: [`INativeScannerAccess`](../interfaces/INativeScannerAccess.md)

#### Defined in

[cordova/src/CordovaBootstrapper.ts:48](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaBootstrapper.ts#L48)

---

### configPath

▪ `Static` `Readonly` **configPath**: `string` = `"config.json"`

#### Defined in

[cordova/src/CordovaBootstrapper.ts:37](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaBootstrapper.ts#L37)

## Accessors

### isInitialized

• `get` **isInitialized**(): `boolean`

Indicates whether the initalisation is finished

#### Returns

`boolean`

#### Implementation of

[INativeBootstrapper](../interfaces/INativeBootstrapper.md).[isInitialized](../interfaces/INativeBootstrapper.md#isinitialized)

#### Defined in

[cordova/src/CordovaBootstrapper.ts:53](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaBootstrapper.ts#L53)

---

### nativeEnvironment

• `get` **nativeEnvironment**(): [`INativeEnvironment`](../interfaces/INativeEnvironment.md)

Environment of initialized native features

#### Returns

[`INativeEnvironment`](../interfaces/INativeEnvironment.md)

#### Implementation of

[INativeBootstrapper](../interfaces/INativeBootstrapper.md).[nativeEnvironment](../interfaces/INativeBootstrapper.md#nativeenvironment)

#### Defined in

[cordova/src/CordovaBootstrapper.ts:57](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaBootstrapper.ts#L57)

## Methods

### handleThemeEvent

▸ `Private` **handleThemeEvent**(`event`): `void`

#### Parameters

| Name    | Type                          |
| :------ | :---------------------------- |
| `event` | [`ThemeEvent`](ThemeEvent.md) |

#### Returns

`void`

#### Defined in

[cordova/src/CordovaBootstrapper.ts:131](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaBootstrapper.ts#L131)

---

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Function for starting the initialization process

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeBootstrapper](../interfaces/INativeBootstrapper.md).[init](../interfaces/INativeBootstrapper.md#init)

#### Defined in

[cordova/src/CordovaBootstrapper.ts:78](https://github.com/js-soft/ts-native-access/blob/a83212d/packages/cordova/src/CordovaBootstrapper.ts#L78)
