[@js-soft/native-cordova](../README.md) / [Exports](../modules.md) / IElectronConfig

# Interface: IElectronConfig

Configuration of the electron platform

## Table of contents

### Properties

- [fcmSenderId](IElectronConfig.md#fcmsenderid)
- [persistentIDs](IElectronConfig.md#persistentids)
- [persistentIDsremoveDays](IElectronConfig.md#persistentidsremovedays)
- [pushCredentials](IElectronConfig.md#pushcredentials)

## Properties

### fcmSenderId

• **fcmSenderId**: `string`

Firebase cloud messaging sender-id which can be accessed through the firebase console

#### Defined in

abstractions/dist/INativeConfigAccess.d.ts:90

___

### persistentIDs

• **persistentIDs**: `any`

Ids of remote push notifications are stored to prevent push notifications to be displayed multiple times

#### Defined in

abstractions/dist/INativeConfigAccess.d.ts:98

___

### persistentIDsremoveDays

• **persistentIDsremoveDays**: `number`

Days after which the stored ids of received remote push notifications should be deleted

#### Defined in

abstractions/dist/INativeConfigAccess.d.ts:86

___

### pushCredentials

• `Optional` **pushCredentials**: `any`

Remote push notification credentials created by app during initialization

#### Defined in

abstractions/dist/INativeConfigAccess.d.ts:94
