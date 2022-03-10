[@js-soft/native-cordova](../README.md) / [Exports](../modules.md) / CommonScannerAccess

# Class: CommonScannerAccess

## Implements

-   [`INativeScannerAccess`](../interfaces/INativeScannerAccess.md)

## Table of contents

### Constructors

-   [constructor](CommonScannerAccess.md#constructor)

### Properties

-   [logger](CommonScannerAccess.md#logger)

### Methods

-   [scan](CommonScannerAccess.md#scan)

## Constructors

### constructor

• **new CommonScannerAccess**(`logger`)

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `logger` | `ILogger` |

#### Defined in

common/dist/CommonScannerAccess.d.ts:6

## Properties

### logger

• `Private` `Readonly` **logger**: `any`

#### Defined in

common/dist/CommonScannerAccess.d.ts:5

## Methods

### scan

▸ **scan**(): `Promise`<`Result`<`string`, `ApplicationError`\>\>

Scan qr-code

#### Returns

`Promise`<`Result`<`string`, `ApplicationError`\>\>

#### Implementation of

[INativeScannerAccess](../interfaces/INativeScannerAccess.md).[scan](../interfaces/INativeScannerAccess.md#scan)

#### Defined in

common/dist/CommonScannerAccess.d.ts:7
