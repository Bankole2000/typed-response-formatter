"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaults = exports.ErrorType = exports.StatusType = void 0;
var StatusType;
(function (StatusType) {
    StatusType["OK"] = "OK";
    StatusType["Created"] = "Created";
    StatusType["NoContent"] = "NoContent";
    StatusType["BadRequest"] = "BadRequest";
    StatusType["Unauthorized"] = "Unauthorized";
    StatusType["Forbidden"] = "Forbidden";
    StatusType["NotFound"] = "NotFound";
    StatusType["Timeout"] = "Timeout";
    StatusType["Conflict"] = "Conflict";
    StatusType["Locked"] = "Locked";
    StatusType["TooManyRequests"] = "TooManyRequests";
    StatusType["PaymentRequired"] = "PaymentRequired";
    StatusType["PayloadTooLarge"] = "PayloadTooLarge";
    StatusType["MethodNotAllowed"] = "MethodNotAllowed";
    StatusType["ExpectationFailed"] = "ExpectationFailed";
    StatusType["UnprocessableEntity"] = "UnprocessableEntity";
    StatusType["UnsupportedMediaType"] = "UnsupportedMediaType";
    StatusType["UnavailableForLegalReasons"] = "UnavailableForLegalReasons";
    StatusType["InternalServerError"] = "InternalServerError";
    StatusType["BadGateway"] = "BadGateway";
    StatusType["ServiceUnavailable"] = "ServiceUnavailable";
    StatusType["GatewayTimeout"] = "GatewayTimeout";
})(StatusType || (exports.StatusType = StatusType = {}));
var ErrorType;
(function (ErrorType) {
    ErrorType["Unauthorized"] = "Unauthorized";
    ErrorType["Forbidden"] = "Forbidden";
    ErrorType["NotFound"] = "NotFound";
    ErrorType["Timeout"] = "Timeout";
    ErrorType["Conflict"] = "Conflict";
    ErrorType["Locked"] = "Locked";
    ErrorType["TooManyRequests"] = "TooManyRequests";
    ErrorType["PaymentRequired"] = "PaymentRequired";
    ErrorType["PayloadTooLarge"] = "PayloadTooLarge";
    ErrorType["MethodNotAllowed"] = "MethodNotAllowed";
    ErrorType["ExpectationFailed"] = "ExpectationFailed";
    ErrorType["UnprocessableEntity"] = "UnprocessableEntity";
    ErrorType["UnsupportedMediaType"] = "UnsupportedMediaType";
    ErrorType["UnavailableForLegalReasons"] = "UnavailableForLegalReasons";
    ErrorType["InternalServerError"] = "InternalServerError";
    ErrorType["BadGateway"] = "BadGateway";
    ErrorType["ServiceUnavailable"] = "ServiceUnavailable";
    ErrorType["GatewayTimeout"] = "GatewayTimeout";
})(ErrorType || (exports.ErrorType = ErrorType = {}));
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
exports.defaults = {
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
    [StatusType.BadGateway]: { code: 502, message: 'Bad Gateway', fix: 'Please try again or contact support', statusType: StatusType.BadGateway },
    [StatusType.ServiceUnavailable]: { code: 503, message: 'Service Unavailable', fix: 'Please try again later', statusType: StatusType.ServiceUnavailable },
    [StatusType.GatewayTimeout]: { code: 504, message: 'Gateway Timeout', fix: 'Please try again later or contact support', statusType: StatusType.GatewayTimeout }
};
