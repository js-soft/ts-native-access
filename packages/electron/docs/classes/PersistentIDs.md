[@js-soft/native-electron](../README.md) / [Exports](../modules.md) / PersistentIDs

# Class: PersistentIDs

## Table of contents

### Constructors

- [constructor](PersistentIDs.md#constructor)

### Properties

- [config](PersistentIDs.md#config)
- [ids](PersistentIDs.md#ids)

### Methods

- [addID](PersistentIDs.md#addid)
- [getIDs](PersistentIDs.md#getids)
- [load](PersistentIDs.md#load)
- [removeID](PersistentIDs.md#removeid)
- [removeIDsSinceDays](PersistentIDs.md#removeidssincedays)
- [save](PersistentIDs.md#save)

## Constructors

### constructor

• **new PersistentIDs**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`INativeConfigAccess`](../interfaces/INativeConfigAccess.md) |

#### Defined in

[electron/src/ElectronPushNotificationAccess.ts:16](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/electron/src/ElectronPushNotificationAccess.ts#L16)

## Properties

### config

• `Readonly` **config**: [`INativeConfigAccess`](../interfaces/INativeConfigAccess.md)

___

### ids

• `Private` **ids**: `Record`<`string`, `number`\>

#### Defined in

[electron/src/ElectronPushNotificationAccess.ts:18](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/electron/src/ElectronPushNotificationAccess.ts#L18)

## Methods

### addID

▸ **addID**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[electron/src/ElectronPushNotificationAccess.ts:32](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/electron/src/ElectronPushNotificationAccess.ts#L32)

___

### getIDs

▸ **getIDs**(): `string`[]

#### Returns

`string`[]

#### Defined in

[electron/src/ElectronPushNotificationAccess.ts:29](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/electron/src/ElectronPushNotificationAccess.ts#L29)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Defined in

[electron/src/ElectronPushNotificationAccess.ts:25](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/electron/src/ElectronPushNotificationAccess.ts#L25)

___

### removeID

▸ **removeID**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[electron/src/ElectronPushNotificationAccess.ts:35](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/electron/src/ElectronPushNotificationAccess.ts#L35)

___

### removeIDsSinceDays

▸ **removeIDsSinceDays**(`days`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `days` | `number` |

#### Returns

`void`

#### Defined in

[electron/src/ElectronPushNotificationAccess.ts:38](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/electron/src/ElectronPushNotificationAccess.ts#L38)

___

### save

▸ **save**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[electron/src/ElectronPushNotificationAccess.ts:20](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/electron/src/ElectronPushNotificationAccess.ts#L20)
