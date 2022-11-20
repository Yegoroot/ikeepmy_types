// ----------------------------------------------------------
// USER INFO
// ----------------------------------------------------------

interface WasherData {
  isCompany: boolean
  hasACar: boolean
}

interface DeleverData {
  fulleName: string // الاسم الكامل 
  age: number // العمر
  gender: string // الجنس
  city: string // FIXME may be location
  nationality: string // FIXME ? may be dont need // الجنسية
  nationalCardID: string // رقم البطاقة الوطنية
  canWorkAllTime: boolean // هل انت مستعد للعمل في كل  وقت ؟ نعم لا
  haveTruck: boolean // هل عندك شاحنة نقل السيارات؟ نعم لا
  truckPlateNumber: string // رقم  لوحة  الشاحنة 
  // docs
  photo: string // صورة شخصية
  nationalCard: string // البطاقه الوطنية 
  truck?: string // صورة الشاحنة
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

// let a = getInfoByRole(Roles.DELEVER, userInfo);
export const getInfoByRole = <Key extends UserInfoRoleKeys>(role: Key, list: GenerateUserInfo<Key>[]): GenerateUserInfo<Key> | undefined =>  list.find(ui=> ui.role === role)



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



