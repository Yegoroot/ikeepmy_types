import { Roles } from '../user'

export const isSuperadmin = (roles: Roles[]) => roles.includes(Roles.SUPERADMIN)
export const isAdmin = (roles: Roles[]) => roles.includes(Roles.ADMIN)
export const isAuth = (roles: Roles[] | undefined) => roles && roles.length
export const isUserHaveAccess = (accessRoles: Roles[], userRoles: Roles[]) =>
  accessRoles.some(ar=> userRoles.includes(ar))
export const excludeAdminRoles = (roles: Roles[]) => roles.filter(r=> r !== Roles.SUPERADMIN && r !== Roles.ADMIN)