[@js-soft/native-cordova](../README.md) / [Exports](../modules.md) / IAppConfig

# Interface: IAppConfig

Default configuration of the app: This is the set of configurations utilized by the native implementations.
Additional default configuration entries can be added to the configuration file on demand and will be available to the app at runtime.

## Table of contents

### Properties

- [applicationId](IAppConfig.md#applicationid)
- [cordova](IAppConfig.md#cordova)
- [electron](IAppConfig.md#electron)
- [firebase](IAppConfig.md#firebase)
- [launchOptions](IAppConfig.md#launchoptions)
- [localforage](IAppConfig.md#localforage)
- [name](IAppConfig.md#name)
- [pushToken](IAppConfig.md#pushtoken)
- [type](IAppConfig.md#type)

## Properties

### applicationId

• **applicationId**: `string`

Id of the app

#### Defined in

abstractions/dist/INativeConfigAccess.d.ts:21

___

### cordova

• `Optional` **cordova**: [`ICordovaConfig`](ICordovaConfig.md)

#### Defined in

abstractions/dist/INativeConfigAccess.d.ts:30

___

### electron

• `Optional` **electron**: [`IElectronConfig`](IElectronConfig.md)

#### Defined in

abstractions/dist/INativeConfigAccess.d.ts:31

___

### firebase

• `Optional` **firebase**: [`IFirebaseConfig`](IFirebaseConfig.md)

#### Defined in

abstractions/dist/INativeConfigAccess.d.ts:32

___

### launchOptions

• `Optional` **launchOptions**: [`ILaunchOptionsConfig`](ILaunchOptionsConfig.md)

#### Defined in

abstractions/dist/INativeConfigAccess.d.ts:34

___

### localforage

• `Optional` **localforage**: [`ILocalForageConfig`](ILocalForageConfig.md)

#### Defined in

abstractions/dist/INativeConfigAccess.d.ts:33

___

### name

• **name**: `string`

Name of the app

#### Defined in

abstractions/dist/INativeConfigAccess.d.ts:17

___

### pushToken

• **pushToken**: ``null`` \| `string`

Remote push notification token generated by the app during initialization

#### Defined in

abstractions/dist/INativeConfigAccess.d.ts:29

___

### type

• **type**: `AppType`

Development type of the app

#### Defined in

abstractions/dist/INativeConfigAccess.d.ts:25
