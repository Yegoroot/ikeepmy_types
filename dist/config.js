"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLS = exports.ROUTES = exports.SIGN_IN_URL = exports.API_URL = exports.isDevelopment = void 0;
exports.isDevelopment = process.env.NODE_ENV === 'development';
exports.API_URL = exports.isDevelopment ? 'http://localhost:5000' : 'https://api.ikeepmy.com';
exports.SIGN_IN_URL = `${exports.API_URL}/auth/login`;
var ROUTES;
(function (ROUTES) {
    ROUTES["LOGIN"] = "/login";
    ROUTES["USERS"] = "/users";
    ROUTES["COMMING_SOON"] = "/status/coming-soon";
})(ROUTES = exports.ROUTES || (exports.ROUTES = {}));
var URLS;
(function (URLS) {
    URLS["TASKS"] = "/tasks";
    URLS["USERS"] = "/users";
})(URLS = exports.URLS || (exports.URLS = {}));
