"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rez = exports.statusTypesToCode = exports.codeToStatusTypes = exports.statusCodeList = void 0;
const responseFunctions_1 = require("./@types/responseFunctions");
const statusTypes_1 = require("./@types/statusTypes");
exports.statusCodeList = [200, 201, 204, 400, 401, 402, 403, 404, 405, 408, 409, 413, 415, 417, 422, 423, 429, 451, 500, 502, 503, 504];
/**
 * Object - use {@link TStatusCode} status codes to look up {@link TStatusType} equivalents
 * @example
 * const notFoundStatusType = codeToStatusTypes[404]
 * const OKstatusType = codeToStatusTypes[200]
 */
exports.codeToStatusTypes = {
    [exports.statusCodeList[0]]: statusTypes_1.StatusType.OK,
    [exports.statusCodeList[1]]: statusTypes_1.StatusType.Created,
    [exports.statusCodeList[2]]: statusTypes_1.StatusType.NoContent,
    [exports.statusCodeList[3]]: statusTypes_1.StatusType.BadRequest,
    [exports.statusCodeList[4]]: statusTypes_1.StatusType.Unauthorized,
    [exports.statusCodeList[5]]: statusTypes_1.StatusType.PaymentRequired,
    [exports.statusCodeList[6]]: statusTypes_1.StatusType.Forbidden,
    [exports.statusCodeList[7]]: statusTypes_1.StatusType.NotFound,
    [exports.statusCodeList[8]]: statusTypes_1.StatusType.MethodNotAllowed,
    [exports.statusCodeList[9]]: statusTypes_1.StatusType.Timeout,
    [exports.statusCodeList[10]]: statusTypes_1.StatusType.Conflict,
    [exports.statusCodeList[11]]: statusTypes_1.StatusType.PayloadTooLarge,
    [exports.statusCodeList[12]]: statusTypes_1.StatusType.UnsupportedMediaType,
    [exports.statusCodeList[13]]: statusTypes_1.StatusType.ExpectationFailed,
    [exports.statusCodeList[14]]: statusTypes_1.StatusType.UnprocessableEntity,
    [exports.statusCodeList[15]]: statusTypes_1.StatusType.Locked,
    [exports.statusCodeList[16]]: statusTypes_1.StatusType.TooManyRequests,
    [exports.statusCodeList[17]]: statusTypes_1.StatusType.UnavailableForLegalReasons,
    [exports.statusCodeList[18]]: statusTypes_1.StatusType.InternalServerError,
    [exports.statusCodeList[19]]: statusTypes_1.StatusType.BadGateway,
    [exports.statusCodeList[20]]: statusTypes_1.StatusType.ServiceUnavailable,
    [exports.statusCodeList[21]]: statusTypes_1.StatusType.GatewayTimeout,
};
/**
 * Object - use {@link TStatusType} status codes to look up {@link TStatusCode} equivalents
 * @example
 * const conflickStatusCode = statusTypesToCode["Conflict"]
 * const timeOutStatusCode = statusTypesToCode["Timeout"]
 */
