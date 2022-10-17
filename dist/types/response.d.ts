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
export declare enum ResponseMessage {
    SMS_SENDED_PHONE = "we_sended_code_in_your_phone",
    SMS_ERROR_SENDED_PHONE_1 = "error_sending_code_in_your_phone_1",
    SMS_ERROR_SENDED_PHONE_2 = "error_sending_code_in_your_phone_2",
    SMS_ERROR_VERIFY_PHONE_1 = "error_verify_code_in_your_phone_1",
    SMS_ERROR_VERIFY_PHONE_2 = "error_verify_code_in_your_phone_2",
    INVALID_CREDENTIALS = "invalid_credentials",
    PROVIDE_ALL_DATA = "provide_all_data"
}
export interface SuccessSignByLoginResponse {
    user: User;
    token: string;
    success: true;
}
export declare type SuccessVerifyResponse = SuccessResponse<ResponseMessage.SMS_SENDED_PHONE>;
export declare type ErrorVerifyResponse = ErrorResponse<ResponseMessage.SMS_ERROR_SENDED_PHONE_1 | ResponseMessage.SMS_ERROR_SENDED_PHONE_2 | 'unknown'>;
