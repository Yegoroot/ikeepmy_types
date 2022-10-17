"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseMessage = void 0;
// ----------------------------------------------------------
// MESSAGES
// ----------------------------------------------------------
var ResponseMessage;
(function (ResponseMessage) {
    // registration & verify-phone
    ResponseMessage["SMS_SENDED_PHONE"] = "we_sended_code_in_your_phone";
    ResponseMessage["SMS_ERROR_SENDED_PHONE_1"] = "error_sending_code_in_your_phone_1";
    ResponseMessage["SMS_ERROR_SENDED_PHONE_2"] = "error_sending_code_in_your_phone_2";
    ResponseMessage["SMS_ERROR_VERIFY_PHONE_1"] = "error_verify_code_in_your_phone_1";
    ResponseMessage["SMS_ERROR_VERIFY_PHONE_2"] = "error_verify_code_in_your_phone_2";
    // login
    ResponseMessage["INVALID_CREDENTIALS"] = "invalid_credentials";
    // common
    ResponseMessage["PROVIDE_ALL_DATA"] = "provide_all_data";
})(ResponseMessage = exports.ResponseMessage || (exports.ResponseMessage = {}));
