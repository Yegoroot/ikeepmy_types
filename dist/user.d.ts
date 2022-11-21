interface WasherData {
    fulleName: string;
    date: string;
    gender: string;
    city: string;
    nationality: string;
    typeDocument: 'passport' | 'iqama';
    documentNumber: string;
    haveCar: boolean;
}
interface DeleverData {
    fulleName: string;
    date: string;
    gender: string;
    city: string;
    typeDocument: 'passport' | 'iqama';
    documentNumber: string;
    haveTruck: boolean;
    truckPlateNumber: string;
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
export declare type UserInfo = GenerateUserInfo<Roles.DELEVER> | GenerateUserInfo<Roles.WASHER>;
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
