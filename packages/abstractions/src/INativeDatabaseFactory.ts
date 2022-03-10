import { ILokiJsDatabaseFactory } from "@js-soft/docdb-access-loki";

/**
 * Database factory which creates a lokijs database with a persistance adapter {@link INativeDatabaseFilesystemAdapter} for saving and loading the database on/from the filesystem.
 */
export interface INativeDatabaseFactory extends ILokiJsDatabaseFactory {
    /**
     * Create or load a database.
     * @param name name of the database
     * @param options
     */
    create(name: string, options?: Partial<LokiConstructorOptions> & Partial<LokiConfigOptions> & Partial<ThrottledSaveDrainOptions>): Loki;
}

/**
 * Persistance adapter for a lokijs database.
 */
export interface INativeDatabaseFilesystemAdapter {
    /**
     * Load the database from the filesystem.
     * @param dbname name of the database
     * @param callback callback for returning the database content
     */
    loadDatabase(dbname: string, callback: Function): void;
    /**
     * Store the databse on the filesystem.
     * @param dbname name of the database
     * @param dbref reference to database object
     * @param callback callback for returning on success or failure
     */
    exportDatabase(dbname: string, dbref: Loki, callback: Function): void;
}
