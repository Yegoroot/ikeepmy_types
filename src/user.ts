// ----------------------------------------------------------
// USER INFO
// ----------------------------------------------------------

interface WasherData {
  fulleName: string // الاسم الكامل 
  date: string // ملاد
  gender: string // الجنس
  city: string // 'marrakech' | 'casablanca' | 'tanger' | 'rabat'
  nationality: string // الجنسية
  typeDocument: 'passport' | 'iqama'
  documentNumber: string
  haveCar: boolean // هل عندك شاحنة نقل السيارات؟ نعم لا
  // docs
  // photoPerson: string // صورة شخصية
  // photoNationalCard: string // البطاقه الوطنية 
}

interface DeleverData {
  fulleName: string // الاسم الكامل 
  date: string // ملاد
  gender: string // الجنس
  city: string // FIXME may be location
  typeDocument: 'passport' | 'iqama'
  documentNumber: string
  haveTruck: boolean // هل عندك شاحنة نقل السيارات؟ نعم لا
  truckPlateNumber: string // رقم  لوحة  الشاحنة 
  // docs
  // photoPerson: string // صورة شخصية
  // photoNationalCard: string // البطاقه الوطنية 
  // photoTruck?: string // صورة الشاحنة
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


export type UserInfo = GenerateUserInfo<Roles.DELEVER> | GenerateUserInfo<Roles.WASHER> 

 
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



