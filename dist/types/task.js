"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatus = void 0;
const user_1 = require("./user");
// ---------------------------------------------------
// ---------------------------------------------------
// STATUS
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["NEW"] = "new";
    TaskStatus["ASSIGNED"] = "assigned";
    TaskStatus["IN_WORK"] = "in_work";
    TaskStatus["DONE"] = "done";
})(TaskStatus = exports.TaskStatus || (exports.TaskStatus = {}));
