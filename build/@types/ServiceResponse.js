"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceResponse = void 0;
class ServiceResponse {
    constructor({ message = "", success = false, data = null, error, errMessage, fix, statusCode = 200, statusType = "OK", newAccessToken, meta }) {
        this.data = null;
        this.message = message;
        this.success = success;
        this.data = data ? data : null;
        this.error = error;
        this.errMessage = errMessage;
        this.fix = fix;
        this.statusCode = statusCode;
        this.statusType = statusType;
        this.newAccessToken = newAccessToken;
        this.meta = meta;
    }
}
exports.ServiceResponse = ServiceResponse;
