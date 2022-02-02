[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / ICordovaConfig

# Interface: ICordovaConfig

Configuration for the cordova platform

## Table of contents

### Properties

- [localNotificationConfig](ICordovaConfig.md#localnotificationconfig)
- [pushChannelConfig](ICordovaConfig.md#pushchannelconfig)

## Properties

### localNotificationConfig

• **localNotificationConfig**: `Object`

Configuration of the cordova local push notifiction plugin (ios/android)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `channel` | `string` |
| `foreground` | `boolean` |
| `icon` | `string` |
| `launch` | `boolean` |
| `smallIcon` | `string` |

#### Defined in

[src/INativeConfigAccess.ts:133](https://github.com/js-soft/ts-native-access/blob/2fee55d/packages/abstractions/src/INativeConfigAccess.ts#L133)

___

### pushChannelConfig

• **pushChannelConfig**: `Object`

Configuration of the cordova remote push notifiction plugin (ios/android)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `id` | `string` |
| `importance` | `number` |
| `vibration` | `boolean` |
| `visibility` | `number` |

#### Defined in

[src/INativeConfigAccess.ts:123](https://github.com/js-soft/ts-native-access/blob/2fee55d/packages/abstractions/src/INativeConfigAccess.ts#L123)
