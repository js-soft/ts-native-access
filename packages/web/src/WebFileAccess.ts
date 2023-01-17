import {
    ILocalForageConfig,
    INativeConfigAccess,
    INativeDirectory,
    INativeDirectoryMetadata,
    INativeFile,
    INativeFileAccess,
    INativeFileMetadata,
    NativeErrorCodes,
    NativeFileStorage
} from "@js-soft/native-abstractions";
import { ApplicationError, Result } from "@js-soft/ts-utils";
import localforage from "localforage";

interface FileEntry {
    isDirectory: boolean;
    directory: string;
    content: INativeFile;
}

interface DirectoryEntry {
    isDirectory: boolean;
    content: INativeDirectory;
}

export class WebFileAccess implements INativeFileAccess {
    public constructor(private readonly config: INativeConfigAccess) {}

    private localStorage: LocalForage;
    private sessionStorage: LocalForage;

    public async init(): Promise<Result<void>> {
        const localforageConfig: ILocalForageConfig = this.config.get("localforage").value;
        localforage.config(localforageConfig);

        this.localStorage = localforage.createInstance({
            name: "persistent"
        });

        this.sessionStorage = localforage.createInstance({
            name: "temporary"
        });

        const rootDirectoryLocalStorageString = await this.localStorage.getItem("./");
        if (!rootDirectoryLocalStorageString) await this.createDirectory("./");

        const rootDirectorySessionStorageString = await this.sessionStorage.getItem("./");
        if (!rootDirectorySessionStorageString) await this.createDirectory("./", NativeFileStorage.Temp);

        return Result.ok(undefined);
    }

    private normalizePath(path: string): string {
        if (path === "./") return path;
        if (path.endsWith("/")) path = path.substring(0, path.length - 1);
        if (path.startsWith(".//")) path = `./${path.substring(3, path.length)}`;
        if (!path.startsWith(".")) {
            if (path[1] === "/") path = `.${path}`;
            else if (path[1] !== "/") path = `./${path}`;
        }
        return path;
    }

    public async infoFile(path: string, storage: NativeFileStorage = NativeFileStorage.App): Promise<Result<INativeFileMetadata>> {
        try {
            const normalizedPath: string = this.normalizePath(path);
            const _fs = storage === NativeFileStorage.Temp ? this.sessionStorage : this.localStorage;
            const fileEntry: FileEntry | null = await _fs.getItem(normalizedPath);
            if (!fileEntry) {
                return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_NOT_FOUND, `File ${normalizedPath} not found!`));
            }

