import { Result } from "@js-soft/ts-utils";

/**
 * Meta information about a file
 */
export interface INativeFileMetadata {
    /**
     * Name of the file
     */
    name: string;
    /**
     * Path to the file relative to the {@link storage}
     */
    path: string;
    /**
     * storage location of the file
     */
    storage?: NativeFileStorage;
    /**
     * Mime type of the file used to determine which applications can be used to open the file
     */
    mimeType?: string;
    /**
     * Size of the file
     */
    size?: number;
    /**
     * Modification date
     */
    modifiedAt?: string;
}

/**
 * Available storage locations
 */
export enum NativeFileStorage {
    /**
     * Used for storing temporary files
     */
    Temp = "temp",
    /**
     * Home folder of the user
     */
    Home = "home",
    /**
     * Used for storing application data on desktop
     */
    Data = "data",
    /**
     * Used for storing application data on mobile
     */
    App = "app"
}

/**
 *
 */
export interface INativeFile {
    data: Uint8Array | string;
    metadata: INativeFileMetadata;
}

export interface INativeDirectoryMetadata {
    modifiedAt?: string;
    path: string;
    storage?: NativeFileStorage;
}

export interface INativeDirectory {
    files: INativeFileMetadata[];
    directories: INativeDirectoryMetadata[];
    metadata: INativeDirectoryMetadata;
}

/**
 * Access the native filesystem (read/write)
 */
export interface INativeFileAccess {
    /**
     * Retrieve meta information about the specified file
     * @param path path to the file relative to the {@link storage}
     * @param storage storage location of the file
     */
    infoFile(path: string, storage?: NativeFileStorage): Promise<Result<INativeFileMetadata>>;
    /**
     * Read the data of the specified file as a string
     * @param path path to the file relative to the {@link storage}
     * @param storage storage location of the file
     */
    readFileAsText(path: string, storage?: NativeFileStorage): Promise<Result<string>>;
    /**
     * Read the data of the specified file as a an array
     * @param path path to the file relative to the {@link storage}
     * @param storage storage location of the file
     */
    readFileAsBinary(path: string, storage?: NativeFileStorage): Promise<Result<Uint8Array>>;
    /**
     * Write data to a file
     * @param path path to the file relative to the {@link storage}
     * @param data data to write to the file
     * @param storage storage location of the file
     * @param append overwrite file or append data on the end of the file
     */
    writeFile(path: string, data: Uint8Array | string, storage?: NativeFileStorage, append?: boolean): Promise<Result<void>>;
    /**
     * Delete specified file
     * @param path path to the file relative to the {@link storage}
     * @param storage storage location of the file
     */
    deleteFile(path: string, storage?: NativeFileStorage): Promise<Result<void>>;
    /**
     * Test if a file exists
     * @param path path to the file relative to the {@link storage}
     * @param storage storage location of the file
     */
    existsFile(path: string, storage?: NativeFileStorage): Promise<Result<boolean>>;
    /**
     * Retrieve information about a specified directory
     * @param path path of the directory relative to the {@link storage}
     * @param storage storage location of the directory
     */
    infoDirectory(path: string, storage?: NativeFileStorage): Promise<Result<INativeDirectory>>;
    /**
     * Create a directory
     * @param path path of the directory relative to the {@link storage}
     * @param storage storage location of the directory
     */
    createDirectory(path: string, storage?: NativeFileStorage): Promise<Result<void>>;
    /**
     * Delete a directory
     * @param path path of the directory relative to the {@link storage}
     * @param storage storage location of the directory
     */
    deleteDirectory(path: string, storage?: NativeFileStorage): Promise<Result<void>>;
    /**
     * Test if a directory exists
     * @param path path of the directory relative to the {@link storage}
     * @param storage storage location of the directory
     */
    existsDirectory(path: string, storage?: NativeFileStorage): Promise<Result<boolean>>;
    /**
     * Open the file selection dialog of the operating system and receive the selected file
     */
    select(): Promise<Result<INativeFile>>;
    /**
     * Open a file with the standard application specified by the operating system
     * @param path path to the file relative to the {@link storage}
     * @param storage storage location of the file
     */
    openFile(path: string, storage?: NativeFileStorage): Promise<Result<void>>;
    /**
     * Create and open a file with the standard application specified by the operating system
     * @param content content of the file
     * @param metadata metadata of the file
     */
    openFileContent(content: Uint8Array, metadata: INativeFileMetadata): Promise<Result<void>>;
    /**
     * Initialize the native features and create a folder structure
     */
    init(): Promise<Result<void>>;
}
