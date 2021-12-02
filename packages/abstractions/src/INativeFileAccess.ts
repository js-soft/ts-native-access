import { Result } from "@js-soft/ts-utils";

export interface INativeFileMetadata {
    name: string;
    path: string;
    storage?: NativeFileStorage;
    mimeType: string | undefined;
    size?: number;
    modifiedAt?: string | undefined;
}

export enum NativeFileStorage {
    Temp = "temp",
    /**
     * C:\Users\<user-id>
     */
    Home = "home",
    /**
     * C:\Users\<user-id>\AppData\Roaming\<app-id>\
     */
    Data = "data",
    /**
     * C:\Program Files\<app-id>\
     */
    App = "app"
}

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

export interface INativeFileAccess {
    infoFile(path: string, storage?: NativeFileStorage): Promise<Result<INativeFileMetadata>>;
    readFileAsText(path: string, storage?: NativeFileStorage): Promise<Result<string>>;
    readFileAsBinary(path: string, storage?: NativeFileStorage): Promise<Result<Uint8Array>>;
    writeFile(path: string, data: Uint8Array | string, storage?: NativeFileStorage, append?: boolean): Promise<Result<void>>;
    deleteFile(path: string, storage?: NativeFileStorage): Promise<Result<void>>;
    existsFile(path: string, storage?: NativeFileStorage): Promise<Result<boolean>>;
    infoDirectory(path: string, storage?: NativeFileStorage): Promise<Result<INativeDirectory>>;
    createDirectory(path: string, storage?: NativeFileStorage): Promise<Result<void>>;
    deleteDirectory(path: string, storage?: NativeFileStorage): Promise<Result<void>>;
    existsDirectory(path: string, storage?: NativeFileStorage): Promise<Result<boolean>>;
    select(): Promise<Result<INativeFile>>;
    openFile(path: string, storage?: NativeFileStorage): Promise<Result<void>>;
    openFileContent(content: Uint8Array, metadata: INativeFileMetadata): Promise<Result<void>>;
    init(): Promise<Result<void>>;
}
