// ----------------------------------------------------------
// USER INFO
// ----------------------------------------------------------

// FIXME get data from Anas
interface WasherData {
  isCompany: boolean
  hasACar: boolean
}

// FIXME get data from Anas
interface DeleverData {
  isCompany: boolean
  isPowerMan: boolean
}

type UserInfoRoleKeys = Roles.DELEVER | Roles.WASHER


interface UserInfoMap {
  [Roles.DELEVER]: DeleverData,
  [Roles.WASHER]: WasherData
}

export interface GenerateUserInfo<T extends UserInfoRoleKeys>  {
  role: T,
  data: UserInfoMap[T]
}


export type UserInfo = GenerateUserInfo<UserInfoRoleKeys>

 
// let a = generateUserInfo(Roles.DELEVER, {isCompany: true, isPowerMan: true});
export const generateUserInfo = <Key extends UserInfoRoleKeys>(role: Key, data: UserInfoMap[Key]): GenerateUserInfo<Key> => ({ role, data })



// ----------------------------------------------------------
// USER AND ROLES
// ----------------------------------------------------------

export interface User {
  _id: string;
  id: string
  name: string
  phone: string
  roles: Roles[]
  info: UserInfo[]
  createdAt: Date
  password: string
  email?: string
  creator?: ThisType<User>
}

export enum Roles {
  SUPERADMIN= 'superadmin',
  USER= 'user',
  ADMIN= 'admin',
  WASHER= 'washer',
  DELEVER= 'delever'
}



