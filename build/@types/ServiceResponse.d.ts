import { dataMeta, AppResponse, TResponse } from "./interfaces";
import { TStatusCode, TStatusType } from "./statusTypes";
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
export declare class ServiceResponse<Keys extends string, T = any> implements AppResponse<Keys, T> {
    message: string;
    success: boolean;
    data: (Partial<{
        [K in Keys]: T | T[];
    }> & dataMeta) | null;
    error?: unknown;
    fix?: string;
    newAccessToken?: string | null;
    errMessage?: string;
    statusCode: TStatusCode;
    statusType: TStatusType;
    meta?: any;
    constructor({ message, success, data, error, errMessage, fix, statusCode, statusType, newAccessToken, meta }: TResponse<Keys, T>);
}
