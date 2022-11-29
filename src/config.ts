export const isDevelopment = process.env.NODE_ENV === 'development'

export const API_URL = isDevelopment ? 'http://localhost:5000' : 'https://api.ikeepmy.com'

export const SIGN_IN_URL = `${API_URL}/auth/login`

export enum ROUTES {
  LOGIN= '/login',
  USERS= '/users',
  COMMING_SOON='/status/coming-soon'
}

export enum URLS {
  TASKS='/tasks',
  USERS='/users'
}
