[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / INativeConfigAccess

# Interface: INativeConfigAccess

Management of default and runtime config. The default config is created during development and delivered as part of the application. The runtime
config is created by the applocation during execution. Default and runtime config are merged to a single config object which can be accessed
through the [get](INativeConfigAccess.md#get) method. The default config is read-only. However, values of the runtime config can "overlay" the default config.

## Table of contents

### Methods

- [get](INativeConfigAccess.md#get)
- [initDefaultConfig](INativeConfigAccess.md#initdefaultconfig)
- [initRuntimeConfig](INativeConfigAccess.md#initruntimeconfig)
- [remove](INativeConfigAccess.md#remove)
- [save](INativeConfigAccess.md#save)
- [set](INativeConfigAccess.md#set)

## Methods

### get

▸ **get**(`key`): `Result`<`any`, `ApplicationError`\>

Read the value of the config associated to the key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Result`<`any`, `ApplicationError`\>

#### Defined in

[src/INativeConfigAccess.ts:152](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/abstractions/src/INativeConfigAccess.ts#L152)

___

### initDefaultConfig

▸ **initDefaultConfig**(`path`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialization of the config module without the requirement of a filesystem.
It loads the default config while keeping the runtime config empty.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | Path where the default config is fetched. |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeConfigAccess.ts:176](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/abstractions/src/INativeConfigAccess.ts#L176)

___

### initRuntimeConfig

▸ **initRuntimeConfig**(`path`, `logger`, `fileAccess`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialization of the runtime config in addition to the default config with the requirement of a filesystem.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | Path where the runtime config is read from the filesystem. |
| `logger` | `ILogger` | - |
| `fileAccess` | [`INativeFileAccess`](INativeFileAccess.md) | - |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeConfigAccess.ts:181](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/abstractions/src/INativeConfigAccess.ts#L181)

___

### remove

▸ **remove**(`key`): `Result`<`void`, `ApplicationError`\>

Remove a key-value pair from the runtime config.
A [ConfigurationRemoveEvent](../classes/ConfigurationRemoveEvent.md) is published on the [INativeEventBus](INativeEventBus.md) after the value was changed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Result`<`void`, `ApplicationError`\>

#### Defined in

[src/INativeConfigAccess.ts:165](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/abstractions/src/INativeConfigAccess.ts#L165)

___

### save

▸ **save**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Save the runtime config on the filesystem.
A [ConfigurationSaveEvent](../classes/ConfigurationSaveEvent.md) is published on the [INativeEventBus](INativeEventBus.md) after the value was changed.

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeConfigAccess.ts:170](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/abstractions/src/INativeConfigAccess.ts#L170)

___

### set

▸ **set**(`key`, `value`): `Result`<`void`, `ApplicationError`\>

Change or add a value of/to the runtime config - in memory. To persist the change onto the filesystem, call [save](INativeConfigAccess.md#save).
A [ConfigurationSetEvent](../classes/ConfigurationSetEvent.md) is published on the [INativeEventBus](INativeEventBus.md) after the value was changed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`Result`<`void`, `ApplicationError`\>

#### Defined in

[src/INativeConfigAccess.ts:159](https://github.com/js-soft/ts-native-access/blob/feba5fc/packages/abstractions/src/INativeConfigAccess.ts#L159)
