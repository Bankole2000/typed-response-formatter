import { ServiceResponse } from "./@types/ServiceResponse";
import { TFuncResult, TResponse } from "./@types/interfaces";
import { 
  OK,
  Created,
  NoContent,
  BadRequest,
  Unauthorized,
  BadGateway,
  PaymentRequired,
  Forbidden,
  NotFound,
  Timeout,
  Conflict,
  PayloadTooLarge,
  Locked,
  UnavailableForLegalReasons,
  TooManyRequests,
  MethodNotAllowed,
  ExpectationFailed,
  UnprocessableEntity,
  InternalServerError,
  ServiceUnavailable,
  UnsupportedMediaType,
  GatewayTimeout
} from "./@types/responseFunctions";
import { StatusType, TStatusType, TStatusCode, TStatus, defaults } from "./@types/statusTypes";
import { codeToStatusTypes, statusCodeList } from "./serviceResponse";

/**
 * {@link ServiceResponse} generator functions mapped by status type
 * @param {string} statusType - {@link TStatusType} (e.g. "OK", "NotFound", "BadGateway" etc)
 * @param {...TResponse} responseData - {@link TResponse} response data object
 * @example
 * // Returns an OK ServiceResponse with defaults
 * const OKResFn = statusTypes.get("OK")
 * const sr: ServiceResponse<any> = OKResFn({data: myData}: TResponse)
 * @example
 * // shorthand response with express
 * const sr = statusTypes.get("Created")!({message: "successful"})
 * return res.status(sr.statusCode).send(sr)
 * @returns {CallableFunction<ServiceResponse>}
 */
const statusTypes: Map<TStatusType, <k extends string, T = any>(Response: TResponse<k , T>) => ServiceResponse<k, T>> = new Map();

/**
 * {@link TStatus} generator functions mapped by statusType
 * @param {string} statusType - {@link TStatusType} (e.g. "OK", "NotFound", "Created" etc)
 * @param {...TFuncResult} fnResultData - {@link TFuncResult} function result data object
 * @example
 * const OKFnResult = statusTMap.get("OK")
 * const sr: TStatus<any> = OKFnResult({data: myData}: TFuncResult)
 * @example
 * // shorthand with express using Rez object
 * const result = statusTMap.get("Created")!({message: "successful"})
 * const sr = Rez[result.statusType]({...result})
 * return res.status(sr.statusCode).send(sr)
 * @returns {CallableFunction<TStatus>}
 */
const statusT: Map<TStatusType, <k extends string, T = any>(Response: TFuncResult<k , T>) => TStatus<k, T>> = new Map();

/**
 * @desc Map of Callable TStatus generator functions by status code
 * @param {number} statusCode - {@link TStatusCode} (e.g. 200, 404, 500) - status code of the {@link TStatus} object to be generated from the callback function
 * @param {...TFuncResult} fnResultData - {@link TFuncResult} function result data object
 * @example
 * const OKFnResult = statusCMap.get("OK")
 * const sr: TStatus<any> = OKFnResult({data: myData}: TFuncResult)
 * @example
 * // shorthand with express using Rez object
 * const result = statusCMap.get("Created")!({message: "successful"})
 * const sr = Rez[result.statusType]({...result})
 * return res.status(sr.statusCode).send(sr)
 * @returns {CallableFunction<TStatus>}
 */
const statusC: Map<TStatusCode, <k extends string, T = any>(Response: TFuncResult<k , T>) => TStatus<k, T>> = new Map();

function clone<T>(a: T): T {
  return JSON.parse(JSON.stringify(a));
}

statusCodeList.forEach(code => {
  statusC.set(code, <K extends string, T = any>({message, fix, data, error}: TFuncResult<K, T>) => {
    const status = clone(defaults[codeToStatusTypes[code]])
    if (message) status.message = message;
    if (fix) status.fix = fix
    if (data) status.data = data
    if (error) status.error = error
    return status
  })
})


