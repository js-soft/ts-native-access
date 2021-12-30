import { INativeConfigAccess, INativeDirectory, INativeFile, INativeFileAccess, INativeFileMetadata, NativeErrorCodes, NativeFileStorage } from "@js-soft/native-abstractions";
import { ApplicationError, Result } from "@js-soft/ts-utils";
// @ts-expect-error
import appData from "app-data-folder";
import { shell } from "electron";
import * as fs from "fs";
import * as mime from "mime-types";
import * as os from "os";
import * as nodepath from "path";
import rimraf from "rimraf";
import selectFiles from "select-files";

export class ElectronFileAccess implements INativeFileAccess {
    public constructor(private readonly config: INativeConfigAccess) {}

    private homedir: string;
    private tmpdir: string;
    private datadir: string;

    public async init(): Promise<Result<void>> {
        const appName: string = this.config.get("name").value;
        this.homedir = nodepath.join(os.homedir(), appName); // <-- Root directory of the application storage
        const homedirExists = fs.existsSync(this.homedir);
        if (!homedirExists) await fs.promises.mkdir(this.homedir);

        this.tmpdir = nodepath.join(os.tmpdir(), appName);
        const tmpdirExists = fs.existsSync(this.tmpdir);
        if (!tmpdirExists) await fs.promises.mkdir(this.tmpdir);

        this.datadir = nodepath.resolve(appData(appName));
        const datadirExists = fs.existsSync(this.datadir);
        if (!datadirExists) await fs.promises.mkdir(this.datadir);

        return Result.ok(undefined);
    }

    private getStoragePath(path: string, storage: NativeFileStorage): string {
        switch (storage) {
            case NativeFileStorage.App:
                return nodepath.join(__dirname, path);
            case NativeFileStorage.Data:
                return nodepath.join(this.datadir, path);
            case NativeFileStorage.Home:
                return nodepath.join(this.homedir, path);
            case NativeFileStorage.Temp:
                return nodepath.join(this.tmpdir, path);
            default:
                return nodepath.join(this.datadir, path);
        }
    }

    private resolveErrorCode(error: any): ApplicationError {
        switch (error.code) {
            case "ENOENT":
                return new ApplicationError(NativeErrorCodes.FILESYSTEM_NOT_FOUND, error);
            case "EACCES":
                return new ApplicationError(NativeErrorCodes.FILESYSTEM_SECURITY, error);
            case "EPERM":
                return new ApplicationError(NativeErrorCodes.FILESYSTEM_NO_MODIFICATION_ALLOWED, error);
            case "EISDIR":
            case "ENOTDIR":
            case "ENOTEMPTY":
                return new ApplicationError(NativeErrorCodes.FILESYSTEM_INVALID_MODIFICATION, error);
            case "EEXIST":
                return new ApplicationError(NativeErrorCodes.FILESYSTEM_PATH_EXISTS, error);
            default:
                return new ApplicationError(NativeErrorCodes.FILESYSTEM_UNKNOWN, error);
        }
    }

    public async infoFile(path: string, storage: NativeFileStorage = NativeFileStorage.Data): Promise<Result<INativeFileMetadata>> {
        try {
            const filePath = this.getStoragePath(path, storage);
            const stat = await fs.promises.stat(filePath);
            const type = mime.lookup(filePath);
            const name = nodepath.basename(filePath);
            const result: INativeFileMetadata = {
                name: name,
                path: path,
                mimeType: type || undefined,
                modifiedAt: new Date(stat.mtime.getTime()).toISOString(),
                size: stat.size,
                storage: storage
            };
            return Result.ok(result);
        } catch (err) {
            return Result.fail(this.resolveErrorCode(err));
        }
    }

    public async readFileAsText(path: string, storage: NativeFileStorage = NativeFileStorage.Data): Promise<Result<string>> {
        try {
            const filePath = this.getStoragePath(path, storage);
            const data = await fs.promises.readFile(filePath, "utf8");
            return Result.ok(data);
        } catch (err) {
            return Result.fail(this.resolveErrorCode(err));
        }
    }

    public async readFileAsBinary(path: string, storage: NativeFileStorage = NativeFileStorage.Data): Promise<Result<Uint8Array>> {
        try {
            const filePath = this.getStoragePath(path, storage);
            const result = await fs.promises.readFile(filePath);
            const data = new Uint8Array(result);
            return Result.ok(data);
        } catch (err) {
            return Result.fail(this.resolveErrorCode(err));
        }
    }

    public async writeFile(path: string, data: Uint8Array | string, storage: NativeFileStorage = NativeFileStorage.Data, append = false): Promise<Result<void>> {
        try {
            data = typeof data !== "string" ? new Uint8Array(data) : data;
            const filePath = this.getStoragePath(path, storage);

            if (append) {
                await fs.promises.appendFile(filePath, data);
            } else {
                await fs.promises.writeFile(filePath, data);
            }
            return Result.ok(undefined);
        } catch (err) {
            return Result.fail(this.resolveErrorCode(err));
        }
    }

