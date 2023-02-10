// ----------------------------------------------------------
// USER INFO
// В системе пользователь может иметь разные роли COMPANY или USER или и тем и тем или другую
// и соответсвенно для каждой роли накидывается дополниельная информация которая храниться в rolesInfo
// две роли основные COMPANY и USER они соответсвенно common
// так же общие документы у всех ролей
// ----------------------------------------------------------

import { CommonCompanyData } from "./company"
import { ErrorResponse, RESPONSE_MESSAGES, SuccessResponse } from "./response"
import { WasherData, DeleverData } from "./services"

//INFO العامة
interface CommonUserData {
  date: string // ملاد
  gender: string // الجنس
  nationality: string // الجنسية
  city: string 
}

export type WorkRoles = Roles.DELEVER | Roles.WASHER | Roles.USER | Roles.COMPANY // workerRoles() func in utils 

interface RolesInfoMap {
  [Roles.DELEVER]: DeleverData
  [Roles.WASHER]: WasherData
  [Roles.USER]: CommonUserData
  [Roles.COMPANY]: CommonCompanyData
}

export interface GenerateRolesInfo<T extends WorkRoles>  {
  role: T,
  data: RolesInfoMap[T]
}


export type RolesInfo = 
GenerateRolesInfo<Roles.DELEVER> | 
GenerateRolesInfo<Roles.WASHER> | 
GenerateRolesInfo<Roles.USER> | 
GenerateRolesInfo<Roles.COMPANY>

 
// let a = generateRolesInfo(Roles.DELEVER, {isCompany: true, isPowerMan: true});
export const generateRolesInfo = <Key extends WorkRoles>(role: Key, data: RolesInfoMap[Key]): GenerateRolesInfo<Key> => ({ role, data })

// let a = getInfoByRole(Roles.DELEVER, rolesInfo);
export const getInfoByRole = <Key extends WorkRoles>(role: Key, list: GenerateRolesInfo<Key>[]): GenerateRolesInfo<Key> | undefined =>  list.find(ui=> ui.role === role)



// ----------------------------------------------------------
// USER AND ROLES
// ----------------------------------------------------------


export interface Doc {
  type: 'passport' | 'iqama'
  number: string
  photo?: string[]
}

export interface User {
  _id: string;
  id: string
  name: string
  phone: string
  pushTokens: string[]
  roles: Roles[]
  rolesInfo: RolesInfo[]
  createdAt: Date
  password: string
  email?: string
  creator?: ThisType<User>
  docs?: Doc[]
}

export const enum Roles {
  SUPERADMIN= 'superadmin',
  USER= 'user',
  COMPANY= 'company',
  ADMIN= 'admin',
  WASHER= 'washer',
  DELEVER= 'delever'
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
