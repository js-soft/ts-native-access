import { Result } from "@js-soft/ts-utils";
import { INativeEnvironment } from "./INativeEnvironment";

/**
 * Initialization of native features
 */
export interface INativeBootstrapper {
    /**
     * Indicates whether the initalisation is finished
     */
    isInitialized: boolean;
    /**
     * Environment of initialized native features
     */
    nativeEnvironment: INativeEnvironment;
    /**
     * Function for starting the initialization process
     */
    init(): Promise<Result<void>>;
}
