import {
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

export class CordovaFileAccess implements INativeFileAccess {
    public constructor(private readonly config: INativeConfigAccess) {}

    private fs: any;
    private fstmp: any;

    public async init(): Promise<Result<void>> {
        this.fs = await new Promise((resolve, reject) => window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, resolve, reject));
        this.fstmp = await new Promise((resolve, reject) => window.requestFileSystem(window.TEMPORARY, 0, resolve, reject));
        return Result.ok(undefined);
    }

    private getFileEntry(path: string, fs: any): Promise<FileEntry> {
        return new Promise((resolve, reject) => fs.root.getFile(path, {}, resolve, reject));
    }

    private getDirectoryEntry(path: string, fs: any): Promise<DirectoryEntry> {
        return new Promise((resolve, reject) => fs.root.getDirectory(path, {}, resolve, reject));
    }

    private createFileEntry(path: string, fs: any): Promise<FileEntry> {
        return new Promise((resolve, reject) => fs.root.getFile(path, { create: true }, resolve, reject));
    }

    private createDirectoryEntry(path: string, fs: any): Promise<DirectoryEntry> {
        return new Promise((resolve, reject) => fs.root.getDirectory(path, { create: true, exclusive: true }, resolve, reject));
    }

    private getFile(fileEntry: FileEntry): Promise<File> {
        return new Promise((resolve, reject) => fileEntry.file(resolve, reject));
    }

    private getFileWriter(fileEntry: FileEntry): Promise<FileWriter> {
        return new Promise((resolve, reject) => fileEntry.createWriter(resolve, reject));
    }

    private getFileReader(): FileReader {
        return new FileReader();
    }

    private getDirectoryReader(directoryEntry: DirectoryEntry): Promise<DirectoryReader> {
        return new Promise((resolve) => resolve(directoryEntry.createReader()));
    }

    private getDirectoryEntries(directoryReader: DirectoryReader): Promise<Entry[]> {
        return new Promise((resolve, reject) => directoryReader.readEntries(resolve, reject));
    }

    private removeFileEntry(fileEntry: FileEntry): Promise<void> {
        return new Promise((resolve, reject) => fileEntry.remove(resolve, reject));
    }

    private removeDirectoryEntry(directoryEntry: DirectoryEntry, recursive: boolean): Promise<void> {
        return new Promise((resolve, reject) => (recursive ? directoryEntry.removeRecursively(resolve, reject) : directoryEntry.remove(resolve, reject)));
    }

    private resolveNativePath(uri: string) {
        return new Promise((resolve, reject) => FilePath.resolveNativePath(uri, resolve, reject));
    }

    private resolveErrorCode(error: any): ApplicationError {
        // Some errors are returned as FILESYSTEM_UNKNOWN with the error code as description if there is no comparable error code on the other platforms
        switch (error.code) {
            case 1:
                return new ApplicationError(NativeErrorCodes.FILESYSTEM_NOT_FOUND, NativeErrorCodes.FILESYSTEM_NOT_FOUND);
            case 2:
                return new ApplicationError(NativeErrorCodes.FILESYSTEM_SECURITY, NativeErrorCodes.FILESYSTEM_SECURITY);
            case 3:
                return new ApplicationError(NativeErrorCodes.FILESYSTEM_UNKNOWN, "ABORT_ERR");
            case 4:
                return new ApplicationError(NativeErrorCodes.FILESYSTEM_UNKNOWN, "NOT_READABLE_ERR");
            case 5:
                return new ApplicationError(NativeErrorCodes.FILESYSTEM_UNKNOWN, "ENCODING_ERR");
            case 6:
                return new ApplicationError(NativeErrorCodes.FILESYSTEM_NO_MODIFICATION_ALLOWED, NativeErrorCodes.FILESYSTEM_NO_MODIFICATION_ALLOWED);
            case 7:
                return new ApplicationError(NativeErrorCodes.FILESYSTEM_UNKNOWN, "INVALID_STATE_ERR");
            case 8:
                return new ApplicationError(NativeErrorCodes.FILESYSTEM_UNKNOWN, "SYNTAX_ERR");
            case 9:
                return new ApplicationError(NativeErrorCodes.FILESYSTEM_INVALID_MODIFICATION, NativeErrorCodes.FILESYSTEM_INVALID_MODIFICATION);
            case 10:
                return new ApplicationError(NativeErrorCodes.FILESYSTEM_UNKNOWN, "QUOTA_EXCEEDED_ERR");
            case 11:
                return new ApplicationError(NativeErrorCodes.FILESYSTEM_UNKNOWN, "TYPE_MISMATCH_ERR");
            case 12:
                return new ApplicationError(NativeErrorCodes.FILESYSTEM_PATH_EXISTS, NativeErrorCodes.FILESYSTEM_PATH_EXISTS);
            default:
                return new ApplicationError(NativeErrorCodes.FILESYSTEM_UNKNOWN, `${error.code}`);
        }
    }

    public async infoFile(path: string, storage: NativeFileStorage = NativeFileStorage.App): Promise<Result<INativeFileMetadata>> {
        try {
            const _fs = storage === NativeFileStorage.Temp ? this.fstmp : this.fs;
            const fileEntry: any = await this.getFileEntry(path, _fs);
            const file: any = await this.getFile(fileEntry);
            const result: INativeFileMetadata = {
                name: fileEntry.name,
                path: path,
                storage: storage,
                mimeType: file.type,
                size: file.size,
                modifiedAt: new Date(file.lastModified).toISOString()
            };
            return Result.ok(result);
        } catch (err) {
            return Result.fail(this.resolveErrorCode(err));
        }
    }

    public async readFileAsText(path: string, storage: NativeFileStorage = NativeFileStorage.App): Promise<Result<string>> {
        try {
            const _fs = storage === NativeFileStorage.Temp ? this.fstmp : this.fs;
            const fileEntry = await this.getFileEntry(path, _fs);
            const file: any = await this.getFile(fileEntry);
            const fileReader = this.getFileReader();
            const data: any = await new Promise((resolve, reject) => {
                fileReader.onerror = (err) => reject(err);
                fileReader.onloadend = () => resolve(fileReader.result);
                fileReader.readAsText(file);
            });
            return Result.ok(data);
        } catch (err) {
            return Result.fail(this.resolveErrorCode(err));
        }
    }

    public async readFileAsBinary(path: string, storage: NativeFileStorage = NativeFileStorage.App): Promise<Result<Uint8Array>> {
        try {
            const _fs = storage === NativeFileStorage.Temp ? this.fstmp : this.fs;
            const fileEntry = await this.getFileEntry(path, _fs);
            const file: any = await this.getFile(fileEntry);
            const fileReader = this.getFileReader();
            const data: any = await new Promise((resolve, reject) => {
                fileReader.onerror = (err) => reject(err);
                fileReader.onloadend = () => resolve(fileReader.result);
                fileReader.readAsArrayBuffer(file);
            });
            return Result.ok(data);
        } catch (err) {
            return Result.fail(this.resolveErrorCode(err));
        }
    }

    public async writeFile(path: string, data: Uint8Array | string, storage: NativeFileStorage = NativeFileStorage.App, append = false): Promise<Result<void>> {
        try {
            const _fs = storage === NativeFileStorage.Temp ? this.fstmp : this.fs;
            const fileEntry = await this.createFileEntry(path, _fs);
            const fileWriter: any = await this.getFileWriter(fileEntry);

            if (append) {
                fileWriter.seek(fileWriter.length);
            }

            await new Promise((resolve, reject) => {
                fileWriter.onwriteend = () => resolve(null);
                fileWriter.onerror = (err: string) => reject(err);
                fileWriter.write(typeof data === "string" ? data : new Blob([new Uint8Array(data)]));
            });
            return Result.ok(undefined);
        } catch (err) {
            return Result.fail(this.resolveErrorCode(err));
        }
    }

    public async deleteFile(path: string, storage: NativeFileStorage = NativeFileStorage.App): Promise<Result<void>> {
        try {
            const _fs = storage === NativeFileStorage.Temp ? this.fstmp : this.fs;
            const fileEntry = await this.getFileEntry(path, _fs);
            await this.removeFileEntry(fileEntry);
            return Result.ok(undefined);
        } catch (err) {
            return Result.fail(this.resolveErrorCode(err));
        }
    }

    public async existsFile(path: string, storage: NativeFileStorage = NativeFileStorage.App): Promise<Result<boolean>> {
        try {
            const _fs = storage === NativeFileStorage.Temp ? this.fstmp : this.fs;
            // Exception based programming (sry)
            try {
                await this.getFileEntry(path, _fs);
            } catch (err) {
                return Result.ok(false);
            }
            return Result.ok(true);
        } catch (err) {
            return Result.fail(this.resolveErrorCode(err));
        }
    }

    public async infoDirectory(path: string, storage: NativeFileStorage = NativeFileStorage.App): Promise<Result<INativeDirectory>> {
        try {
            const _fs = storage === NativeFileStorage.Temp ? this.fstmp : this.fs;
            const directoryEntry: any = await this.getDirectoryEntry(path, _fs);
            const directoryReader = await this.getDirectoryReader(directoryEntry);
            const entries: any = await this.getDirectoryEntries(directoryReader);
            let modifiedAt: any = await new Promise((resolve, reject) => directoryEntry.getMetadata(resolve, reject));
            modifiedAt = new Date(modifiedAt.modificationTime).toISOString();
            const directory: INativeDirectoryMetadata = {
                modifiedAt: modifiedAt,
                path: directoryEntry.fullPath,
                storage: storage
            };

            const files: any[] = [];
            const directories: any[] = [];

            for (const entry of entries) {
                if (entry.isFile) {
                    files.push((await this.infoFile(entry.fullPath, storage)).value);
                } else if (entry.isDirectory) {
                    const directoryEntry: any = await this.getDirectoryEntry(entry.fullPath, _fs);
                    let modifiedAt: any = await new Promise((resolve, reject) => directoryEntry.getMetadata(resolve, reject));
                    modifiedAt = new Date(modifiedAt.modificationTime).toISOString();
                    const directory: INativeDirectoryMetadata = {
                        modifiedAt: modifiedAt,
                        path: directoryEntry.fullPath,
                        storage: storage
                    };
                    directories.push(directory);
                }
            }
            const result: INativeDirectory = { files: files, directories: directories, metadata: directory };
            return Result.ok(result);
        } catch (err) {
            return Result.fail(this.resolveErrorCode(err));
        }
    }

    public async createDirectory(path: string, storage: NativeFileStorage = NativeFileStorage.App): Promise<Result<void>> {
        try {
            const _fs = storage === NativeFileStorage.Temp ? this.fstmp : this.fs;
            await this.createDirectoryEntry(path, _fs);
            return Result.ok(undefined);
        } catch (err) {
            return Result.fail(this.resolveErrorCode(err));
        }
    }

    public async deleteDirectory(path: string, storage: NativeFileStorage = NativeFileStorage.App): Promise<Result<void>> {
        try {
            const _fs = storage === NativeFileStorage.Temp ? this.fstmp : this.fs;
            const fileEntry = await this.getDirectoryEntry(path, _fs);
            await this.removeDirectoryEntry(fileEntry, true);
            return Result.ok(undefined);
        } catch (err) {
            return Result.fail(this.resolveErrorCode(err));
        }
    }

    public async existsDirectory(path: string, storage: NativeFileStorage = NativeFileStorage.App): Promise<Result<boolean>> {
        try {
            const _fs = storage === NativeFileStorage.Temp ? this.fstmp : this.fs;
            try {
                await this.getDirectoryEntry(path, _fs);
            } catch (err) {
                // Should throw error if file does not exist
                return Result.ok(false);
            }
            return Result.ok(true);
        } catch (err) {
            return Result.fail(this.resolveErrorCode(err));
        }
    }

    public async select(): Promise<Result<INativeFile>> {
        try {
            const selectedFile = await chooser.getFileMetadata();
            if (!selectedFile) {
                return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_SELECTION_CANCELLED, "user cancelled selection"));
            }

            // Read file data with filesystem plugin
            const fileEntry: any = await new Promise((resolve, reject) => window.resolveLocalFileSystemURL(selectedFile.uri, resolve, reject));
            const file: any = await this.getFile(fileEntry);
            const fileReader = this.getFileReader();
            const data: any = await new Promise((resolve, reject) => {
                fileReader.onerror = (err) => reject(err);
                fileReader.onloadend = () => resolve(fileReader.result);
                fileReader.readAsArrayBuffer(file);
            });

            // Store file in temporary folder
            const metadata: INativeFileMetadata = {
                name: selectedFile.name,
                path: selectedFile.name,
                storage: NativeFileStorage.Temp,
                mimeType: selectedFile.mediaType,
                size: file.size,
                modifiedAt: new Date(file.lastModified).toISOString()
            };

            const result: INativeFile = {
                data: data,
                metadata: metadata
            };

            await this.writeFile(metadata.path, data, NativeFileStorage.Temp);

            return Result.ok(result);
        } catch (err) {
            return Result.fail(this.resolveErrorCode(err));
        }
    }

    public async openFile(path: string, storage: NativeFileStorage = NativeFileStorage.App): Promise<Result<void>> {
        try {
            const _fs = storage === NativeFileStorage.Temp ? this.fstmp : this.fs;
            const metadataResult = await this.infoFile(path, storage);
            if (!metadataResult.isSuccess) {
                return Result.fail(metadataResult.error);
            }

            await new Promise((resolve, reject) => {
                cordova.plugins.fileOpener2.open(_fs.root.nativeURL + path, metadataResult.value.mimeType, {
                    success: resolve,
                    error: reject
                });
            });
            return Result.ok(undefined);
        } catch (err) {
            return Result.fail(this.resolveErrorCode(err));
        }
    }

    public async openFileContent(data: Uint8Array, metadata: INativeFileMetadata): Promise<Result<void>> {
        let filename = metadata.name;
        filename = filename.replace(new RegExp(":", "g"), "");

        await this.writeFile(filename, data, NativeFileStorage.Temp);
        await this.openFile(filename, NativeFileStorage.Temp);
        return Result.ok(undefined);
    }
}
