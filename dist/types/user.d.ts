import { CommonCompanyData } from "./company";
import { WasherCarUserData, DeleverUserData } from "./services";
interface CommonUserData {
    date: string;
    gender: string;
    nationality: string;
    city: string;
}
export declare type WorkRoles = Roles.DELEVER | Roles.WASHER_CAR | Roles.PLACE_DEEP_CLEANING | Roles.PLACE_STANDART_CLEANING | Roles.USER | Roles.COMPANY;
interface RolesInfoMap {
    [Roles.DELEVER]: DeleverUserData;
    [Roles.WASHER_CAR]: WasherCarUserData;
    [Roles.PLACE_DEEP_CLEANING]: {};
    [Roles.PLACE_STANDART_CLEANING]: {};
    [Roles.USER]: CommonUserData;
    [Roles.COMPANY]: CommonCompanyData;
}
export interface GenerateRolesInfo<T extends WorkRoles> {
    role: T;
    data: RolesInfoMap[T];
}
export declare type RolesInfo = GenerateRolesInfo<Roles.DELEVER> | GenerateRolesInfo<Roles.WASHER_CAR> | GenerateRolesInfo<Roles.PLACE_DEEP_CLEANING> | GenerateRolesInfo<Roles.PLACE_STANDART_CLEANING> | GenerateRolesInfo<Roles.USER> | GenerateRolesInfo<Roles.COMPANY>;
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
    WASHER_CAR = "washer_car",
    PLACE_STANDART_CLEANING = "place_standart_cleaning",
    PLACE_DEEP_CLEANING = "place_deep_cleaning",
    DELEVER = "delever"
}
export {};
