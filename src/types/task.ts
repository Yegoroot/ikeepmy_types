import { Coords, GetListParams } from "./common";
import { ErrorResponse, RESPONSE_MESSAGES } from "./response";
import { Roles, User, WorkRoles } from "./user";


// ---------------------------------------------------
// ---------------------------------------------------

// STATUS

export const enum TaskStatus {
  NEW="new",
  ASSIGNED="assigned",
  // IN_WORK="in_work",
  CANCELED="canceled",
  DONE="done"
}

// ---------------------------------------------------
// ---------------------------------------------------

// SERVICES

export interface DeleveryService {
  datetime: string
  coords: Coords
}

export interface WashingService {
  datetime: string
  coords: Coords
  countCar: number
}


interface ServicesMap {
  [Roles.DELEVER]: DeleveryService
  [Roles.WASHER]: WashingService
}

// ---------------------------------------------------
// ---------------------------------------------------

// TASK

type TaskHistory = {
  user: User, 
  action: TaskStatus.ASSIGNED | TaskStatus.CANCELED | TaskStatus.DONE | 'updated' | 'created', 
  datetime: string, 
  data: Record<string, unknown>
}
type Comment = {
  user: User, 
  text: string, 
  datetime: string
}

export interface GenerateTask<T extends Roles.DELEVER | Roles.WASHER >  {
  _id: string
  user: User // private
  assigned: User  // private
  comments: Comment[] // private
  status: TaskStatus,
  roleWorker: T
  data: ServicesMap[T] 
  description: string
  history: TaskHistory[]
  assignedAt: String
  createdAt: String
  updatedAt: String
  canceledAt: String
}

export type Task = GenerateTask<Roles.DELEVER> | GenerateTask<Roles.WASHER>


// ---------------------------------------------------
// ---------------------------------------------------

// PARAMS

export interface GetTasksParams extends GetListParams {
  status?: TaskStatus
  roleWorker?: WorkRoles
  user?: string // who create
  assigned?: string
}


// ---------------------------------------------------
// ---------------------------------------------------

// RESPONCES

// list task
export type ErrorResponseGetTasks = { success: false, data: [] }

// task create
export type ErrorResponseCreateTask = ErrorResponse< 
  typeof RESPONSE_MESSAGES.ERROR_PROVIDE_ALL_DATA 
>

export type ErrorResponseGetTask = ErrorResponse< 
  typeof RESPONSE_MESSAGES.ERROR_NOT_FOUND |  
  typeof RESPONSE_MESSAGES.ERROR_NOT_AUTH  
>

export type ErrorResponseAssignTask = ErrorResponse< 
  typeof RESPONSE_MESSAGES.ERROR_NOT_FOUND |  
  typeof RESPONSE_MESSAGES.ERROR_DONT_HAVE_ROLE | 
  typeof RESPONSE_MESSAGES.ERROR_CANNOT_BE_TAKEN_MORE_THAN_5 | 
  typeof RESPONSE_MESSAGES.ERROR_DIFFERENCE_BETWEEN_TASKS_80  
>

export type ErrorResponseCancelTask = ErrorResponse< 
  typeof RESPONSE_MESSAGES.ERROR_NOT_FOUND |  
  typeof RESPONSE_MESSAGES.ERROR_DONT_HAVE_PERMISSIONS  
>

export type ErrorResponseDoneTask = ErrorResponse< 
  typeof RESPONSE_MESSAGES.ERROR_NOT_FOUND |  
  typeof RESPONSE_MESSAGES.ERROR_DONT_HAVE_PERMISSIONS  
>