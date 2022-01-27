[@js-soft/native-electron](../README.md) / [Exports](../modules.md) / CommonConfigAccess

# Class: CommonConfigAccess

## Implements

-   [`INativeConfigAccess`](../interfaces/INativeConfigAccess.md)

## Table of contents

### Constructors

-   [constructor](CommonConfigAccess.md#constructor)

### Properties

-   [\_dirty](CommonConfigAccess.md#_dirty)
-   [config](CommonConfigAccess.md#config)
-   [defaultConfig](CommonConfigAccess.md#defaultconfig)
-   [eventBus](CommonConfigAccess.md#eventbus)
-   [fileAccess](CommonConfigAccess.md#fileaccess)
-   [logger](CommonConfigAccess.md#logger)
-   [path](CommonConfigAccess.md#path)
-   [refreshConfig](CommonConfigAccess.md#refreshconfig)
-   [runtimeConfig](CommonConfigAccess.md#runtimeconfig)

### Methods

-   [get](CommonConfigAccess.md#get)
-   [initDefaultConfig](CommonConfigAccess.md#initdefaultconfig)
-   [initRuntimeConfig](CommonConfigAccess.md#initruntimeconfig)
-   [isDirty](CommonConfigAccess.md#isdirty)
-   [remove](CommonConfigAccess.md#remove)
-   [save](CommonConfigAccess.md#save)
-   [set](CommonConfigAccess.md#set)

## Constructors

### constructor

• **new CommonConfigAccess**(`path`, `eventBus`)

#### Parameters

| Name       | Type                                                  |
| :--------- | :---------------------------------------------------- |
| `path`     | `string`                                              |
| `eventBus` | [`INativeEventBus`](../interfaces/INativeEventBus.md) |

#### Defined in

common/dist/CommonConfigAccess.d.ts:9

## Properties

### \_dirty

• `Private` **\_dirty**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:10

---

### config

• `Private` **config**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:14

---

### defaultConfig

• `Private` **defaultConfig**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:13

---

### eventBus

• `Private` `Readonly` **eventBus**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:6

---

### fileAccess

• `Private` **fileAccess**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:7

---

### logger

• `Private` **logger**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:8

---

### path

• `Private` `Readonly` **path**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:5

---

### refreshConfig

• `Private` **refreshConfig**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:15

---

### runtimeConfig

• `Private` **runtimeConfig**: `any`

#### Defined in

common/dist/CommonConfigAccess.d.ts:12

## Methods

### get

▸ **get**(`key`): `Result`<`any`, `ApplicationError`\>

Optional: Config object can be accessed directly

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `key` | `string` |

#### Returns

`Result`<`any`, `ApplicationError`\>

#### Implementation of

[INativeConfigAccess](../interfaces/INativeConfigAccess.md).[get](../interfaces/INativeConfigAccess.md#get)

#### Defined in

common/dist/CommonConfigAccess.d.ts:24

---

### initDefaultConfig

▸ **initDefaultConfig**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize the default config (this does not yet require the filesystem to be initialized)

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeConfigAccess](../interfaces/INativeConfigAccess.md).[initDefaultConfig](../interfaces/INativeConfigAccess.md#initdefaultconfig)

#### Defined in

common/dist/CommonConfigAccess.d.ts:16

---

### initRuntimeConfig

▸ **initRuntimeConfig**(`logger`, `fileAccess`): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Initialize the runtime config by reading the existing runtime config from the filesystem

#### Parameters

| Name         | Type                                                      |
| :----------- | :-------------------------------------------------------- |
| `logger`     | `ILogger`                                                 |
| `fileAccess` | [`INativeFileAccess`](../interfaces/INativeFileAccess.md) |

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeConfigAccess](../interfaces/INativeConfigAccess.md).[initRuntimeConfig](../interfaces/INativeConfigAccess.md#initruntimeconfig)

#### Defined in

common/dist/CommonConfigAccess.d.ts:17

---

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Defined in

common/dist/CommonConfigAccess.d.ts:11

---

### remove

▸ **remove**(`key`): `Result`<`void`, `ApplicationError`\>

Remove a key-value pair

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `key` | `string` |

#### Returns

`Result`<`void`, `ApplicationError`\>

#### Implementation of

[INativeConfigAccess](../interfaces/INativeConfigAccess.md).[remove](../interfaces/INativeConfigAccess.md#remove)

#### Defined in

common/dist/CommonConfigAccess.d.ts:26

---

### save

▸ **save**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Save the runtime config on the filesystem

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Implementation of

[INativeConfigAccess](../interfaces/INativeConfigAccess.md).[save](../interfaces/INativeConfigAccess.md#save)

#### Defined in

common/dist/CommonConfigAccess.d.ts:18

---

### set

▸ **set**(`key`, `value`): `Result`<`void`, `ApplicationError`\>

Save a key-value pair in memory

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

common/dist/CommonConfigAccess.d.ts:25
