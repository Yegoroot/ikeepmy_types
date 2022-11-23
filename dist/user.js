"use strict";
// ----------------------------------------------------------
// USER INFO
// В системе пользователь может иметь разные роли COMPANY или USER или и тем и тем или другую
// и соответсвенно для каждой роли накидывается дополниельная информация которая храниться в rolesInfo
// две роли основные COMPANY и USER они соответсвенно common
// так же общие документы у всех ролей
// ----------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = exports.getInfoByRole = exports.generateRolesInfo = exports.CompanyServices = void 0;
var CompanyServices;
(function (CompanyServices) {
    CompanyServices["AIR_CONDITIONER_REPAIR"] = "air_conditioner_repair";
    CompanyServices["CLEANING"] = "cleaning";
    CompanyServices["CAR_WASHING"] = "car_washing";
    CompanyServices["CAR_TRANSPORT"] = "car_transport";
})(CompanyServices = exports.CompanyServices || (exports.CompanyServices = {}));
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
