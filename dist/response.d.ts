import { User } from './user';
export interface SuccessResponse<T> {
    data: T | null;
    success: true;
}
export interface ErrorResponse<T = string> {
    success: false;
    error: T;
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
    readonly SMS_ERROR_SENDED_PHONE_1: "error_sending_code_in_your_phone_1";
    readonly SMS_ERROR_SENDED_PHONE_2: "error_sending_code_in_your_phone_2";
    readonly SMS_ERROR_VERIFY_PHONE_1: "error_verify_code_in_your_phone_1";
    readonly SMS_ERROR_VERIFY_PHONE_2: "error_verify_code_in_your_phone_2";
    readonly INVALID_CREDENTIALS: "invalid_credentials";
    readonly PROVIDE_ALL_DATA: "provide_all_data";
};
export interface SuccessSignByLoginResponse {
    user: User;
    token: string;
    success: true;
}
export declare type SuccessVerifyResponse = SuccessResponse<typeof RESPONSE_MESSAGES.SMS_SENDED_PHONE>;
export declare type ErrorVerifyResponse = ErrorResponse<typeof RESPONSE_MESSAGES.SMS_ERROR_SENDED_PHONE_1 | typeof RESPONSE_MESSAGES.SMS_ERROR_SENDED_PHONE_2 | 'unknown'>;
