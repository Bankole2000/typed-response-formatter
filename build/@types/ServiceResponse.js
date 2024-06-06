"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceResponse = void 0;
/**
 * ServiceResponse type definition
 * @typedef {Object} ServiceResponse
 * @property {Object} [data] - Object of any data to be sent.
 * @property {string} message - Custom response message
 * @property {number} statusCode - (e.g. 200, 404 etc)
 * @property {boolean} [success] - operation successful? (true | false)
 * @property {any} [error] - Error details if any error occured
 * @property {string} [errMessage] - short error message if any
 * @property {string} [fix] - suggested fix if any error occured
 * @property {string} [newAccessToken] - for refresh token logic if any
 * @property {string} [statusType] - e.g. OK, NotFound, BadGateway etc
 * @property {(Object | null)} [meta] - any response metadata
 */
/**
 * Class for generating {@link ServiceResponse} instances
 * @class {@link ServiceResponse}
 * @constructor
 * @param {...TResponse} responseData - Object of 5 - 10 {@link TResponse} properties
 * @param {string} responseData.message - Custom response message
 * @param {Object} [responseData.data] - Object of any data to be sent.
 * @param {number} responseData.statusCode - {@link TStatusCode} (e.g. 200, 404 etc)
 * @param {string} [responseData.statusType] - {@link TStatusType} (e.g. OK, NotFound etc)
 * @param {boolean} [responseData.success] - operation successful? (true | false)
 * @param {any} [responseData.error] - Error details if any error occured
 * @param {string} [responseData.errMessage] - short error message if any
 * @param {string} [responseData.fix] - suggested fix if any error occured
 * @param {string} [responseData.newAccessToken] - for refresh token logic if any
 * @param {any} [responseData.meta] - any response metadata
 * @example
 * const badRequestError = new ServiceResponse({code: 400})
 * @example
 * throw new ServiceResponse({code: 404})
 * @returns {ServiceResponse}
 */
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
