import { Coords } from "./common";
import { Roles, User } from "./user";

enum TaskStatus {
  NEW="new",
  ASSIGNED="assigned",
  IN_WORK="in_work",
  DONE="done"
}

interface ServicesMap {
  [Roles.DELEVER]: {str: string}
  [Roles.WASHER]: {str: string}
}

export interface GenerateTask<T extends Roles.DELEVER | Roles.WASHER >  {
  creator: User
  responsable: User
  coords: Coords
  datetime: string
  status: TaskStatus,
  roleWorker: T
  data: ServicesMap[T]
}

export type Task = GenerateTask<Roles.DELEVER> | GenerateTask<Roles.WASHER>