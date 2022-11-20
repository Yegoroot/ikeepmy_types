"use strict";
// ----------------------------------------------------------
// USER INFO
// ----------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = exports.getInfoByRole = exports.generateUserInfo = void 0;
// let a = generateUserInfo(Roles.DELEVER, {isCompany: true, isPowerMan: true});
const generateUserInfo = (role, data) => ({ role, data });
exports.generateUserInfo = generateUserInfo;
// let a = getInfoByRole(Roles.DELEVER, userInfo);
const getInfoByRole = (role, list) => list.find(ui => ui.role === role);
exports.getInfoByRole = getInfoByRole;
var Roles;
(function (Roles) {
    Roles["SUPERADMIN"] = "superadmin";
    Roles["USER"] = "user";
    Roles["ADMIN"] = "admin";
    Roles["WASHER"] = "washer";
    Roles["DELEVER"] = "delever";
})(Roles = exports.Roles || (exports.Roles = {}));
