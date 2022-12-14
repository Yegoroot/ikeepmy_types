import { Roles } from '../types';
export declare const isSuperadmin: (roles: Roles[]) => boolean;
export declare const isAdmin: (roles: Roles[]) => boolean;
export declare const isAuth: (roles: Roles[] | undefined) => number;
export declare const isUserHaveAccess: (accessRoles: Roles[], userRoles: Roles[]) => boolean;
export declare const excludeAdminRoles: (roles: Roles[]) => Roles[];
export declare const excludeSystemRoles: (roles: Roles[]) => Roles[];
export declare const isWorkerRoles: (roles: Roles[]) => boolean;
export declare const isCustomer: (roles: Roles[]) => boolean;
