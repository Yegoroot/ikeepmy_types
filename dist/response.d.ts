import { User } from './user';
export interface SuccessResponse<T> {
    data: T | null;
    success: true;
}
export interface ErrorResponse<T = string> {
    success: false;
    error: T | 'unknown';
    keyValue?: Record<string, string>;
}
export interface SuccessResponseList<T> {
    data: T[] | [];
    success: true;
    count: number;
    total: number;
}
export declare const RESPONSE_MESSAGES: {
    readonly SMS_SENDED_PHONE: "we_sended_code_in_your_phone";
    readonly ERROR_NUMBER_IS_EXIST: "error_number_is_exist";
    readonly ERROR_SENDED_SMS_FOR_VERIFY_1: "error_sending_code_for_verify_1";
    readonly ERROR_SENDED_SMS_FOR_VERIFY_2: "error_sending_code_for_verify_2";
    readonly ERROR_VERIFY_PHONE_1: "error_verify_code_in_your_phone_1";
    readonly ERROR_REGISTRATION: "error_verify_code_in_your_phone_2";
    readonly ERROR_INVALID_CREDENTIALS: "error_invalid_credentials";
    readonly ERROR_PROVIDE_ALL_DATA: "error_provide_all_data";
};
export interface SuccessSignByLoginResponse {
    user: User;
    token: string;
    success: true;
}
export declare type ErrorLoginResponse = ErrorResponse<typeof RESPONSE_MESSAGES.ERROR_INVALID_CREDENTIALS>;
export declare type ErrorSignupResponse = ErrorResponse<typeof RESPONSE_MESSAGES.ERROR_VERIFY_PHONE_1 | typeof RESPONSE_MESSAGES.ERROR_REGISTRATION>;
export declare type SuccessVerifyResponse = SuccessResponse<typeof RESPONSE_MESSAGES.SMS_SENDED_PHONE>;
export declare type ErrorVerifyResponse = ErrorResponse<typeof RESPONSE_MESSAGES.ERROR_SENDED_SMS_FOR_VERIFY_1 | typeof RESPONSE_MESSAGES.ERROR_SENDED_SMS_FOR_VERIFY_2 | typeof RESPONSE_MESSAGES.ERROR_NUMBER_IS_EXIST>;
