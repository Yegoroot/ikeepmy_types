import {User} from './user'

// ----------------------------------------------------------
// BASE RESPONSE
// ----------------------------------------------------------

export interface SuccessResponse<T> {
  data: T | null,
  success: true
}

export interface ErrorResponse<T = string> {
  success: false
  error: T
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
  // registration & verify-phone
  SMS_SENDED_PHONE: 'we_sended_code_in_your_phone',
  SMS_ERROR_SENDED_PHONE_1: 'error_sending_code_in_your_phone_1',
  SMS_ERROR_SENDED_PHONE_2: 'error_sending_code_in_your_phone_2',
  SMS_ERROR_VERIFY_PHONE_1: 'error_verify_code_in_your_phone_1', // ErrorVerifyResponse
  SMS_ERROR_VERIFY_PHONE_2: 'error_verify_code_in_your_phone_2', // ErrorVerifyResponse
  // login
  INVALID_CREDENTIALS: 'invalid_credentials',
  // common
  PROVIDE_ALL_DATA: 'provide_all_data'
} as const

// type MESSAGES = typeof RESPONSE_MESSAGES[keyof typeof RESPONSE_MESSAGES];

// ----------------------------------------------------------
// Routes
// ----------------------------------------------------------

// SIGIN | SIGNUP 
export interface SuccessSignByLoginResponse {
  user: User,
  token: string
  success: true
}
// LOGIN
export type ErrorLoginResponse = ErrorResponse<
  typeof RESPONSE_MESSAGES.INVALID_CREDENTIALS | 
  'unknown'>

// SIGNUP
export type ErrorSignupResponse = ErrorResponse<
  typeof RESPONSE_MESSAGES.SMS_ERROR_VERIFY_PHONE_1 | 
  typeof RESPONSE_MESSAGES.SMS_ERROR_VERIFY_PHONE_2 | 
  'unknown'>

// VERIFY 
export type SuccessVerifyResponse = SuccessResponse<
  typeof RESPONSE_MESSAGES.SMS_SENDED_PHONE>

export type ErrorVerifyResponse = ErrorResponse< 
  typeof RESPONSE_MESSAGES.SMS_ERROR_SENDED_PHONE_1 | 
  typeof RESPONSE_MESSAGES.SMS_ERROR_SENDED_PHONE_2 | 
  'unknown'>