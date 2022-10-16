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

export enum SignUpFields {
  name='name',
  phone='phone',
  password='password',
  email='email',
  code='code',
}

export interface SignUpLoginBody {
  [SignUpFields.password]: string
  [SignUpFields.name]: string,
  [SignUpFields.phone]: string
  [SignUpFields.code]: string
  [SignUpFields.email]?: string
}

// ----------------------------------------------------------
// SIGIN
// ----------------------------------------------------------

export enum SignInFields {
  phone='phone',
  password='password',
}

export interface SignInLoginBody {
  [SignInFields.phone]: string
  [SignInFields.password]: string
}

// ----------------------------------------------------------
// SIGIN / SIGNUP RESPONSE
// ----------------------------------------------------------

export interface SignByLoginSuccessResponse {
  user: User,
  token: string
  success: true
}

