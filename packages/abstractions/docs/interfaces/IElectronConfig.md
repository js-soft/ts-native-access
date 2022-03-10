[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / IElectronConfig

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

[src/INativeConfigAccess.ts:95](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/abstractions/src/INativeConfigAccess.ts#L95)

___

### persistentIDs

• **persistentIDs**: `any`

Ids of remote push notifications are stored to prevent push notifications to be displayed multiple times

#### Defined in

[src/INativeConfigAccess.ts:103](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/abstractions/src/INativeConfigAccess.ts#L103)

___

### persistentIDsremoveDays

• **persistentIDsremoveDays**: `number`

Days after which the stored ids of received remote push notifications should be deleted

#### Defined in

[src/INativeConfigAccess.ts:91](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/abstractions/src/INativeConfigAccess.ts#L91)

___

### pushCredentials

• `Optional` **pushCredentials**: `any`

Remote push notification credentials created by app during initialization

#### Defined in

[src/INativeConfigAccess.ts:99](https://github.com/js-soft/ts-native-access/blob/99aa731/packages/abstractions/src/INativeConfigAccess.ts#L99)
