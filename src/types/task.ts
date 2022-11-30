import { Coords } from "./common";
import { ErrorResponse, RESPONSE_MESSAGES } from "./response";
import { Roles, User } from "./user";


interface ServicesMap {
  [Roles.DELEVER]: DeleveryService
  [Roles.WASHER]: WashingService
}

type Comment = {user: User, text: string, datetime: string}


export enum TaskStatus {
  NEW="new",
  ASSIGNED="assigned",
  IN_WORK="in_work",
  DONE="done"
}

export interface DeleveryService {
  datetime: string
  coords: Coords
}

export interface WashingService {
  datetime: string
  coords: Coords
  countCar: number
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
  createdAt: string
  updatedAt: string
}

export type Task = GenerateTask<Roles.DELEVER> | GenerateTask<Roles.WASHER>


// error response list
export type ErrorResponseGetTasks = { success: false, data: [] }