            if (fileEntry.isDirectory) return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_INVALID_MODIFICATION, `${normalizedPath} is no file!`));
            const file: INativeFile = fileEntry.content;
            return Result.ok(file.metadata);
        } catch (err) {
            return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_UNKNOWN, `${err}`, err));
        }
    }

    public async readFileAsText(path: string, storage: NativeFileStorage = NativeFileStorage.App): Promise<Result<string>> {
        try {
            const normalizedPath: string = this.normalizePath(path);
            const _fs = storage === NativeFileStorage.Temp ? this.sessionStorage : this.localStorage;
            const fileEntry: FileEntry | null = await _fs.getItem(normalizedPath);
            if (!fileEntry) {
                return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_NOT_FOUND, `File ${normalizedPath} not found!`));
            }

            if (fileEntry.isDirectory) return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_INVALID_MODIFICATION, `${normalizedPath} is no file!`));
            return Result.ok(fileEntry.content.data as string);
        } catch (err) {
            return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_UNKNOWN, `${err}`, err));
        }
    }

    public async readFileAsBinary(path: string, storage: NativeFileStorage = NativeFileStorage.App): Promise<Result<Uint8Array>> {
        try {
            const normalizedPath: string = this.normalizePath(path);
            const _fs = storage === NativeFileStorage.Temp ? this.sessionStorage : this.localStorage;
            const fileEntry: FileEntry | null = await _fs.getItem(normalizedPath);
            if (!fileEntry) {
                return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_NOT_FOUND, `File ${normalizedPath} not found!`));
            }

            if (fileEntry.isDirectory) return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_INVALID_MODIFICATION, `${normalizedPath} is no file!`));
            const data: Uint8Array = fileEntry.content.data as Uint8Array;
            return Result.ok(data);
        } catch (err) {
            return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_UNKNOWN, `${err}`, err));
        }
    }

    public async writeFile(path: string, data: Uint8Array | string, storage: NativeFileStorage = NativeFileStorage.App, append = false): Promise<Result<void>> {
        try {
            const _fs = storage === NativeFileStorage.Temp ? this.sessionStorage : this.localStorage;

            const normalizedFilePath: string = this.normalizePath(path);
            const normalizedParentDirectoryPath: string = this.normalizePath(normalizedFilePath.substring(0, normalizedFilePath.lastIndexOf("/") + 1));
            const fileName: string = normalizedFilePath.substring(normalizedFilePath.lastIndexOf("/") + 1, normalizedFilePath.length);

            if (append) {
                if (typeof data === "string") {
                    const result: Result<string> = await this.readFileAsText(path, storage);
                    if (result.isSuccess) {
                        data = result.value + data;
                    } else {
                        return Result.fail(result.error);
                    }
                } else {
                    const result: Result<Uint8Array> = await this.readFileAsBinary(path, storage);
                    if (result.isSuccess) {
                        const newdata = new Uint8Array(result.value.length + data.length);
                        newdata.set(result.value);
                        newdata.set(data);
                        data = newdata;
                    } else {
                        return Result.fail(result.error);
                    }
                }
            }

            const fileMetadata: INativeFileMetadata = {
                modifiedAt: new Date().toISOString(),
                path: normalizedFilePath,
                storage: storage,
                name: fileName,
                mimeType: undefined,
                size: typeof data !== "string" ? data.length : new Blob([data]).size
            };
            const file: INativeFile = {
                data: data,
                metadata: fileMetadata
            };
            const fileEntry: FileEntry = {
                isDirectory: false,
                directory: normalizedParentDirectoryPath,
                content: file
            };

            const parentDirectoryEntry: DirectoryEntry | null = await _fs.getItem(normalizedParentDirectoryPath);
            if (!parentDirectoryEntry) {
                return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_NOT_FOUND, `Parent directory ${normalizedParentDirectoryPath} does not exist!`));
            }

            if (!parentDirectoryEntry.isDirectory) {
                return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_INVALID_MODIFICATION, `Parent directory ${normalizedParentDirectoryPath} is no directory!`));
            }
            if (append) {
                // Delete metadata from parent directory if file is updated
                parentDirectoryEntry.content.files = parentDirectoryEntry.content.files.filter((file) => file.path === fileMetadata.path && file.storage === fileMetadata.storage);
            }
            parentDirectoryEntry.content.files.push(fileMetadata);
            await _fs.setItem(normalizedParentDirectoryPath, parentDirectoryEntry);
            await _fs.setItem(normalizedFilePath, fileEntry);

            return Result.ok(undefined);
        } catch (err) {
            return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_UNKNOWN, `${err}`, err));
        }
    }

    public async deleteFile(path: string, storage: NativeFileStorage = NativeFileStorage.App): Promise<Result<void>> {
        try {
            const normalizedFilePath: string = this.normalizePath(path);
            const _fs = storage === NativeFileStorage.Temp ? this.sessionStorage : this.localStorage;
            const normalizedParentDirectoryPath: string = this.normalizePath(normalizedFilePath.substring(0, normalizedFilePath.lastIndexOf("/") + 1));
            const parentDirectoryEntry: DirectoryEntry | null = await _fs.getItem(normalizedParentDirectoryPath);
            if (!parentDirectoryEntry) {
                return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_NOT_FOUND, `Parent directory ${normalizedParentDirectoryPath} does not exist!`));
            }

            if (!parentDirectoryEntry.isDirectory) {
                return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_INVALID_MODIFICATION, `Parent directory ${normalizedParentDirectoryPath} is no directory!`));
            }

            const files = parentDirectoryEntry.content.files.filter((element) => element.path !== normalizedFilePath);
            parentDirectoryEntry.content.files = files;
            await _fs.setItem(normalizedParentDirectoryPath, parentDirectoryEntry);
            await _fs.removeItem(normalizedFilePath);

            return Result.ok(undefined);
        } catch (err) {
            return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_UNKNOWN, `${err}`, err));
        }
    }

    public async existsFile(path: string, storage: NativeFileStorage = NativeFileStorage.App): Promise<Result<boolean>> {
        try {
            const normalizedFilePath = this.normalizePath(path);
            const _fs = storage === NativeFileStorage.Temp ? this.sessionStorage : this.localStorage;
            const fileEntry: FileEntry | null = await _fs.getItem(normalizedFilePath);

            return Result.ok(!!fileEntry && !fileEntry.isDirectory);
        } catch (err) {
            return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_UNKNOWN, `${err}`, err));
        }
    }

    public async infoDirectory(path: string, storage: NativeFileStorage = NativeFileStorage.App): Promise<Result<INativeDirectory>> {
        try {
            const normalizedFilePath = this.normalizePath(path);
            const _fs = storage === NativeFileStorage.Temp ? this.sessionStorage : this.localStorage;
            const directoryEntry: DirectoryEntry | null = await _fs.getItem(normalizedFilePath);
            if (!directoryEntry) {
                return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_NOT_FOUND, "INativeDirectory not found"));
            }

            if (!directoryEntry.isDirectory) return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_INVALID_MODIFICATION, "Is no directory"));
            return Result.ok(directoryEntry.content);
        } catch (err) {
            return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_UNKNOWN, `${err}`, err));
        }
    }

    public async createDirectory(path: string, storage: NativeFileStorage = NativeFileStorage.App): Promise<Result<void>> {
        try {
            const normalizedDirectoryPath = this.normalizePath(path);
            const _fs = storage === NativeFileStorage.Temp ? this.sessionStorage : this.localStorage;
            const normalizedParentDirectoryPath = this.normalizePath(normalizedDirectoryPath.substring(0, normalizedDirectoryPath.lastIndexOf("/") + 1));

            const directoryMetadata: INativeDirectoryMetadata = {
                modifiedAt: new Date().toISOString(),
                path: normalizedDirectoryPath,
                storage: storage
            };
            const directory: INativeDirectory = {
                files: [],
                directories: [],
                metadata: directoryMetadata
            };
            const directoryEntry: DirectoryEntry = {
                isDirectory: true,
                content: directory
            };

            if (normalizedDirectoryPath !== "./") {
                const parentDirectoryEntry: DirectoryEntry | null = await _fs.getItem(normalizedParentDirectoryPath);
                if (!parentDirectoryEntry) return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_INVALID_MODIFICATION, "Parent directory does not exist"));
                parentDirectoryEntry.content.directories.push(directoryMetadata);
                await _fs.setItem(normalizedParentDirectoryPath, parentDirectoryEntry);
                await _fs.setItem(normalizedDirectoryPath, directoryEntry);
            } else {
                await _fs.setItem(normalizedDirectoryPath, directoryEntry);
            }

            return Result.ok(undefined);
        } catch (err) {
            return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_UNKNOWN, `${err}`, err));
        }
    }

    public async deleteDirectory(path: string, storage: NativeFileStorage = NativeFileStorage.App): Promise<Result<void>> {
        try {
            const normalizedDirectoryPath = this.normalizePath(path);
            const _fs = storage === NativeFileStorage.Temp ? this.sessionStorage : this.localStorage;
            const normalizedParentDirectoryPath = this.normalizePath(normalizedDirectoryPath.substring(0, normalizedDirectoryPath.lastIndexOf("/") + 1));

            const directoryEntry: DirectoryEntry | null = await _fs.getItem(normalizedDirectoryPath);
            if (directoryEntry) {
                const files: INativeFileMetadata[] = directoryEntry.content.files;
                const directories: INativeDirectoryMetadata[] = directoryEntry.content.directories;
                files.forEach((file) => this.deleteFile(file.path, file.storage));
                directories.forEach((directory) => this.deleteDirectory(directory.path, directory.storage));
            }

            if (normalizedDirectoryPath !== "./") {
                const parentDirectoryEntry: DirectoryEntry | null = await _fs.getItem(normalizedParentDirectoryPath);
                if (parentDirectoryEntry) {
                    if (!parentDirectoryEntry.isDirectory) {
                        return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_INVALID_MODIFICATION, "Is no directory"));
                    }

                    const directories: INativeDirectoryMetadata[] = parentDirectoryEntry.content.directories.filter((element) => element.path !== normalizedDirectoryPath);
                    parentDirectoryEntry.content.directories = directories;
                    await _fs.setItem(normalizedParentDirectoryPath, parentDirectoryEntry);
                    await _fs.removeItem(normalizedDirectoryPath);
                } else {
                    return Result.fail(
                        new ApplicationError(NativeErrorCodes.FILESYSTEM_INVALID_MODIFICATION, `Parent directory ${normalizedParentDirectoryPath} is no directory!`)
                    );
                }
            } else {
                await _fs.removeItem(normalizedDirectoryPath);
            }
            return Result.ok(undefined);
        } catch (err) {
            return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_UNKNOWN, `${err}`, err));
        }
    }

    public async existsDirectory(path: string, storage: NativeFileStorage = NativeFileStorage.App): Promise<Result<boolean>> {
        try {
            const normalizedDirectoryPath = this.normalizePath(path);
            const _fs = storage === NativeFileStorage.Temp ? this.sessionStorage : this.localStorage;
            const directoryEntry: DirectoryEntry | null = await _fs.getItem(normalizedDirectoryPath);

            return Result.ok(!!directoryEntry && directoryEntry.isDirectory);
        } catch (err) {
            return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_UNKNOWN, `${err}`, err));
        }
    }

    private async openAndWaitForUserFileSelection(): Promise<File> {
        return await new Promise((resolve, reject) => {
            let focusTimer: NodeJS.Timeout | undefined;

            const changeHandler = (event: any) => {
                if (focusTimer) {
                    clearTimeout(focusTimer);
                }

                if (!event.target?.files?.length) {
                    reject(new ApplicationError(NativeErrorCodes.FILESYSTEM_UNKNOWN, "No access to the files property"));
                }
                const fileEntry = event.target.files[0];
                resolve(fileEntry);
            };
            const timeoutHandler = () => {
                reject(new ApplicationError(NativeErrorCodes.FILESYSTEM_SELECTION_CANCELLED, "Selection cancelled. This could also happen on a too low focus timeout."));
            };
            const focusHandler = (_event: any) => {
                document.body.removeEventListener("focus", focusHandler, true);
                // Careful here, focus is also fired on change and before the change event happens.
                // There is quite a long delay between both. 100ms is not sufficient.
                focusTimer = setTimeout(timeoutHandler, 200);
            };
            const input = document.createElement("input");
            input.style.setProperty("display", "none");
            input.type = "file";
            input.multiple = false;
            input.addEventListener("change", changeHandler);
            // Focus event is the only event which is fired on cancellation
            document.body.addEventListener("focus", focusHandler, true);
            input.click();
        });
    }

    private async readBrowserFile(file: File): Promise<Uint8Array> {
        return await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as Uint8Array);
            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
        });
    }

    private async handleBrowserFile(fileEntry: File) {
        const data = await this.readBrowserFile(fileEntry);
        const name: string = fileEntry.name;
        const lastModifiedDate = fileEntry.lastModified ? new Date(fileEntry.lastModified) : new Date();

        await this.writeFile(name, data, NativeFileStorage.Temp);

        const fileMetadata: INativeFileMetadata = {
            name: name,
            path: name,
            storage: NativeFileStorage.Temp,
            mimeType: fileEntry.type,
            size: fileEntry.size,
            modifiedAt: lastModifiedDate.toISOString()
        };
        const file: INativeFile = {
            data: data,
            metadata: fileMetadata
        };
        return file;
    }

    /**
     * Web's select() can only be called from a user-interaction-event e.g. on a
     * button click listener.
     *
     * @returns
     */
    public async select(): Promise<Result<INativeFile>> {
        try {
            const selectedFile = await this.openAndWaitForUserFileSelection();

            const file: INativeFile = await this.handleBrowserFile(selectedFile);
            return Result.ok(file);
        } catch (e) {
            if (e instanceof ApplicationError) {
                return Result.fail(e);
            }

            return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_UNKNOWN, "An unknown error occured", e));
        }
    }

    public async openFile(path: string, storage: NativeFileStorage = NativeFileStorage.App): Promise<Result<void>> {
        const normalizedDirectoryPath = this.normalizePath(path);
        const resultMetadata: Result<INativeFileMetadata> = await this.infoFile(normalizedDirectoryPath, storage);
        const resultData: Result<Uint8Array> = await this.readFileAsBinary(normalizedDirectoryPath, storage);

        if (resultData.isSuccess && resultMetadata.isSuccess) {
            const data: Uint8Array = resultData.value;
            const mimeType: string | undefined = resultMetadata.value.mimeType;
            const blob = new Blob([data], { type: mimeType });
            const blobUrl = URL.createObjectURL(blob);
            window.open(blobUrl);
            return Result.ok(undefined);
        }

        return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_NOT_FOUND, `File ${normalizedDirectoryPath} not found!`));
    }

    public openFileContent(data: Uint8Array, metadata: INativeFileMetadata): Promise<Result<void>> {
        const mimeType: string | undefined = metadata.mimeType;
        const blob = new Blob([data], { type: mimeType });
        const blobUrl = URL.createObjectURL(blob);
        window.open(blobUrl);
        return Promise.resolve(Result.ok(undefined));
    }
}
