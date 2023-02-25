
// ----------------------------------------------------------
// SIGNUP 
// ----------------------------------------------------------

import { ErrorResponse, RESPONSE_MESSAGES, SuccessResponse } from "./response"
import { User } from "./user"

export interface VerifyNumberBody {
  phone: string
}

export interface SignUpLoginBody {
  password: string
  name: string,
  phone: string
  code: string
  email?: string
}

// ----------------------------------------------------------
// SIGIN
// ----------------------------------------------------------

export interface SignInLoginBody {
  phone: string
  password: string
}


// ----------------------------------------------------------
// Reset PASSWORD
// ----------------------------------------------------------

export interface UpdatePasswordBody {
  phone: string
  password: string
  code: string
}



// ----------------------------------------------------------
// RESPONSES
// ----------------------------------------------------------

// SIGIN | SIGNUP 
export interface SuccessSignByLoginResponse {
  user: User,
  token: string
  success: true
}
// /login
export type ErrorLoginResponse = ErrorResponse<
  typeof RESPONSE_MESSAGES.ERROR_INVALID_CREDENTIALS
>

// /register
export type ErrorSignupResponse = ErrorResponse<
typeof RESPONSE_MESSAGES.ERROR_VERIFICATION_CHECK_ATTEMPTS_REACHED |
typeof RESPONSE_MESSAGES.ERROR_VERIFY_PHONE_1 | 
typeof RESPONSE_MESSAGES.ERROR_REGISTRATION
>
// /update-password
export type ErrorUpdatingPasswordResponse = ErrorResponse<
typeof RESPONSE_MESSAGES.ERROR_VERIFICATION_CHECK_ATTEMPTS_REACHED |
typeof RESPONSE_MESSAGES.ERROR_VERIFY_PHONE_1 | 
typeof RESPONSE_MESSAGES.ERROR_UPDATING_PASSWORD
>

// /verify-number 
export type SuccessVerifyResponse = SuccessResponse<
typeof RESPONSE_MESSAGES.SMS_SENDED_PHONE
>
// /verify-number
export type ErrorVerifyRegistrationResponse = ErrorResponse< 
typeof RESPONSE_MESSAGES.ERROR_VERIFICATION_SEND_ATTEMPTS_REACHED | 
  typeof RESPONSE_MESSAGES.ERROR_SENDED_SMS_FOR_VERIFY_1 | 
  typeof RESPONSE_MESSAGES.ERROR_VERIFICATION |
  typeof RESPONSE_MESSAGES.ERROR_NUMBER_IS_EXIST
>
// /reset-password
export type ErrorVerifyResetPasswordResponse = ErrorResponse< 
typeof RESPONSE_MESSAGES.ERROR_VERIFICATION_SEND_ATTEMPTS_REACHED | 
  typeof RESPONSE_MESSAGES.ERROR_SENDED_SMS_FOR_VERIFY_1 | 
  typeof RESPONSE_MESSAGES.ERROR_VERIFICATION |
  typeof RESPONSE_MESSAGES.ERROR_NOT_FOUND
>

// /push-notification-token
export type ErrorPushNotificationTokenResponse = ErrorResponse<
  typeof RESPONSE_MESSAGES.ERROR_INVALID_CREDENTIALS |
  typeof RESPONSE_MESSAGES.ERROR_NOT_AUTH>
  
export type SuccessPushNotificationTokenResponse = SuccessResponse<User>