    public async deleteFile(path: string, storage: NativeFileStorage = NativeFileStorage.Data): Promise<Result<void>> {
        try {
            const filePath = this.getStoragePath(path, storage);
            await fs.promises.unlink(filePath);
            return Result.ok(undefined);
        } catch (err) {
            return Result.fail(this.resolveErrorCode(err));
        }
    }

    public async existsFile(path: string, storage: NativeFileStorage = NativeFileStorage.Data): Promise<Result<boolean>> {
        try {
            const filePath = this.getStoragePath(path, storage);
            const exists = fs.existsSync(filePath);
            if (exists) {
                const stat = await fs.promises.lstat(filePath);
                return Result.ok(stat.isFile());
            }

            return Result.ok(false);
        } catch (err) {
            return Result.fail(this.resolveErrorCode(err));
        }
    }

    public async infoDirectory(path: string, storage: NativeFileStorage = NativeFileStorage.Data): Promise<Result<INativeDirectory>> {
        try {
            const directoryPath = this.getStoragePath(path, storage);

            const stat = await fs.promises.stat(directoryPath);
            const directory = {
                modifiedAt: stat.mtime.toISOString(),
                path: directoryPath,
                storage: storage
            };

            const files = await fs.promises.readdir(directoryPath, { withFileTypes: true });

            const filesResult: any[] = [];
            const directoriesResult: any[] = [];

            for (const file of files) {
                const childPath = nodepath.join(directoryPath, file.name);
                if (file.isFile()) {
                    const fileInfo: Result<INativeFileMetadata> = await this.infoFile(nodepath.join(path, file.name), storage);
                    if (fileInfo.isError) {
                        return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_UNKNOWN, "Unable to get file info!"));
                    }

                    filesResult.push(fileInfo.value);
                } else if (file.isDirectory()) {
                    const stat = await fs.promises.stat(childPath);
                    const directory = {
                        modifiedAt: stat.mtime.toISOString(),
                        path: childPath,
                        storage: storage
                    };
                    directoriesResult.push(directory);
                }
            }
            const result = { files: filesResult, directories: directoriesResult, metadata: directory };
            return Result.ok(result);
        } catch (err) {
            return Result.fail(this.resolveErrorCode(err));
        }
    }

    public async createDirectory(path: string, storage: NativeFileStorage = NativeFileStorage.Data): Promise<Result<void>> {
        try {
            const directoryPath = this.getStoragePath(path, storage);
            await fs.promises.mkdir(directoryPath);
            return Result.ok(undefined);
        } catch (err) {
            return Result.fail(this.resolveErrorCode(err));
        }
    }

    public async deleteDirectory(path: string, storage: NativeFileStorage = NativeFileStorage.Data): Promise<Result<void>> {
        try {
            const directoryPath = this.getStoragePath(path, storage);

            if (
                !directoryPath.startsWith(__dirname) &&
                !directoryPath.startsWith(this.datadir) &&
                !directoryPath.startsWith(this.homedir) &&
                !directoryPath.startsWith(this.tmpdir)
            ) {
                return Result.fail(this.resolveErrorCode("EACCES"));
            }

            await new Promise((resolve) => rimraf(directoryPath, resolve));
            return Result.ok(undefined);
        } catch (err) {
            return Result.fail(this.resolveErrorCode(err));
        }
    }

    public async existsDirectory(path: string, storage: NativeFileStorage = NativeFileStorage.Data): Promise<Result<boolean>> {
        try {
            const directoryPath = this.getStoragePath(path, storage);
            const exists = fs.existsSync(directoryPath);
            if (exists) {
                const stat = await fs.promises.lstat(directoryPath);
                return Result.ok(stat.isDirectory());
            }

            return Result.ok(false);
        } catch (err) {
            return Result.fail(this.resolveErrorCode(err));
        }
    }

    public async select(): Promise<Result<INativeFile>> {
        try {
            const selectedFile = await selectFiles({ multiple: false });
            if (!selectedFile) return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_SELECTION_CANCELLED, "User cancelled selection"));

            if (selectedFile.length < 1) {
                return Result.fail(new ApplicationError(NativeErrorCodes.FILESYSTEM_UNKNOWN, "No file selected"));
            }

            // Store file in temporary folder
            const metadata: INativeFileMetadata = {
                name: selectedFile[0].name,
                path: selectedFile[0].name,
                storage: NativeFileStorage.Temp,
                mimeType: selectedFile[0].type,
                size: selectedFile[0].size,
                modifiedAt: new Date(selectedFile[0].lastModified).toISOString()
            };
            const data = new Uint8Array(await fs.promises.readFile(selectedFile[0].path));

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

    public async openFile(path: string, storage: NativeFileStorage = NativeFileStorage.Data): Promise<Result<void>> {
        const filePath = this.getStoragePath(path, storage);
        await shell.openPath(filePath);
        return Result.ok(undefined);
    }

    public async openFileContent(data: Uint8Array, metadata: INativeFileMetadata): Promise<Result<void>> {
        let filename = metadata.name;
        filename = filename.replace(new RegExp(":", "g"), "");

        await this.writeFile(filename, data, NativeFileStorage.Temp);
        await this.openFile(filename, NativeFileStorage.Temp);
        return Result.ok(undefined);
    }
}
