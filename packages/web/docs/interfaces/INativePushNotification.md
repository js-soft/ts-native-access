[@js-soft/native-web](../README.md) / [Exports](../modules.md) / INativePushNotification

# Interface: INativePushNotification

Remote push notification

## Table of contents

### Properties

- [content](INativePushNotification.md#content)
- [foreground](INativePushNotification.md#foreground)
- [id](INativePushNotification.md#id)
- [limitedProcessingTime](INativePushNotification.md#limitedprocessingtime)

## Properties

### content

• **content**: `any`

Content sent as part of the notification

#### Defined in

abstractions/dist/INativePushNotification.d.ts:8

___

### foreground

• `Optional` **foreground**: `boolean`

Indicator wether the app was in the foreground when receiving the notification

#### Defined in

abstractions/dist/INativePushNotification.d.ts:16

___

### id

• `Optional` **id**: `string`

Id of the notification

#### Defined in

abstractions/dist/INativePushNotification.d.ts:12

___

### limitedProcessingTime

• `Optional` **limitedProcessingTime**: `string`

Time available for processing the notification (ios)

#### Defined in

abstractions/dist/INativePushNotification.d.ts:20
