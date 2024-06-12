import { dataMeta } from "./interfaces";

export enum StatusType {
  OK = 'OK',
  Created = 'Created',
  NoContent = 'NoContent',
  BadRequest = 'BadRequest',
  Unauthorized = 'Unauthorized',
  Forbidden = 'Forbidden',
  NotFound = 'NotFound',
  Timeout = 'Timeout',
  Conflict = 'Conflict',
  Locked = 'Locked',
  TooManyRequests = 'TooManyRequests',
  PaymentRequired = 'PaymentRequired',
  PayloadTooLarge = 'PayloadTooLarge',
  MethodNotAllowed = 'MethodNotAllowed',
  ExpectationFailed = 'ExpectationFailed',
  UnprocessableEntity = 'UnprocessableEntity',
  UnsupportedMediaType = 'UnsupportedMediaType',
  UnavailableForLegalReasons = 'UnavailableForLegalReasons',
  InternalServerError = 'InternalServerError',
  BadGateway = 'BadGateway',
  ServiceUnavailable = 'ServiceUnavailable',
  GatewayTimeout = 'GatewayTimeout'
}

export enum ErrorType {
  BadRequest = 'BadRequest',
  Unauthorized = 'Unauthorized',
  Forbidden = 'Forbidden',
  NotFound = 'NotFound',
  Timeout = 'Timeout',
  Conflict = 'Conflict',
  Locked = 'Locked',
  TooManyRequests = 'TooManyRequests',
  PaymentRequired = 'PaymentRequired',
  PayloadTooLarge = 'PayloadTooLarge',
  MethodNotAllowed = 'MethodNotAllowed',
  ExpectationFailed = 'ExpectationFailed',
  UnprocessableEntity = 'UnprocessableEntity',
  UnsupportedMediaType = 'UnsupportedMediaType',
  UnavailableForLegalReasons = 'UnavailableForLegalReasons',
  InternalServerError = 'InternalServerError',
  BadGateway = 'BadGateway',
  ServiceUnavailable = 'ServiceUnavailable',
  GatewayTimeout = 'GatewayTimeout'
}

/**
 * Type definition for an Status Codes
 * @typedef { 200 | 201 | 204 | 400 | 401 | 402 | 403 | 404 | 405 | 408 | 409 | 413 | 415 | 417 | 422 | 423 | 429 | 451 | 500 | 502 | 503 | 504 } TStatusCode
 */
export type TStatusCode = 200 | 201 | 204 | 400 | 401 | 402 | 403 | 404 |
405 | 408 | 409 | 413 | 415 | 417 | 422 | 423 | 429 | 451 | 500 | 502 | 503 | 504 ;

/**
 * Type definition for an Status Codes
 * @typedef { 400 | 401 | 402 | 403 | 404 | 405 | 408 | 409 | 413 | 415 | 417 | 422 | 423 | 429 | 451 | 500 | 502 | 503 | 504 } TErrorCode
 */
export type TErrorCode = 400 | 401 | 402 | 403 | 404 |
405 | 408 | 409 | 413 | 415 | 417 | 422 | 423 | 429 | 451 | 500 | 502 | 503 | 504 ;
export type TStatusType = keyof typeof StatusType;
export type TErrorType = keyof typeof ErrorType;

export type TStatus<Keys extends string, T = any> = { code: TStatusCode, message: string, fix?: string, data?: (Partial<{ [K in Keys]: T | T[] }> & dataMeta) | null, error?: any, statusType: TStatusType }

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
export const defaults: {[key in StatusType]: TStatus<any>} = {
  [StatusType.OK]: { code: 200, message: 'OK', statusType: StatusType.OK },
  [StatusType.Created]: { code: 201, message: 'Created', statusType: StatusType.Created },
  [StatusType.NoContent]: { code: 204, message: 'No Content', statusType: StatusType.NoContent },
  [StatusType.BadRequest]: { code: 400, message: 'Bad Request', fix: 'Please check inputs and try again', statusType: StatusType.BadRequest },
  [StatusType.Unauthorized]: { code: 401, message: 'Unauthorized', fix: 'You need to be logged in', statusType: StatusType.Unauthorized },
  [StatusType.PaymentRequired]: { code: 402, message: 'Payment Required', fix: 'Please confirm any required payments', statusType: StatusType.PaymentRequired },
  [StatusType.Forbidden]: { code: 403, message: 'Forbidden', fix: 'You are not authorized to do this', statusType: StatusType.Forbidden },
  [StatusType.NotFound]: { code: 404, message: 'Not Found', fix: 'Please ensure the route or resource exists', statusType: StatusType.NotFound },
  [StatusType.MethodNotAllowed]: { code: 405, message: 'Method Not Allowed', statusType: StatusType.MethodNotAllowed },
  [StatusType.Timeout]: { code: 408, message: 'Request Timeout', fix: 'Please check your internet connection', statusType: StatusType.Timeout },
  [StatusType.Conflict]: { code: 409, message: 'Request Conflict', fix: 'Request data may be obsolete version', statusType: StatusType.Conflict },
  [StatusType.PayloadTooLarge]: { code: 413, message: 'Payload Too Large', fix: 'Request data is too large', statusType: StatusType.PayloadTooLarge },
  [StatusType.UnsupportedMediaType]: { code: 415, message: 'Unsupported Media Type', fix: 'Please check file / media type', statusType: StatusType.UnsupportedMediaType },
  [StatusType.ExpectationFailed]: { code: 417, message: 'Expectation Failed', statusType: StatusType.ExpectationFailed },
  [StatusType.UnprocessableEntity]: { code: 422, message: 'Unprocessable Entity', fix: 'Please contact support', statusType: StatusType.UnprocessableEntity },
  [StatusType.Locked]: { code: 423, message: 'Request is Locked', fix: 'Please try again after some time', statusType: StatusType.Locked },
  [StatusType.TooManyRequests]: { code: 429, message: 'Too many requests', fix: 'Please try again after some time', statusType: StatusType.TooManyRequests },
  [StatusType.UnavailableForLegalReasons]: { code: 451, message: 'Unavailable for legal reasons', fix: 'Please contact support', statusType: StatusType.UnavailableForLegalReasons },
  [StatusType.InternalServerError]: { code: 500, message: 'Internal Server Error', fix: 'Please contact support', statusType: StatusType.InternalServerError },
  [StatusType.BadGateway]: {code: 502, message: 'Bad Gateway', fix: 'Please try again or contact support', statusType: StatusType.BadGateway },
  [StatusType.ServiceUnavailable]: { code: 503, message: 'Service Unavailable', fix: 'Please try again later', statusType: StatusType.ServiceUnavailable },
  [StatusType.GatewayTimeout]: {code: 504, message: 'Gateway Timeout', fix: 'Please try again later or contact support', statusType: StatusType.GatewayTimeout }
}