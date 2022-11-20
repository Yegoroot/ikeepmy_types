interface WasherData {
    isCompany: boolean;
    hasACar: boolean;
}
interface DeleverData {
    fulleName: string;
    age: number;
    gender: string;
    city: string;
    nationality: string;
    nationalCardID: string;
    canWorkAllTime: boolean;
    haveTruck: boolean;
    truckPlateNumber: string;
    photo: string;
    nationalCard: string;
    truck?: string;
}
declare type UserInfoRoleKeys = Roles.DELEVER | Roles.WASHER;
interface UserInfoMap {
    [Roles.DELEVER]: DeleverData;
    [Roles.WASHER]: WasherData;
}
export interface GenerateUserInfo<T extends UserInfoRoleKeys> {
    role: T;
    data: UserInfoMap[T];
}
export declare type UserInfo = GenerateUserInfo<UserInfoRoleKeys>;
export declare const generateUserInfo: <Key extends UserInfoRoleKeys>(role: Key, data: UserInfoMap[Key]) => GenerateUserInfo<Key>;
export declare const getInfoByRole: <Key extends UserInfoRoleKeys>(role: Key, list: GenerateUserInfo<Key>[]) => GenerateUserInfo<Key>;
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
