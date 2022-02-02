[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / INativeLaunchOptions

# Interface: INativeLaunchOptions

Handle launches of the app originating from an open url or open file instruction

## Table of contents

### Methods

- [init](INativeLaunchOptions.md#init)

## Methods

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize handling of launch events. Once initialized, it publishes a [UrlOpenEvent](../classes/UrlOpenEvent.md) when the app was started by an url or a [FileViewEvent](../classes/FileViewEvent.md)
when the app was started to open a file.

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeLaunchOptions.ts:11](https://github.com/js-soft/ts-native-access/blob/0bbfc64/packages/abstractions/src/INativeLaunchOptions.ts#L11)
