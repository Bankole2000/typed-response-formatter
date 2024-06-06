import { ServiceResponse } from "./@types/ServiceResponse";
import { TFuncResult, TResponse } from "./@types/interfaces";
import { TStatusType, TStatusCode, TStatus } from "./@types/statusTypes";
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
declare const statusTypes: Map<TStatusType, <k extends string, T = any>(Response: TResponse<k, T>) => ServiceResponse<k, T>>;
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
declare const statusT: Map<TStatusType, <k extends string, T = any>(Response: TFuncResult<k, T>) => TStatus<k, T>>;
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
declare const statusC: Map<TStatusCode, <k extends string, T = any>(Response: TFuncResult<k, T>) => TStatus<k, T>>;
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
declare const statusCodes: Map<TStatusCode, <k extends string, T = any>(Response: TResponse<k, T>) => ServiceResponse<k, T>>;
export { statusCodes, statusTypes, statusC, statusT };
