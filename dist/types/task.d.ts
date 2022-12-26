import { Coords, GetListParams } from "./common";
import { ErrorResponse, RESPONSE_MESSAGES } from "./response";
import { Roles, User, WorkRoles } from "./user";
export declare const enum TaskStatus {
    NEW = "new",
    ASSIGNED = "assigned",
    CANCELED = "canceled",
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
declare type TaskLog = {
    user: User;
    action: TaskStatus.ASSIGNED | TaskStatus.CANCELED | TaskStatus.DONE | 'update';
    datetime: string;
    data: Record<string, unknown>;
};
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
    logs: TaskLog[];
    assignedAt: Date;
    createdAt: Date;
    updatedAt: Date;
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
export declare type ErrorResponseGetTask = ErrorResponse<typeof RESPONSE_MESSAGES.ERROR_NOT_FOUND | typeof RESPONSE_MESSAGES.ERROR_NOT_AUTH>;
export declare type ErrorResponseAssignTask = ErrorResponse<typeof RESPONSE_MESSAGES.ERROR_NOT_FOUND | typeof RESPONSE_MESSAGES.ERROR_DONT_HAVE_ROLE>;
export declare type ErrorResponseCancelTask = ErrorResponse<typeof RESPONSE_MESSAGES.ERROR_NOT_FOUND | typeof RESPONSE_MESSAGES.ERROR_DONT_HAVE_PERMISSIONS>;
export {};
