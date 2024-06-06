import { TErrorCode, TErrorType } from "./statusTypes";
type TErrorData = {
    message: string;
    code: TErrorCode;
    type: TErrorType;
};
type TErrorCodeData = {
    message?: string;
    code: TErrorCode;
};
type TErrorTypeData = {
    message?: string;
    type: TErrorType;
};
/**
 * Creates an instance of {@link CustomError}
 * @class {@link CustomError}
 * @constructor
 * @param {...TErrorData} errorData - {@link TErrorData} object describing details of the error.
 * @param {number} errorData.code - {@link TErrorCode} error status code (e.g. 404, 500).
 * @param {string} errorData.type - {@link TErrorType} error status type (e.g. NotFound, BadGateway).
 * @param {string} errorData.message - Any error message.
 * @example
 * const notFoundError = new CustomError({code: 404, type: "NotFound"})
 * @example
 * throw new CustomError({code: 403, type: "Forbidden", message: "Not allowed"})
 * @returns {CustomError}
 */
export declare abstract class CustomError extends Error {
    code: TErrorCode;
    statusType: TErrorType;
    constructor({ message, code, type }: TErrorData);
}
/**
 * Creates an instance of {@link CustomErrorByCode}
 * @class {@link CustomErrorByCode}
 * @extends CustomError
 * @constructor
 * @param {...TErrorCodeData} errorData - {@link TErrorCodeData} object describing the error.
 * @param {number} errorData.code - {@link TErrorCode} error status code (e.g. 404, 500). error status type {@link TErrorType} is generated based on error code entered
 * @param {string} [errorData.message] - Any error message.
 * @example
 * const badRequestError = new CustomError({code: 400})
 * @example
 * throw new CustomError({code: 404})
 * @returns {CustomErrorByCode}
 */
export declare class CustomErrorByCode extends CustomError {
    constructor({ message, code }: TErrorCodeData);
}
/**
 * Creates an instance of {@link CustomErrorByType}
 * @class {@link CustomErrorByType}
 * @extends CustomError
 * @constructor
 * @param {...TErrorTypeData} errorData - {@link TErrorTypeData} object describing the error.
 * @param {string} errorData.type - {@link TErrorType} e.g. NotFound, BadGateway.
 * @param {string} [errorData.message] - Any error message.
 * @example
 * const badRequestError = new CustomErrorByType({type: "BadRequest"})
 * @example
 * throw new CustomErrorByType({type: "NotFound"})
 * @returns {CustomErrorByType}
 */
export declare class CustomErrorByType extends CustomError {
    constructor({ message, type }: TErrorTypeData);
}
export {};
