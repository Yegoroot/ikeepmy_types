// ----------------------------------------------------------
// USER INFO
// ----------------------------------------------------------

interface UserData {
  date: string // ملاد
  gender: string // الجنس
  nationality: string // الجنسية
  city: string 
}

interface CompanyData {
  personCount: number 
  city: string[]
  persons?: User[]
}

interface WasherData {
  haveCar: boolean // هل عندك شاحنة نقل السيارات؟ نعم لا
}

interface DeleverData {
  haveTruck: boolean // هل عندك شاحنة نقل السيارات؟ نعم لا
  truckPlateNumber: string // رقم  لوحة  الشاحنة 
}

type RolesInfoTypes = Roles.DELEVER | Roles.WASHER | Roles.USER | Roles.COMPANY
 

interface RolesInfoMap {
  [Roles.DELEVER]: DeleverData
  [Roles.WASHER]: WasherData
  [Roles.USER]: UserData
  [Roles.COMPANY]: CompanyData
}

export interface GenerateRolesInfo<T extends RolesInfoTypes>  {
  role: T,
  data: RolesInfoMap[T]
}


export type RolesInfo = 
GenerateRolesInfo<Roles.DELEVER> | 
GenerateRolesInfo<Roles.WASHER> | 
GenerateRolesInfo<Roles.USER> | 
GenerateRolesInfo<Roles.COMPANY>

 
// let a = generateRolesInfo(Roles.DELEVER, {isCompany: true, isPowerMan: true});
export const generateRolesInfo = <Key extends RolesInfoTypes>(role: Key, data: RolesInfoMap[Key]): GenerateRolesInfo<Key> => ({ role, data })

// let a = getInfoByRole(Roles.DELEVER, rolesInfo);
export const getInfoByRole = <Key extends RolesInfoTypes>(role: Key, list: GenerateRolesInfo<Key>[]): GenerateRolesInfo<Key> | undefined =>  list.find(ui=> ui.role === role)



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
  roles: Roles[]
  rolesInfo: RolesInfo[]
  createdAt: Date
  password: string
  email?: string
  creator?: ThisType<User>
  docs?: Doc[]
}

export enum Roles {
  SUPERADMIN= 'superadmin',
  USER= 'user',
  COMPANY= 'company',
  ADMIN= 'admin',
  WASHER= 'washer',
  DELEVER= 'delever'
}



