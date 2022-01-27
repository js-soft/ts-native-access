[@js-soft/native-web](../README.md) / [Exports](../modules.md) / INativeBootstrapper

# Interface: INativeBootstrapper

Initialization of native features

## Implemented by

-   [`WebBootstrapper`](../classes/WebBootstrapper.md)

## Table of contents

### Properties

-   [isInitialized](INativeBootstrapper.md#isinitialized)
-   [nativeEnvironment](INativeBootstrapper.md#nativeenvironment)

### Methods

-   [init](INativeBootstrapper.md#init)

## Properties

### isInitialized

• **isInitialized**: `boolean`

Indicates whether the initalisation is finished

#### Defined in

abstractions/dist/INativeBootstrapper.d.ts:10

---

### nativeEnvironment

• **nativeEnvironment**: [`INativeEnvironment`](INativeEnvironment.md)

Environment of initialized native features

#### Defined in

abstractions/dist/INativeBootstrapper.d.ts:14

## Methods

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Function for starting the initialization process

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

abstractions/dist/INativeBootstrapper.d.ts:18
