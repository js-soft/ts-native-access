import { ILokiJsDatabaseFactory } from "@js-soft/docdb-access-loki";
import { ILogger } from "@js-soft/logging-abstractions";
import { INativeFileAccess, NativeErrorCodes } from "@js-soft/native-abstractions";
import { deserialize, Document, serialize } from "bson";
import loki from "lokijs";
import pako from "pako";

export class CommonDatabaseFactory implements ILokiJsDatabaseFactory {
    public constructor(private readonly logger: ILogger, private readonly fileAccess: INativeFileAccess) {}

    public create(name: string, options?: Partial<LokiConstructorOptions> & Partial<LokiConfigOptions> & Partial<ThrottledSaveDrainOptions>): Loki {
        return new loki(name, {
            ...{ adapter: new DatabaseFilesystemAdapter(this.logger, this.fileAccess) },
            autosave: true,
            autoload: true,
            autosaveInterval: 1000,
            ...options
        });
    }
}

class DatabaseFilesystemAdapter {
    public mode: string;

    public constructor(private readonly logger: ILogger, private readonly fileAccess: INativeFileAccess) {
        this.mode = "reference";
        this.logger = logger;
        this.fileAccess = fileAccess;
    }

    public async loadDatabase(dbname: string, callback: Function) {
        const loadDatabaseMetadata = async () => {
            const result = await this.fileAccess.readFileAsText(metadataPath);
            if (result.isSuccess) {
                if (result.value) {
                    return JSON.parse(result.value);
                }
                return {};
            } else if (result.error.code === NativeErrorCodes.FILESYSTEM_NOT_FOUND) {
                // Database does not exist
            } else {
                const error = `Unable to load database! Database metadata not readable! Reason: ${result.error}`;
                this.logger.error(error);
                throw new Error(error);
            }
        };

        const loadCollectionData = async (collectionName: string) => {
            const collectionPath = `${dbname}_${collectionName}`;
            const collectionResult = await this.fileAccess.existsFile(collectionPath);
            if (collectionResult.isError) {
                throw new Error(`Unable to load database! Database collection file not found! Reason: ${collectionResult.error}`);
            }

            const result = await this.fileAccess.readFileAsBinary(collectionPath);
            if (result.isSuccess) {
                return deserialize(pako.inflate(result.value));
            }

            const error = `Unable to load database! Database collection file not readable! Reason: ${result.error}`;
            this.logger.error(error);
            throw new Error(error);
        };

        const loadDatabaseInternal = async () => {
            try {
                const dbmeta = await loadDatabaseMetadata();
                const promiseArray: Promise<Document>[] = [];
                if (dbmeta?.collection) {
                    for (const collection of dbmeta.collections) {
                        promiseArray.push(loadCollectionData(collection.name));
                    }
                    const collectionDataArray = await Promise.all(promiseArray);
                    dbmeta.collections = collectionDataArray;
                }
                callback(dbmeta);
            } catch (err) {
                const error = `Error in loadDatabaseInternal: ${err}`;
                this.logger.error(error);
                callback(error);
                throw new Error(error);
            }
        };

        const metadataPath = `${dbname}_metadata`;
        const metadataPathResult = await this.fileAccess.existsFile(metadataPath);
        if (metadataPathResult.isError) {
            const error = `Error in loadDatabase: Unable to load database! Database files not found! Reason: ${metadataPathResult.error}`;
            this.logger.error(error);
            callback(error);
            throw new Error(error);
        } else {
            await loadDatabaseInternal();
        }
    }

    public async exportDatabase(dbname: string, dbref: Loki, callback: Function) {
        const saveDatabaseMetadata = async () => {
            const metadataPath = `${dbname}_metadata`;
            for (const collection of dbref.collections) {
                collection.data = [];
            }
            const result = await this.fileAccess.writeFile(metadataPath, JSON.stringify(dbref));
            if (!result.isSuccess) {
                const error = `Unable to save database! Database metadata file not writable! Reason: ${result.error}`;
                this.logger.error(error);
                throw new Error(error);
            }
        };

        const saveCollectionData = async (collection: any) => {
            const collectionPath = `${dbname}_${collection.name}`;
            const compressed = pako.deflate(serialize(collection));
            const result = await this.fileAccess.writeFile(collectionPath, compressed);
            if (!result.isSuccess) {
                const error = `Unable to save database! Database collection file not writable! Reason: ${result.error}`;
                this.logger.error(error);
                throw new Error(error);
            }
        };

        const saveDatabase = async () => {
            try {
                const promisesArray: Promise<void>[] = [];
                for (const collection of dbref.collections) {
                    promisesArray.push(saveCollectionData(collection));
                }
                await Promise.all(promisesArray);
                await saveDatabaseMetadata();
                callback(null);
            } catch (err) {
                const error = `Error in saveDatabase: ${err}`;
                this.logger.error(error);
                callback(error);
                throw new Error(error);
            }
        };

        await saveDatabase();
    }
}
