import { dataMeta } from "./interfaces";
export declare enum StatusType {
    OK = "OK",
    Created = "Created",
    NoContent = "NoContent",
    BadRequest = "BadRequest",
    Unauthorized = "Unauthorized",
    Forbidden = "Forbidden",
    NotFound = "NotFound",
    Timeout = "Timeout",
    Conflict = "Conflict",
    Locked = "Locked",
    TooManyRequests = "TooManyRequests",
    PaymentRequired = "PaymentRequired",
    PayloadTooLarge = "PayloadTooLarge",
    MethodNotAllowed = "MethodNotAllowed",
    ExpectationFailed = "ExpectationFailed",
    UnprocessableEntity = "UnprocessableEntity",
    UnsupportedMediaType = "UnsupportedMediaType",
    UnavailableForLegalReasons = "UnavailableForLegalReasons",
    InternalServerError = "InternalServerError",
    BadGateway = "BadGateway",
    ServiceUnavailable = "ServiceUnavailable",
    GatewayTimeout = "GatewayTimeout"
}
export declare enum ErrorType {
    Unauthorized = "Unauthorized",
    Forbidden = "Forbidden",
    NotFound = "NotFound",
    Timeout = "Timeout",
    Conflict = "Conflict",
    Locked = "Locked",
    TooManyRequests = "TooManyRequests",
    PaymentRequired = "PaymentRequired",
    PayloadTooLarge = "PayloadTooLarge",
    MethodNotAllowed = "MethodNotAllowed",
    ExpectationFailed = "ExpectationFailed",
    UnprocessableEntity = "UnprocessableEntity",
    UnsupportedMediaType = "UnsupportedMediaType",
    UnavailableForLegalReasons = "UnavailableForLegalReasons",
    InternalServerError = "InternalServerError",
    BadGateway = "BadGateway",
    ServiceUnavailable = "ServiceUnavailable",
    GatewayTimeout = "GatewayTimeout"
}
/**
 * Type definition for an Status Codes
 * @typedef { 200 | 201 | 204 | 400 | 401 | 402 | 403 | 404 | 405 | 408 | 409 | 413 | 415 | 417 | 422 | 423 | 429 | 451 | 500 | 502 | 503 | 504 } TStatusCode
 */
export type TStatusCode = 200 | 201 | 204 | 400 | 401 | 402 | 403 | 404 | 405 | 408 | 409 | 413 | 415 | 417 | 422 | 423 | 429 | 451 | 500 | 502 | 503 | 504;
/**
 * Type definition for an Status Codes
 * @typedef { 400 | 401 | 402 | 403 | 404 | 405 | 408 | 409 | 413 | 415 | 417 | 422 | 423 | 429 | 451 | 500 | 502 | 503 | 504 } TErrorCode
 */
export type TErrorCode = 400 | 401 | 402 | 403 | 404 | 405 | 408 | 409 | 413 | 415 | 417 | 422 | 423 | 429 | 451 | 500 | 502 | 503 | 504;
export type TStatusType = keyof typeof StatusType;
export type TErrorType = keyof typeof ErrorType;
export type TStatus<Keys extends string, T = any> = {
    code: TStatusCode;
    message: string;
    fix?: string;
    data?: (Partial<{
        [K in Keys]: T | T[];
    }> & dataMeta) | null;
    error?: any;
    statusType: TStatusType;
};
/**
 * {@link TStatus} generator functions mapped by statusType
 * @param {string} statusType - {@link TStatusType} (e.g. "OK", "NotFound", "Created" etc)
 * @example
 * // User created example
 * const result = {...statusObj.Created, data: {user: newUser}}
 * @example
 * // NotFound rest api response example
 * const result = {...statusObj.NotFound}
 * const sr = Rez[result.statusType]({...result})
 * return res.status(sr.statusCode).send(sr)
 * @returns {CallableFunction<TStatus>}
 */
export declare const defaults: {
    [key in StatusType]: TStatus<any>;
};
