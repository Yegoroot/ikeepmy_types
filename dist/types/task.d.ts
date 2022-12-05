import { Coords, GetListParams } from "./common";
import { ErrorResponse, RESPONSE_MESSAGES } from "./response";
import { Roles, User, WorkRoles } from "./user";
export declare enum TaskStatus {
    NEW = "new",
    ASSIGNED = "assigned",
    IN_WORK = "in_work",
    DONE = "done"
}
export interface DeleveryService {
    datetime: string;
    coords: Coords;
}
export interface WashingService {
    datetime: string;
    coords: Coords;
    countCar: number;
}
interface ServicesMap {
    [Roles.DELEVER]: DeleveryService;
    [Roles.WASHER]: WashingService;
}
declare type Comment = {
    user: User;
    text: string;
    datetime: string;
};
export interface GenerateTask<T extends Roles.DELEVER | Roles.WASHER> {
    _id: string;
    user: User;
    assigned: User;
    comments: Comment[];
    status: TaskStatus;
    roleWorker: T;
    data: ServicesMap[T];
    description: string;
    assignedAt: string;
    createdAt: string;
    updatedAt: string;
}
export declare type Task = GenerateTask<Roles.DELEVER> | GenerateTask<Roles.WASHER>;
export interface GetTasksParams extends GetListParams {
    status?: TaskStatus;
    roleWorker?: WorkRoles;
    user?: string;
    assigned?: string;
}
export declare type ErrorResponseGetTasks = {
    success: false;
    data: [];
};
export declare type ErrorResponseCreateTask = ErrorResponse<typeof RESPONSE_MESSAGES.ERROR_PROVIDE_ALL_DATA>;
export {};
