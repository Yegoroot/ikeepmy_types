"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceAxios = exports.errorAxiosResponce = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
const types_1 = require("../types");
const errorAxiosResponce = (error) => (error.response
    ? error.response.data
    : { error: types_1.RESPONSE_MESSAGES.UNKNOWN_ERROR, success: false });
exports.errorAxiosResponce = errorAxiosResponce;
const errorHandler = (err) => {
    console.log(err.response.data, err.response.status, err.message);
    return Promise.reject(err);
};
exports.instanceAxios = axios_1.default.create({
    withCredentials: true
});
exports.instanceAxios.interceptors.request.use((req) => req, errorHandler);
exports.instanceAxios.interceptors.response.use((res) => res, errorHandler);
exports.instanceAxios.defaults.baseURL = config_1.API_URL;
exports.default = exports.instanceAxios;
