import { User } from "./user";
export interface CommonCompanyData {
    personCount: number;
    city: string[];
    persons?: User[];
    services: CompanyServices[];
    secondNumber: string;
    email: string;
    additionalInfo: string;
}
export declare enum CompanyServices {
    AIR_CONDITIONER_REPAIR = "air_conditioner_repair",
    CLEANING = "cleaning",
    CAR_WASHING = "car_washing",
    CAR_MOVING = "car_moving"
}
