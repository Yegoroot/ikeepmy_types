"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatus = void 0;
// ---------------------------------------------------
// ---------------------------------------------------
// STATUS
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["NEW"] = "new";
    TaskStatus["ASSIGNED"] = "assigned";
    // IN_WORK="in_work",
    TaskStatus["CANCELED"] = "canceled";
    TaskStatus["DONE"] = "done";
})(TaskStatus = exports.TaskStatus || (exports.TaskStatus = {}));
