import { ErrorResponse, RESPONSE_MESSAGES, SuccessResponse } from "./response";
import { User } from "./user";
export interface VerifyNumberBody {
    phone: string;
}
export interface SignUpLoginBody {
    password: string;
    name: string;
    phone: string;
    code: string;
    email?: string;
}
export interface SignInLoginBody {
    phone: string;
    password: string;
}
export interface UpdatePasswordBody {
    phone: string;
    password: string;
    code: string;
}
export interface SuccessSignByLoginResponse {
    user: User;
    token: string;
    success: true;
}
export declare type ErrorLoginResponse = ErrorResponse<typeof RESPONSE_MESSAGES.ERROR_INVALID_CREDENTIALS>;
export declare type ErrorSignupResponse = ErrorResponse<typeof RESPONSE_MESSAGES.ERROR_VERIFICATION_CHECK_ATTEMPTS_REACHED | typeof RESPONSE_MESSAGES.ERROR_VERIFY_PHONE_1 | typeof RESPONSE_MESSAGES.ERROR_REGISTRATION>;
export declare type ErrorUpdatingPasswordResponse = ErrorResponse<typeof RESPONSE_MESSAGES.ERROR_VERIFICATION_CHECK_ATTEMPTS_REACHED | typeof RESPONSE_MESSAGES.ERROR_VERIFY_PHONE_1 | typeof RESPONSE_MESSAGES.ERROR_UPDATING_PASSWORD>;
export declare type SuccessVerifyResponse = SuccessResponse<typeof RESPONSE_MESSAGES.SMS_SENDED_PHONE>;
export declare type ErrorVerifyRegistrationResponse = ErrorResponse<typeof RESPONSE_MESSAGES.ERROR_VERIFICATION_SEND_ATTEMPTS_REACHED | typeof RESPONSE_MESSAGES.ERROR_SENDED_SMS_FOR_VERIFY_1 | typeof RESPONSE_MESSAGES.ERROR_VERIFICATION | typeof RESPONSE_MESSAGES.ERROR_NUMBER_IS_EXIST>;
export declare type ErrorVerifyResetPasswordResponse = ErrorResponse<typeof RESPONSE_MESSAGES.ERROR_VERIFICATION_SEND_ATTEMPTS_REACHED | typeof RESPONSE_MESSAGES.ERROR_SENDED_SMS_FOR_VERIFY_1 | typeof RESPONSE_MESSAGES.ERROR_VERIFICATION | typeof RESPONSE_MESSAGES.ERROR_NOT_FOUND>;
export declare type ErrorPushNotificationTokenResponse = ErrorResponse<typeof RESPONSE_MESSAGES.ERROR_INVALID_CREDENTIALS | typeof RESPONSE_MESSAGES.ERROR_NOT_AUTH>;
export declare type SuccessPushNotificationTokenResponse = SuccessResponse<User>;
