// ----------------------------------------------------------
// USER AND ROLES
// ----------------------------------------------------------

export interface User {
  _id: string;
  id: string
  name: string
  phone: string
  roles: Roles[]
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

// export type Role = Roles[keyof Roles]

// ----------------------------------------------------------
// SIGNUP 
// ----------------------------------------------------------

export interface VerifyNumberBody {
  phone: string
}

export interface SignUpLoginBody {
  password: string
  name: string,
  phone: string
  code: string
  email?: string
}

// ----------------------------------------------------------
// SIGIN
// ----------------------------------------------------------

export interface SignInLoginBody {
  phone: string
  password: string
}


// ----------------------------------------------------------
// Reset PASSWORD
// ----------------------------------------------------------

export interface UpdatePasswordBody {
  phone: string
  password: string
  code: string
}


