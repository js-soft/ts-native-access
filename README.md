# Native

[![GitHub Actions CI](https://github.com/js-soft/ts-native-access/workflows/Publish/badge.svg)](https://github.com/js-soft/ts-native-access/actions?query=workflow%3APublish)

This monorepo consolidates the following packages used for acessing native operating system functionalities in hybrid web-apps:

| Package                                | Version                                                                                                                               |
| :------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| [abstractions](packages/abstractions/) | [![version](https://badge.fury.io/js/@js-soft%2fnative-abstractions.svg)](https://www.npmjs.com/package/@js-soft/native-abstractions) |
| [commons](packages/common/)            | [![version](https://badge.fury.io/js/@js-soft%2fnative-common.svg)](https://www.npmjs.com/package/@js-soft/native-common)             |
| [cordova](packages/cordova/)           | [![version](https://badge.fury.io/js/@js-soft%2fnative-cordova.svg)](https://www.npmjs.com/package/@js-soft/native-cordova)           |
| [electron](packages/electron/)         | [![version](https://badge.fury.io/js/@js-soft%2fnative-electron.svg)](https://www.npmjs.com/package/@js-soft/native-electron)         |
| [web](packages/web/)                   | [![version](https://badge.fury.io/js/@js-soft%2fnative-web.svg)](https://www.npmjs.com/package/@js-soft/native-web)                   |

## Documentation

The packages above provide the following modules

| Module                                                                                                                                                                            | Fully Operational                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Partly Operational                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Bootstrapper**: initializes native features and creates a folder structure on the filesystem.                                                                                   | ![Android](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/AND.png)![iOS](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/IOS.png)![Linux](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/LIN.png)![Mac](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/MAC.png)![Windows](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/WIN.png)![Web](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/COS.png)   |                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Authentication**: utilizes fingerprint scanners to verify the identity of the user.                                                                                             | ![Android](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/AND.png)![iOS](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/IOS.png)                                                                                                                                                                                                                                                                                                                                                                                                                                             | ![Linux](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/LIN.png)![Mac](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/MAC.png)![Windows](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/WIN.png)![Web](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/COS.png) |
| **Device Info**: provides information about the device like language settings or operating system.                                                                                | ![Android](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/AND.png)![iOS](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/IOS.png)![Mac](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/MAC.png)![Windows](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/WIN.png)                                                                                                                                                                                                                       | ![Linux](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/LIN.png)![Web](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/COS.png)                                                                                                                                                                                                                       |
| **File Access**: provides the most common file system operations like delete file, read file, remove file, etc.                                                                   | ![Android](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/AND.png)![iOS](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/IOS.png)![Mac](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/MAC.png)![Windows](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/WIN.png) ![Linux](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/LIN.png)                                                                                                           | ![Web](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/COS.png)                                                                                                                                                                                                                                                                                                                                  |
| **Keychain Access**: stores key-value pairs in the native keychain of the device.                                                                                                 | ![Android](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/AND.png)![iOS](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/IOS.png)![Mac](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/MAC.png)![Windows](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/WIN.png) ![Linux](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/LIN.png)                                                                                                           | ![Web](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/COS.png)                                                                                                                                                                                                                                                                                                                                  |
| **Keychain Access**: show notifications to the user while the app is open or in the backgound and handle user actions such as text input, button press or notificatio nselection. | ![Android](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/AND.png)![iOS](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/IOS.png)![Mac](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/MAC.png)![Windows](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/WIN.png) ![Linux](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/LIN.png) ![Web](https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/16x16/COS.png) |

### Remote Notifications

The remote notification module can receive and process remote push notifications.

### Configuration

The configuration module provides a configuration object defined during design time and the option to store and load additional configurations created during runtime.

### Database

The database module can be used to create a lokijs database with an integrated persistence adapter.

### Event Bus

The event bus moule can be used to handle events like incoming remote push notifications.

### Logger

The logger module enables software components to log information to the console and store it on the filesystem.

### QR-Scanner

The qr-scanner module accesses the camera of the device to scan qr-codes.

### Launch Options

The launch options module can be used to e.g start the app trough an url.

### Tests

No automated tests available. Manaul documatation of operation status:
--table--

## Contribute

Currently contribution to this project is not possible. This will change soon.

## License

You can find the licenses of the individual packages in the corresponding sub-folder's README.md file.
