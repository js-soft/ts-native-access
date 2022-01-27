[@js-soft/native-electron](../README.md) / [Exports](../modules.md) / ICordovaConfig

# Interface: ICordovaConfig

Configuration for the cordova platform

## Table of contents

### Properties

-   [localNotificationConfig](ICordovaConfig.md#localnotificationconfig)
-   [pushChannelConfig](ICordovaConfig.md#pushchannelconfig)

## Properties

### localNotificationConfig

• **localNotificationConfig**: `Object`

Configuration of the cordova local push notifiction plugin (ios/android)

#### Type declaration

| Name         | Type      |
| :----------- | :-------- |
| `channel`    | `string`  |
| `foreground` | `boolean` |
| `icon`       | `string`  |
| `launch`     | `boolean` |
| `smallIcon`  | `string`  |

#### Defined in

abstractions/dist/INativeConfigAccess.d.ts:126

---

### pushChannelConfig

• **pushChannelConfig**: `Object`

Configuration of the cordova remote push notifiction plugin (ios/android)

#### Type declaration

| Name          | Type      |
| :------------ | :-------- |
| `description` | `string`  |
| `id`          | `string`  |
| `importance`  | `number`  |
| `vibration`   | `boolean` |
| `visibility`  | `number`  |

#### Defined in

abstractions/dist/INativeConfigAccess.d.ts:116
