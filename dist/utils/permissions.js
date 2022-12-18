"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCustomer = exports.isWorkerRoles = exports.excludeSystemRoles = exports.excludeAdminRoles = exports.isUserHaveAccess = exports.isAuth = exports.isAdmin = exports.isSuperadmin = void 0;
const isSuperadmin = (roles) => roles.includes("superadmin" /* Roles.SUPERADMIN */);
exports.isSuperadmin = isSuperadmin;
const isAdmin = (roles) => roles.includes("admin" /* Roles.ADMIN */);
exports.isAdmin = isAdmin;
const isAuth = (roles) => roles && roles.length;
exports.isAuth = isAuth;
const isUserHaveAccess = (accessRoles, userRoles) => accessRoles.some(ar => userRoles.includes(ar));
exports.isUserHaveAccess = isUserHaveAccess;
const excludeAdminRoles = (roles) => roles.filter(r => r !== "superadmin" /* Roles.SUPERADMIN */ &&
    r !== "admin" /* Roles.ADMIN */);
exports.excludeAdminRoles = excludeAdminRoles;
const excludeSystemRoles = (roles) => roles.filter(r => r !== "superadmin" /* Roles.SUPERADMIN */ &&
    r !== "admin" /* Roles.ADMIN */ &&
    r !== "user" /* Roles.USER */);
exports.excludeSystemRoles = excludeSystemRoles;
const isWorkerRoles = (roles) => roles.some(r => ["company" /* Roles.COMPANY */, "delever" /* Roles.DELEVER */, "washer" /* Roles.WASHER */].includes(r));
exports.isWorkerRoles = isWorkerRoles;
// roles [company] or [user]
const isCustomer = (roles) => {
    const isNotWorker = !(0, exports.isWorkerRoles)(roles);
    const isNotSuperadmin = !(0, exports.isSuperadmin)(roles);
    const isNotAdmin = !(0, exports.isAdmin)(roles);
    return isNotWorker && isNotSuperadmin && isNotAdmin;
};
exports.isCustomer = isCustomer;
