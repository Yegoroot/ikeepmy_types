// ----------------------------------------------------------
// USER INFO
// ----------------------------------------------------------

interface WasherData {
  haveCar: boolean // هل عندك شاحنة نقل السيارات؟ نعم لا
}

interface DeleverData {
  haveTruck: boolean // هل عندك شاحنة نقل السيارات؟ نعم لا
  truckPlateNumber: string // رقم  لوحة  الشاحنة 
}

type RolesInfoTypes = Roles.DELEVER | Roles.WASHER


interface RolesInfoMap {
  [Roles.DELEVER]: DeleverData,
  [Roles.WASHER]: WasherData
}

export interface GenerateRolesInfo<T extends RolesInfoTypes>  {
  role: T,
  data: RolesInfoMap[T]
}


export type RolesInfo = GenerateRolesInfo<Roles.DELEVER> | GenerateRolesInfo<Roles.WASHER> 

 
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
  date?: string // ملاد
  gender?: string // الجنس
  docs?: Doc[]
  nationality?: string // الجنسية
  city?: string 
}

export enum Roles {
  SUPERADMIN= 'superadmin',
  USER= 'user',
  ADMIN= 'admin',
  WASHER= 'washer',
  DELEVER= 'delever'
}



