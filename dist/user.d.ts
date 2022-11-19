interface WasherData {
    isCompany: boolean;
    hasACar: boolean;
}
interface DeleverData {
    isCompany: boolean;
    isPowerMan: boolean;
}
declare type UserInfoRoleKeys = Roles.DELEVER | Roles.WASHER;
interface UserInfoMap {
    [Roles.DELEVER]: DeleverData;
    [Roles.WASHER]: WasherData;
}
interface GenerateUserInfo<T extends UserInfoRoleKeys> {
    role: T;
    data: UserInfoMap[T];
}
export declare type UserInfo = GenerateUserInfo<UserInfoRoleKeys>;
export declare const generateUserInfo: <Key extends UserInfoRoleKeys>(role: Key, data: UserInfoMap[Key]) => GenerateUserInfo<Key>;
export interface User {
    _id: string;
    id: string;
    name: string;
    phone: string;
    roles: Roles[];
    info: UserInfo[];
    createdAt: Date;
    password: string;
    email?: string;
    creator?: ThisType<User>;
}
export declare enum Roles {
    SUPERADMIN = "superadmin",
    USER = "user",
    ADMIN = "admin",
    WASHER = "washer",
    DELEVER = "delever"
}
export {};
