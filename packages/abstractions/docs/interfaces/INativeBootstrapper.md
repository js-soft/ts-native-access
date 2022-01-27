[@js-soft/native-abstractions](../README.md) / [Exports](../modules.md) / INativeBootstrapper

# Interface: INativeBootstrapper

Initialization of native features

## Table of contents

### Properties

- [isInitialized](INativeBootstrapper.md#isinitialized)
- [nativeEnvironment](INativeBootstrapper.md#nativeenvironment)

### Methods

- [init](INativeBootstrapper.md#init)

## Properties

### isInitialized

• **isInitialized**: `boolean`

Indicates whether the initalisation is finished

#### Defined in

[src/INativeBootstrapper.ts:11](https://github.com/js-soft/ts-native-access/blob/f2bbc45/packages/abstractions/src/INativeBootstrapper.ts#L11)

___

### nativeEnvironment

• **nativeEnvironment**: [`INativeEnvironment`](INativeEnvironment.md)

Environment of initialized native features

#### Defined in

[src/INativeBootstrapper.ts:15](https://github.com/js-soft/ts-native-access/blob/f2bbc45/packages/abstractions/src/INativeBootstrapper.ts#L15)

## Methods

### init

▸ **init**(): `Promise`<`Result`<`void`, `ApplicationError`\>\>

Function for starting the initialization process

#### Returns

`Promise`<`Result`<`void`, `ApplicationError`\>\>

#### Defined in

[src/INativeBootstrapper.ts:19](https://github.com/js-soft/ts-native-access/blob/f2bbc45/packages/abstractions/src/INativeBootstrapper.ts#L19)
