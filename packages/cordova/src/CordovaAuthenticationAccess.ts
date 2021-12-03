import { ILogger } from "@js-soft/logging-abstractions";
import { INativeAuthenticationAccess, INativeAuthenticationOptions, NativeErrorCodes } from "@js-soft/native-abstractions";
import { ApplicationError, Result } from "@js-soft/ts-utils";

export class CordovaAuthenticationAccess implements INativeAuthenticationAccess {
    public constructor(private readonly logger: ILogger) {}

    public async authenticate(options?: INativeAuthenticationOptions): Promise<Result<boolean>> {
        const available = await new Promise((resolve, reject) => Fingerprint.isAvailable(resolve, reject));
        if (!available) {
            return Result.fail(new ApplicationError(NativeErrorCodes.BIOMETRIC_UNAVAILABLE, "Biometric authentication not available."));
        }
        try {
            await new Promise((resolve, reject) => {
                Fingerprint.show(
                    {
                        description: options?.description,
                        title: options?.title,
                        subtitle: options?.subtitle,
                        cancelButtonTitle: options?.cancelButtonTitle
                    },
                    resolve,
                    reject
                );
            });
            return Result.ok(true);
        } catch (error: any) {
            let errorCode: string;
            switch (error.code) {
                case -100:
                    errorCode = NativeErrorCodes.BIOMETRIC_UNKNOWN_ERROR;
                    break;
                case -101:
                    errorCode = NativeErrorCodes.BIOMETRIC_UNAVAILABLE;
                    break;
                case -102:
                    errorCode = NativeErrorCodes.BIOMETRIC_AUTHENTICATION_FAILED;
                    return Result.ok(false);
                case -103:
                    errorCode = NativeErrorCodes.BIOMETRIC_SDK_NOT_SUPPORTED;
                    break;
                case -104:
                    errorCode = NativeErrorCodes.BIOMETRIC_HARDWARE_NOT_SUPPORTED;
                    break;
                case -105:
                    errorCode = NativeErrorCodes.BIOMETRIC_PERMISSION_NOT_GRANTED;
                    break;
                case -106:
                    errorCode = NativeErrorCodes.BIOMETRIC_NOT_ENROLLED;
                    break;
                case -107:
                    errorCode = NativeErrorCodes.BIOMETRIC_INTERNAL_PLUGIN_ERROR;
                    break;
                case -108:
                    errorCode = NativeErrorCodes.BIOMETRIC_DISMISSED;
                    return Result.ok(false);
                case -109:
                    errorCode = NativeErrorCodes.BIOMETRIC_PIN_OR_PATTERN_DISMISSED;
                    break;
                case -110:
                    errorCode = NativeErrorCodes.BIOMETRIC_SCREEN_GUARD_UNSECURED;
                    break;
                case -111:
                    errorCode = NativeErrorCodes.BIOMETRIC_LOCKED_OUT;
                    break;
                case -112:
                    errorCode = NativeErrorCodes.BIOMETRIC_LOCKED_OUT_PERMANENT;
                    break;
                case -113:
                    errorCode = NativeErrorCodes.BIOMETRIC_SECRET_NOT_FOUND;
                    break;
                default:
                    errorCode = NativeErrorCodes.BIOMETRIC_UNKNOWN_ERROR;
                    break;
            }
            return Result.fail(new ApplicationError(errorCode, "Authentication failed."));
        }
    }
}
