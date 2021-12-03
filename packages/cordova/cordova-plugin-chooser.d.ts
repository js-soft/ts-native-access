declare global {
    const chooser: {
        /**
         * Displays native prompt for user to select a file.
         *
         * @param accept Optional MIME type filter (e.g. 'image/gif,video/*').
         *
         * @returns Promise containing selected file's raw binary data,
         * base64-encoded data: URI, MIME type, display name, and original URI.
         *
         * If user cancels, promise will be resolved as undefined.
         * If error occurs, promise will be rejected.
         */
        getFile(accept?: string): Promise<
            | undefined
            | {
                  data: Uint8Array;
                  dataURI: string;
                  mediaType: string;
                  name: string;
                  uri: string;
              }
        >;

        /**
         * Displays native prompt for user to select a file.
         *
         * @param accept Optional MIME type filter (e.g. 'image/gif,video/*').
         *
         * @returns Promise containing selected file's MIME type, display name,
         * and original URI.
         *
         * If user cancels, promise will be resolved as undefined.
         * If error occurs, promise will be rejected.
         */
        getFileMetadata(accept?: string): Promise<
            | undefined
            | {
                  mediaType: string;
                  name: string;
                  uri: string;
              }
        >;
    };
}

export {};
