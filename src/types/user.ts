// ----------------------------------------------------------
// USER INFO
// В системе пользователь может иметь разные роли COMPANY или USER или и тем и тем или другую
// и соответсвенно для каждой роли накидывается дополниельная информация которая храниться в rolesInfo
// две роли основные COMPANY и USER они соответсвенно common
// так же общие документы у всех ролей
// ----------------------------------------------------------

import { CommonCompanyData } from "./company"
import { WasherCarUserData, DeleverUserData,  } from "./services"

//INFO العامة
interface CommonUserData {
  date: string // ملاد
  gender: string // الجنس
  nationality: string // الجنسية
  city: string 
}

export type WorkRoles = 
  Roles.DELEVER | 
  Roles.WASHER_CAR | 
  Roles.WASHER_BUILD_PACKAGE | 
  Roles.WASHER_BUILD_STANDART | 
  Roles.USER | 
  Roles.COMPANY // workerRoles() func in utils 

  // USER_INFO BY ROLES
interface RolesInfoMap {
  [Roles.DELEVER]: WasherCarUserData
  [Roles.WASHER_CAR]: DeleverUserData
  [Roles.WASHER_BUILD_PACKAGE]: {}
  [Roles.WASHER_BUILD_STANDART]: {}
  [Roles.USER]: CommonUserData
  [Roles.COMPANY]: CommonCompanyData
}

export interface GenerateRolesInfo<T extends WorkRoles>  {
  role: T,
  data: RolesInfoMap[T]
}


export type RolesInfo = 
GenerateRolesInfo<Roles.DELEVER> | 
GenerateRolesInfo<Roles.WASHER_CAR> | 
GenerateRolesInfo<Roles.WASHER_BUILD_PACKAGE> | 
GenerateRolesInfo<Roles.WASHER_BUILD_STANDART> | 
GenerateRolesInfo<Roles.USER> | 
GenerateRolesInfo<Roles.COMPANY>

 
// let a = generateRolesInfo(Roles.DELEVER, {isCompany: true, isPowerMan: true});
export const generateRolesInfo = <Key extends WorkRoles>(role: Key, data: RolesInfoMap[Key]): GenerateRolesInfo<Key> => ({ role, data })

// let a = getInfoByRole(Roles.DELEVER, rolesInfo);
export const getInfoByRole = <Key extends WorkRoles>(role: Key, list: GenerateRolesInfo<Key>[]): GenerateRolesInfo<Key> | undefined =>  list.find(ui=> ui.role === role)



// ----------------------------------------------------------
// USER AND ROLES
// ----------------------------------------------------------


export interface Doc {
  type: 'passport' | 'iqama'
  number: string
  photo?: string[]
}

export interface User {
  _id: string;
  id: string
  name: string
  phone: string
  pushTokens: string[]
  roles: Roles[]
  rolesInfo: RolesInfo[]
  createdAt: Date
  password: string
  email?: string
  creator?: ThisType<User>
  docs?: Doc[]
}

export const enum Roles {
  SUPERADMIN= 'superadmin',
  USER= 'user',
  COMPANY= 'company',
  ADMIN= 'admin',
  WASHER_CAR= 'washer_car',
  WASHER_BUILD_STANDART='washer_build_standart',
  WASHER_BUILD_PACKAGE='washer_build_package',
  DELEVER= 'delever'
}



