"use strict";
// ----------------------------------------------------------
// USER INFO
// В системе пользователь может иметь разные роли COMPANY или USER или и тем и тем или другую
// и соответсвенно для каждой роли накидывается дополниельная информация которая храниться в rolesInfo
// две роли основные COMPANY и USER они соответсвенно common
// так же общие документы у всех ролей
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
    Roles["WASHER_CAR"] = "washer_car";
    Roles["WASHER_BUILD_STANDART"] = "washer_build_standart";
    Roles["WASHER_BUILD_DEEP"] = "washer_build_deep";
    Roles["DELEVER"] = "delever";
})(Roles = exports.Roles || (exports.Roles = {}));
