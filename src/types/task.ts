import { Coords, GetListParams } from "./common";
import { Roles, User, WorkRoles } from "./user";


// ---------------------------------------------------
// ---------------------------------------------------

// STATUS

export enum TaskStatus {
  NEW="new",
  ASSIGNED="assigned",
  IN_WORK="in_work",
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

type Comment = {user: User, text: string, datetime: string}

export interface GenerateTask<T extends Roles.DELEVER | Roles.WASHER >  {
  _id: string
  user: User // private
  assigned: User  // private
  comments: Comment[] // private
  status: TaskStatus,
  roleWorker: T
  data: ServicesMap[T] 
  description: string
  assignedAt: string
  createdAt: string
  updatedAt: string
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

export type ErrorResponseGetTasks = { success: false, data: [] }