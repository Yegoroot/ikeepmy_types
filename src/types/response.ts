// ----------------------------------------------------------
// BASE RESPONSE
// ----------------------------------------------------------

export interface SuccessResponse<T> {
  data: T | null,
  success: true
}

export interface ErrorResponse<T = string> {
  success: false
  error: T | 'unknown'
  keyValue?: Record<string, string>
}

// ----------------------------------------------------------
// BASE RESPONSE LIST
// ----------------------------------------------------------

export interface SuccessResponseList<T> {
  data: T[] | [],
  success: true,
  count: number,
  total: number
}

// ----------------------------------------------------------
// MESSAGES
// ----------------------------------------------------------

export const RESPONSE_MESSAGES = {
  // verify-phone (before regisrtation)
  SMS_SENDED_PHONE: 'we_sended_code_in_your_phone',
  ERROR_NUMBER_IS_EXIST: 'error_number_is_exist',
  ERROR_SENDED_SMS_FOR_VERIFY_1: 'error_sending_code_for_verify_1',
  ERROR_VERIFICATION: 'error_verification',
  ERROR_VERIFICATION_CHECK_ATTEMPTS_REACHED: 'error_verification_check_attempts_reached', // Max (5) verification check attempts reached.
  ERROR_VERIFICATION_SEND_ATTEMPTS_REACHED: 'error_verification_send_attempts_reached', // Max send attempts reachedattempts reached.
  // registration
  ERROR_VERIFY_PHONE_1: 'error_verify_code_in_your_phone_1', // ErrorVerifyResponse
  ERROR_REGISTRATION: 'error_registration', // ErrorVerifyResponse
  // login
  ERROR_INVALID_CREDENTIALS: 'error_invalid_credentials',
  // common
  ERROR_PROVIDE_ALL_DATA: 'error_provide_all_data',
  ERROR_NOT_FOUND: 'error_not_found',
  ERROR_NOT_AUTH: 'error_not_auth',
  UNKNOWN_ERROR: 'unknown_error',

  ERROR_UPDATING_PASSWORD: 'error_updating_password',

  // TASKS
  ERROR_DONT_HAVE_ROLE: "error_dont_have_role",
  ERROR_DONT_HAVE_PERMISSIONS: "error_dont_have_permissions",
  ERROR_CANNOT_BE_TAKEN_MORE_THAN_5: "error_cannot_be_taken_more_than_5",
  ERROR_DIFFERENCE_BETWEEN_TASKS_80: "error_difference_between_tasks_80_minutes",
} as const

// type MESSAGES = typeof RESPONSE_MESSAGES[keyof typeof RESPONSE_MESSAGES];

