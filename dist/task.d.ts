import { Coords } from "./common";
import { Roles, User } from "./user";
declare enum TaskStatus {
    NEW = "new",
    ASSIGNED = "assigned",
    IN_WORK = "in_work",
    DONE = "done"
}
interface DeleveryService {
    datetime: string;
    coords: Coords;
}
interface WashingService {
    datetime: string;
    coords: Coords;
    countCar: number;
}
interface ServicesMap {
    [Roles.DELEVER]: DeleveryService;
    [Roles.WASHER]: WashingService;
}
export interface GenerateTask<T extends Roles.DELEVER | Roles.WASHER> {
    creator: User;
    responsable: User;
    datetime: string;
    status: TaskStatus;
    roleWorker: T;
    data: ServicesMap[T];
    comments: {
        user: User;
        text: string;
        datetime: string;
    }[];
}
export declare type Task = GenerateTask<Roles.DELEVER> | GenerateTask<Roles.WASHER>;
export {};
