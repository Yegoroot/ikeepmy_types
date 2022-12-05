import { CommonCompanyData } from "./company";
interface CommonUserData {
    date: string;
    gender: string;
    nationality: string;
    city: string;
}
interface WasherData {
    haveCar: boolean;
}
interface DeleverData {
    haveTruck: boolean;
    truckPlateNumber: string;
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
export {};
