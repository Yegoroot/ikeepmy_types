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
export interface WashingCarService {
    datetime: string;
    coords: Coords;
    countCar: number;
}
export interface CleaningService {
    coords: Coords;
    package: 'week' | 'month' | undefined;
    datetime: string;
    numberCleaners: number;
    premise: string;
}
export interface ServicesMap {
    [Roles.DELEVER]: DeleveryService;
    [Roles.WASHER_CAR]: WashingCarService;
    [Roles.PLACE_DEEP_CLEANING]: CleaningService;
    [Roles.PLACE_STANDART_CLEANING]: CleaningService;
}
export declare type ServiceWorkRoles = Roles.DELEVER | Roles.WASHER_CAR | Roles.PLACE_DEEP_CLEANING | Roles.PLACE_STANDART_CLEANING;
export declare const workerRoles: Roles[];
export {};
