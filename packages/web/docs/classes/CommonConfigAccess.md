[@js-soft/native-web](../README.md) / [Exports](../modules.md) / CommonConfigAccess

# Class: CommonConfigAccess

## Implements

-   [`INativeConfigAccess`](../interfaces/INativeConfigAccess.md)

## Table of contents

### Constructors

-   [constructor](CommonConfigAccess.md#constructor)

### Properties

-   [config](CommonConfigAccess.md#config)
-   [defaultConfig](CommonConfigAccess.md#defaultconfig)
-   [eventBus](CommonConfigAccess.md#eventbus)
-   [fileAccess](CommonConfigAccess.md#fileaccess)
-   [logger](CommonConfigAccess.md#logger)
-   [refreshConfig](CommonConfigAccess.md#refreshconfig)
-   [runtimeConfig](CommonConfigAccess.md#runtimeconfig)
-   [runtimeConfigPath](CommonConfigAccess.md#runtimeconfigpath)

### Methods

-   [get](CommonConfigAccess.md#get)
-   [initDefaultConfig](CommonConfigAccess.md#initdefaultconfig)
-   [initRuntimeConfig](CommonConfigAccess.md#initruntimeconfig)
-   [remove](CommonConfigAccess.md#remove)
-   [save](CommonConfigAccess.md#save)
-   [set](CommonConfigAccess.md#set)

## Constructors

### constructor

• **new CommonConfigAccess**(`eventBus`)

#### Parameters

| Name       | Type                                                  |
| :--------- | :---------------------------------------------------- |
| `eventBus` | [`INativeEventBus`](../interfaces/INativeEventBus.md) |

#### Defined in

common/dist/CommonConfigAccess.d.ts:9

## Properties

### config

• `Private` **config**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:12

---

### defaultConfig

• `Private` **defaultConfig**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:11

---

### eventBus

• `Private` `Readonly` **eventBus**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:5

---

### fileAccess

• `Private` **fileAccess**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:6

---

### logger

• `Private` **logger**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:7

---

### refreshConfig

• `Private` **refreshConfig**: `any`

Merge runtime and default config. This is done after the runtime config changes.
The runtime config can overwrite entries of the default config.

#### Defined in

common/dist/CommonConfigAccess.d.ts:17

---

### runtimeConfig

• `Private` **runtimeConfig**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:10

---

### runtimeConfigPath

• `Private` **runtimeConfigPath**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:8

## Methods

### get

▸ **get**(`key`): `Result`<`any`, `ApplicationError`\>

Read the value of the config associated to the key.

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `key` | `string` |

#### Returns

`Result`<`any`, `ApplicationError`\>

#### Implementation of

[INativeConfigAccess](../interfaces/INativeConfigAccess.md).[get](../interfaces/INativeConfigAccess.md#get)

#### Defined in

common/dist/CommonConfigAccess.d.ts:21

---

### initDefaultConfig

▸ **initDefaultConfig**(`path`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialization of the config module without the requirement of a filesystem.
It loads the default config while keeping the runtime config empty.

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `path` | `string` |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeConfigAccess](../interfaces/INativeConfigAccess.md).[initDefaultConfig](../interfaces/INativeConfigAccess.md#initdefaultconfig)

#### Defined in

common/dist/CommonConfigAccess.d.ts:18

---

### initRuntimeConfig

▸ **initRuntimeConfig**(`path`, `logger`, `fileAccess`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialization of the runtime config in addition to the default config with the requirement of a filesystem.

#### Parameters

| Name         | Type                                                      |
| :----------- | :-------------------------------------------------------- |
| `path`       | `string`                                                  |
| `logger`     | `ILogger`                                                 |
| `fileAccess` | [`INativeFileAccess`](../interfaces/INativeFileAccess.md) |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeConfigAccess](../interfaces/INativeConfigAccess.md).[initRuntimeConfig](../interfaces/INativeConfigAccess.md#initruntimeconfig)

#### Defined in

common/dist/CommonConfigAccess.d.ts:19

---

### remove

▸ **remove**(`key`): `Result`<`void`, `ApplicationError`\>

Remove a key-value pair from the runtime config.
A [ConfigurationRemoveEvent](ConfigurationRemoveEvent.md) is published on the [INativeEventBus](../interfaces/INativeEventBus.md) after the value was changed.

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `key` | `string` |

#### Returns

`Result`<`void`, `ApplicationError`\>

#### Implementation of

[INativeConfigAccess](../interfaces/INativeConfigAccess.md).[remove](../interfaces/INativeConfigAccess.md#remove)

#### Defined in

common/dist/CommonConfigAccess.d.ts:23

---

### save

▸ **save**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Save the runtime config on the filesystem.
A [ConfigurationSaveEvent](ConfigurationSaveEvent.md) is published on the [INativeEventBus](../interfaces/INativeEventBus.md) after the value was changed.

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeConfigAccess](../interfaces/INativeConfigAccess.md).[save](../interfaces/INativeConfigAccess.md#save)

#### Defined in

common/dist/CommonConfigAccess.d.ts:20

---

### set

▸ **set**(`key`, `value`): `Result`<`void`, `ApplicationError`\>

Change or add a value of/to the runtime config - in memory. To persist the change onto the filesystem, call [save](CommonConfigAccess.md#save).
A [ConfigurationSetEvent](ConfigurationSetEvent.md) is published on the [INativeEventBus](../interfaces/INativeEventBus.md) after the value was changed.

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `key`   | `string` |
| `value` | `any`    |

#### Returns

`Result`<`void`, `ApplicationError`\>

#### Implementation of

[INativeConfigAccess](../interfaces/INativeConfigAccess.md).[set](../interfaces/INativeConfigAccess.md#set)

#### Defined in

common/dist/CommonConfigAccess.d.ts:22
