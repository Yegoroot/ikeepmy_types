"use strict";
// ----------------------------------------------------------
// USER INFO
// ----------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = exports.getInfoByRole = exports.generateRolesInfo = void 0;
// let a = generateRolesInfo(Roles.DELEVER, {isCompany: true, isPowerMan: true});
const generateRolesInfo = (role, data) => ({ role, data });
exports.generateRolesInfo = generateRolesInfo;
// let a = getInfoByRole(Roles.DELEVER, rolesInfo);
const getInfoByRole = (role, list) => list.find(ui => ui.role === role);
exports.getInfoByRole = getInfoByRole;
var Roles;
(function (Roles) {
    Roles["SUPERADMIN"] = "superadmin";
    Roles["USER"] = "user";
    Roles["COMPANY"] = "company";
    Roles["ADMIN"] = "admin";
    Roles["WASHER"] = "washer";
    Roles["DELEVER"] = "delever";
})(Roles = exports.Roles || (exports.Roles = {}));