Object.keys(StatusType).forEach((type) => {
  statusT.set(type as TStatusType,  <K extends string, T = any>({message, fix, data, error}: TFuncResult<K, T>) => {
    const status = clone(defaults[type as TStatusType])
    if (message) status.message = message;
    if (fix) status.fix = fix
    if (data) status.data = data
    if (error) status.error = error
    return status
  })
})

statusTypes.set(StatusType.OK, OK)
statusTypes.set(StatusType.Created, Created)
statusTypes.set(StatusType.NoContent, NoContent)
statusTypes.set(StatusType.BadRequest, BadRequest)
statusTypes.set(StatusType.Unauthorized, Unauthorized)
statusTypes.set(StatusType.PaymentRequired, PaymentRequired)
statusTypes.set(StatusType.Forbidden, Forbidden)
statusTypes.set(StatusType.NotFound, NotFound)
statusTypes.set(StatusType.MethodNotAllowed, MethodNotAllowed)
statusTypes.set(StatusType.Timeout, Timeout)
statusTypes.set(StatusType.Conflict, Conflict)
statusTypes.set(StatusType.PayloadTooLarge, PayloadTooLarge)
statusTypes.set(StatusType.UnsupportedMediaType, UnsupportedMediaType)
statusTypes.set(StatusType.ExpectationFailed, ExpectationFailed)
statusTypes.set(StatusType.UnprocessableEntity, UnprocessableEntity)
statusTypes.set(StatusType.Locked, Locked)
statusTypes.set(StatusType.UnavailableForLegalReasons, UnavailableForLegalReasons)
statusTypes.set(StatusType.TooManyRequests, TooManyRequests)
statusTypes.set(StatusType.InternalServerError, InternalServerError)
statusTypes.set(StatusType.BadGateway, BadGateway)
statusTypes.set(StatusType.ServiceUnavailable, ServiceUnavailable)
statusTypes.set(StatusType.GatewayTimeout, GatewayTimeout)

/**
 * Callable {@link ServiceResponse} generator functions mapped by status code
 * @param {number} statusCode - {@link TStatusType} (e.g. 200, 404, 500) status code of the {@link ServiceResponse} to be generated from the callback function
 * @param {...TResponse} responseData - {@link TResponse} response data object of the {@link ServiceResponse} to be generated from the callback function
 * @example
 * // Returns an OK ServiceResponse with defaults
 * const OKServiceResFn = statusCodes.get(200)
 * const sr: ServiceResponse<any> = OKServiceResFn({data: {id: "123"}})
 * @example
 * // shorthand response with express
 * const sr = statusCodes.get(404)!({message: "not found"})
 * return res.status(sr.statusCode).send(sr)
 * @returns {CallableFunction<ServiceResponse>}
 */
const statusCodes:  Map<TStatusCode, <k extends string, T = any>(Response: TResponse<k , T>) => ServiceResponse<k, T>> = new Map();

statusCodes.set(200, OK)
statusCodes.set(201, Created)
statusCodes.set(204, NoContent)
statusCodes.set(400, BadRequest)
statusCodes.set(401, Unauthorized)
statusCodes.set(402, PaymentRequired)
statusCodes.set(403, Forbidden)
statusCodes.set(404, NotFound)
statusCodes.set(405, MethodNotAllowed)
statusCodes.set(408, Timeout)
statusCodes.set(409, Conflict)
statusCodes.set(413, PayloadTooLarge)
statusCodes.set(415, UnsupportedMediaType)
statusCodes.set(417, ExpectationFailed)
statusCodes.set(422, UnprocessableEntity)
statusCodes.set(423, Locked)
statusCodes.set(429, TooManyRequests)
statusCodes.set(451, UnavailableForLegalReasons)
statusCodes.set(500, InternalServerError)
statusCodes.set(502, BadGateway)
statusCodes.set(503, ServiceUnavailable)
statusCodes.set(504, GatewayTimeout)

export { statusCodes, statusTypes, statusC, statusT }