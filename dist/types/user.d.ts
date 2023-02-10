import { CommonCompanyData } from "./company";
import { ErrorResponse, RESPONSE_MESSAGES, SuccessResponse } from "./response";
import { WasherData, DeleverData } from "./services";
interface CommonUserData {
    date: string;
    gender: string;
    nationality: string;
    city: string;
}
export declare type WorkRoles = Roles.DELEVER | Roles.WASHER | Roles.USER | Roles.COMPANY;
interface RolesInfoMap {
    [Roles.DELEVER]: DeleverData;
    [Roles.WASHER]: WasherData;
    [Roles.USER]: CommonUserData;
    [Roles.COMPANY]: CommonCompanyData;
}
export interface GenerateRolesInfo<T extends WorkRoles> {
    role: T;
    data: RolesInfoMap[T];
}
export declare type RolesInfo = GenerateRolesInfo<Roles.DELEVER> | GenerateRolesInfo<Roles.WASHER> | GenerateRolesInfo<Roles.USER> | GenerateRolesInfo<Roles.COMPANY>;
export declare const generateRolesInfo: <Key extends WorkRoles>(role: Key, data: RolesInfoMap[Key]) => GenerateRolesInfo<Key>;
export declare const getInfoByRole: <Key extends WorkRoles>(role: Key, list: GenerateRolesInfo<Key>[]) => GenerateRolesInfo<Key>;
export interface Doc {
    type: 'passport' | 'iqama';
    number: string;
    photo?: string[];
}
export interface User {
    _id: string;
    id: string;
    name: string;
    phone: string;
    pushTokens: string[];
    roles: Roles[];
    rolesInfo: RolesInfo[];
    createdAt: Date;
    password: string;
    email?: string;
    creator?: ThisType<User>;
    docs?: Doc[];
}
export declare const enum Roles {
    SUPERADMIN = "superadmin",
    USER = "user",
    COMPANY = "company",
    ADMIN = "admin",
    WASHER = "washer",
    DELEVER = "delever"
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
export {};
