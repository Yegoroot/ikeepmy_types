import { Roles, workerRoles } from '../types'

export const isSuperadmin = (roles: Roles[]) => roles.includes(Roles.SUPERADMIN)

export const isAdmin = (roles: Roles[]) => roles.includes(Roles.ADMIN)

export const isAuth = (roles: Roles[] | undefined) => roles && roles.length

export const isUserHaveAccess = (accessRoles: Roles[], userRoles: Roles[]) =>
  accessRoles.some(ar=> userRoles.includes(ar))

export const excludeAdminRoles = (roles: Roles[]) => roles.filter(r=> 
  r !== Roles.SUPERADMIN && 
  r !== Roles.ADMIN)

export const excludeSystemRoles = (roles: Roles[]) => roles.filter(r=> 
  r !== Roles.SUPERADMIN && 
  r !== Roles.ADMIN && 
  r !== Roles.USER)

export const isWorkerRoles = (roles: Roles[]) => roles.some(r=> 
  workerRoles.includes(r))

// roles [company] or [user]
export const isCustomer = (roles: Roles[]) => {
  const isNotWorker = !isWorkerRoles(roles)
  const isNotSuperadmin = !isSuperadmin(roles)
  const isNotAdmin = !isAdmin(roles)

  return isNotWorker && isNotSuperadmin && isNotAdmin
}
