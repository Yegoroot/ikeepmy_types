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
    readonly ERROR_VERIFICATION: "error_verification";
    readonly ERROR_VERIFICATION_CHECK_ATTEMPTS_REACHED: "error_verification_check_attempts_reached";
    readonly ERROR_VERIFICATION_SEND_ATTEMPTS_REACHED: "error_verification_send_attempts_reached";
    readonly ERROR_VERIFY_PHONE_1: "error_verify_code_in_your_phone_1";
    readonly ERROR_REGISTRATION: "error_registration";
    readonly ERROR_INVALID_CREDENTIALS: "error_invalid_credentials";
    readonly ERROR_PROVIDE_ALL_DATA: "error_provide_all_data";
    readonly ERROR_NOT_FOUND: "error_not_found";
    readonly ERROR_NOT_AUTH: "error_not_auth";
    readonly UNKNOWN_ERROR: "unknown_error";
    readonly ERROR_UPDATING_PASSWORD: "error_updating_password";
    readonly ERROR_DONT_HAVE_ROLE: "error_dont_have_role";
    readonly ERROR_DONT_HAVE_PERMISSIONS: "error_dont_have_permissions";
    readonly ERROR_CANNOT_BE_TAKEN_MORE_THAN_5: "error_cannot_be_taken_more_than_5";
    readonly ERROR_DIFFERENCE_BETWEEN_TASKS_80: "error_difference_between_tasks_80_minutes";
};