exports.statusTypesToCode = {
    [statusTypes_1.StatusType.OK]: exports.statusCodeList[0],
    [statusTypes_1.StatusType.Created]: exports.statusCodeList[1],
    [statusTypes_1.StatusType.NoContent]: exports.statusCodeList[2],
    [statusTypes_1.StatusType.BadRequest]: exports.statusCodeList[3],
    [statusTypes_1.StatusType.Unauthorized]: exports.statusCodeList[4],
    [statusTypes_1.StatusType.PaymentRequired]: exports.statusCodeList[5],
    [statusTypes_1.StatusType.Forbidden]: exports.statusCodeList[6],
    [statusTypes_1.StatusType.NotFound]: exports.statusCodeList[7],
    [statusTypes_1.StatusType.MethodNotAllowed]: exports.statusCodeList[8],
    [statusTypes_1.StatusType.Timeout]: exports.statusCodeList[9],
    [statusTypes_1.StatusType.Conflict]: exports.statusCodeList[10],
    [statusTypes_1.StatusType.PayloadTooLarge]: exports.statusCodeList[11],
    [statusTypes_1.StatusType.UnsupportedMediaType]: exports.statusCodeList[12],
    [statusTypes_1.StatusType.ExpectationFailed]: exports.statusCodeList[13],
    [statusTypes_1.StatusType.UnprocessableEntity]: exports.statusCodeList[14],
    [statusTypes_1.StatusType.Locked]: exports.statusCodeList[15],
    [statusTypes_1.StatusType.TooManyRequests]: exports.statusCodeList[16],
    [statusTypes_1.StatusType.UnavailableForLegalReasons]: exports.statusCodeList[17],
    [statusTypes_1.StatusType.InternalServerError]: exports.statusCodeList[18],
    [statusTypes_1.StatusType.BadGateway]: exports.statusCodeList[19],
    [statusTypes_1.StatusType.ServiceUnavailable]: exports.statusCodeList[20],
    [statusTypes_1.StatusType.GatewayTimeout]: exports.statusCodeList[21],
};
/**
 * {@link ServiceResponse} generator functions mapped by status type
 * @param {string} statusType - {@link TStatusType} (e.g. "OK", "NotFound", "BadGateway" etc)
 * @param {...TResponse} responseData - {@link TResponse} response data object
 * @example
 * // Returns an OK ServiceResponse with defaults
 * const OKResFn = Rez.OK
 * const sr: ServiceResponse<any> = OKResFn({}: TResponse)
 * @example
 * // shorthand response with express
 * const sr = Rez.NotFound({message: "not found"})
 * return res.status(sr.statusCode).send(sr)
 * @example
 * // Works well with any TStatusType referencing
 * const result = statusCMap(200)!({})
 * // const result = statusTMap("OK")!({})
 * // const result = { statusType: codeToStatusType(200) }
 * const sr = Rez[result.statusType]({...result})
 * return res.status(sr.statusCode).send(sr)
 * @returns {CallableFunction<ServiceResponse>}
 */
exports.Rez = {
    [statusTypes_1.StatusType.OK]: responseFunctions_1.OK,
    [statusTypes_1.StatusType.Created]: responseFunctions_1.Created,
    [statusTypes_1.StatusType.NoContent]: responseFunctions_1.NoContent,
    [statusTypes_1.StatusType.BadRequest]: responseFunctions_1.BadRequest,
    [statusTypes_1.StatusType.Unauthorized]: responseFunctions_1.Unauthorized,
    [statusTypes_1.StatusType.PaymentRequired]: responseFunctions_1.PaymentRequired,
    [statusTypes_1.StatusType.Forbidden]: responseFunctions_1.Forbidden,
    [statusTypes_1.StatusType.NotFound]: responseFunctions_1.NotFound,
    [statusTypes_1.StatusType.MethodNotAllowed]: responseFunctions_1.MethodNotAllowed,
    [statusTypes_1.StatusType.Timeout]: responseFunctions_1.Timeout,
    [statusTypes_1.StatusType.Conflict]: responseFunctions_1.Conflict,
    [statusTypes_1.StatusType.PayloadTooLarge]: responseFunctions_1.PayloadTooLarge,
    [statusTypes_1.StatusType.UnsupportedMediaType]: responseFunctions_1.UnsupportedMediaType,
    [statusTypes_1.StatusType.ExpectationFailed]: responseFunctions_1.ExpectationFailed,
    [statusTypes_1.StatusType.UnprocessableEntity]: responseFunctions_1.UnprocessableEntity,
    [statusTypes_1.StatusType.Locked]: responseFunctions_1.Locked,
    [statusTypes_1.StatusType.TooManyRequests]: responseFunctions_1.TooManyRequests,
    [statusTypes_1.StatusType.UnavailableForLegalReasons]: responseFunctions_1.UnavailableForLegalReasons,
    [statusTypes_1.StatusType.InternalServerError]: responseFunctions_1.InternalServerError,
    [statusTypes_1.StatusType.BadGateway]: responseFunctions_1.BadGateway,
    [statusTypes_1.StatusType.ServiceUnavailable]: responseFunctions_1.ServiceUnavailable,
    [statusTypes_1.StatusType.GatewayTimeout]: responseFunctions_1.GatewayTimeout,
};
