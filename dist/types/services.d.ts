import { Coords } from "./common";
import { Roles } from "./user";
export interface WasherCarUserData {
    haveCar: boolean;
}
export interface DeleverUserData {
    haveTruck: boolean;
    truckPlateNumber: string;
}
interface DeleveryService {
    datetime: string;
    coords: Coords;
}
interface WashingCarService {
    datetime: string;
    coords: Coords;
    countCar: number;
}
interface WashingBuildService {
    datetime: string;
    coords: Coords;
}
export interface ServicesMap {
    [Roles.DELEVER]: DeleveryService;
    [Roles.WASHER_CAR]: WashingCarService;
    [Roles.WASHER_BUILD_PACKAGE]: WashingBuildService;
    [Roles.WASHER_BUILD_STANDART]: WashingBuildService;
}
export declare type ServiceWorkRoles = Roles.DELEVER | Roles.WASHER_CAR | Roles.WASHER_BUILD_PACKAGE | Roles.WASHER_BUILD_STANDART;
export declare const workerRoles: Roles[];
export {};
