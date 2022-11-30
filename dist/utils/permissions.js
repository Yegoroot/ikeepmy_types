"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWorkerRoles = exports.excludeSystemRoles = exports.excludeAdminRoles = exports.isUserHaveAccess = exports.isAuth = exports.isAdmin = exports.isSuperadmin = void 0;
const types_1 = require("../types");
const isSuperadmin = (roles) => roles.includes(types_1.Roles.SUPERADMIN);
exports.isSuperadmin = isSuperadmin;
const isAdmin = (roles) => roles.includes(types_1.Roles.ADMIN);
exports.isAdmin = isAdmin;
const isAuth = (roles) => roles && roles.length;
exports.isAuth = isAuth;
const isUserHaveAccess = (accessRoles, userRoles) => accessRoles.some(ar => userRoles.includes(ar));
exports.isUserHaveAccess = isUserHaveAccess;
const excludeAdminRoles = (roles) => roles.filter(r => r !== types_1.Roles.SUPERADMIN &&
    r !== types_1.Roles.ADMIN);
exports.excludeAdminRoles = excludeAdminRoles;
const excludeSystemRoles = (roles) => roles.filter(r => r !== types_1.Roles.SUPERADMIN &&
    r !== types_1.Roles.ADMIN &&
    r !== types_1.Roles.USER);
exports.excludeSystemRoles = excludeSystemRoles;
const isWorkerRoles = (roles) => roles.some(r => [types_1.Roles.COMPANY, types_1.Roles.DELEVER, types_1.Roles.WASHER].includes(r));
exports.isWorkerRoles = isWorkerRoles;
