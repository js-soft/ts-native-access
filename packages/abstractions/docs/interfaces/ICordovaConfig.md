[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / ICordovaConfig

# Interface: ICordovaConfig

## Table of contents

### Properties

- [localNotificationConfig](ICordovaConfig.md#localnotificationconfig)
- [pushChannelConfig](ICordovaConfig.md#pushchannelconfig)

## Properties

### localNotificationConfig

• **localNotificationConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `channel` | `string` |
| `foreground` | `boolean` |
| `icon` | `string` |
| `launch` | `boolean` |
| `smallIcon` | `string` |

#### Defined in

[src/INativeConfigAccess.ts:72](https://github.com/js-soft/ts-native-access/blob/93dbc36/packages/abstractions/src/INativeConfigAccess.ts#L72)

___

### pushChannelConfig

• **pushChannelConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `id` | `string` |
| `importance` | `number` |
| `vibration` | `boolean` |
| `visibility` | `number` |

#### Defined in

[src/INativeConfigAccess.ts:65](https://github.com/js-soft/ts-native-access/blob/93dbc36/packages/abstractions/src/INativeConfigAccess.ts#L65)
