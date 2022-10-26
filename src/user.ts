// ----------------------------------------------------------
// USER AND ROLES
// ----------------------------------------------------------

export interface User {
  _id: string;
  id: string
  name: string
  phone: string
  role: Roles
  createdAt: Date
  password: string
  email?: string
  creator?: ThisType<User>
}

export interface Roles {
  SUPERADMIN: 'superadmin'
  USER: 'user'
  ADMIN: 'admin'
}

export type Role = Roles[keyof Roles]

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
// RESTORE PASSWORD
// ----------------------------------------------------------

export interface RestorePasswordBody {
  phone: string
  password: string
  code: string
}


