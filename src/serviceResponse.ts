import { TResponse } from "./@types/interfaces";
import { ServiceResponse } from "./@types/ServiceResponse";
import { OK, Created, NoContent, BadRequest, Unauthorized, BadGateway, PaymentRequired, Forbidden, NotFound, Timeout, Conflict, PayloadTooLarge, Locked, UnavailableForLegalReasons, TooManyRequests, MethodNotAllowed, ExpectationFailed, UnprocessableEntity, InternalServerError, ServiceUnavailable, UnsupportedMediaType, GatewayTimeout } from "./@types/responseFunctions";
import { StatusType, TStatusCode, TStatus, TStatusType } from "./@types/statusTypes";

export const statusCodeList: TStatusCode[] = [200, 201, 204, 400, 401, 402, 403, 404, 405, 408, 409, 413, 415, 417, 422, 423, 429, 451, 500, 502, 503, 504]

/**
 * Interface for classes that generate {@link ServiceResponse} instances
 * @example
 * class UserService<"user" | "users", IUser> extends IServiceAccess {
 *  async getUsers(): Promise<ServiceResponse> {
 *    const users = await getUsersData()
 *    this.result = statusTypes.get("OK")!({data: users})
 *  }
 * }
 * @example
 * const { result } = await (new UserService).getUsers()
 * return res.status(result.statusCode).send(result)
 */
export interface IServiceAccess<Keys extends string, T = any> {
  result?: ServiceResponse<Keys, T>
}

/**
 * Interface for classes that generate {@link TStatus} objects
 * @example
 * class UserService<"user" | "users", IUser> extends IDataAccess {
 *  async getUsers(): Promise<ServiceResponse> {
 *    const users = await getUsersData()
 *    this.result = statusTMap.get("OK")!({data: users})
 *  }
 * }
 * @example
 * const { result } = await (new UserService).getUsers()
 * const sr = Rez[result.statusType]({...result})
 * return res.status(sr.statusCode).send(sr)
 */
export interface IDataAccess<Keys extends string, T = any> {
  result?: TStatus<Keys, T>
}

/**
 * Object - use {@link TStatusCode} status codes to look up {@link TStatusType} equivalents
 * @example
 * const notFoundStatusType = codeToStatusTypes[404]
 * const OKstatusType = codeToStatusTypes[200]
 */
export const codeToStatusTypes = {
  [statusCodeList[0]]: StatusType.OK,
  [statusCodeList[1]]: StatusType.Created,
  [statusCodeList[2]]: StatusType.NoContent,
  [statusCodeList[3]]: StatusType.BadRequest,
  [statusCodeList[4]]: StatusType.Unauthorized,
  [statusCodeList[5]]: StatusType.PaymentRequired,
  [statusCodeList[6]]: StatusType.Forbidden,
  [statusCodeList[7]]: StatusType.NotFound,
  [statusCodeList[8]]: StatusType.MethodNotAllowed,
  [statusCodeList[9]]: StatusType.Timeout,
  [statusCodeList[10]]: StatusType.Conflict,
  [statusCodeList[11]]: StatusType.PayloadTooLarge,
  [statusCodeList[12]]: StatusType.UnsupportedMediaType,
  [statusCodeList[13]]: StatusType.ExpectationFailed,
  [statusCodeList[14]]: StatusType.UnprocessableEntity,
  [statusCodeList[15]]: StatusType.Locked,
  [statusCodeList[16]]: StatusType.TooManyRequests,
  [statusCodeList[17]]: StatusType.UnavailableForLegalReasons,
  [statusCodeList[18]]: StatusType.InternalServerError,
  [statusCodeList[19]]: StatusType.BadGateway,
  [statusCodeList[20]]: StatusType.ServiceUnavailable,
  [statusCodeList[21]]: StatusType.GatewayTimeout,
}

/**
 * Object - use {@link TStatusType} status codes to look up {@link TStatusCode} equivalents
 * @example
 * const conflickStatusCode = statusTypesToCode["Conflict"]
 * const timeOutStatusCode = statusTypesToCode["Timeout"]
 */
export const statusTypesToCode = {
  [StatusType.OK] : statusCodeList[0],
  [StatusType.Created] : statusCodeList[1],
  [StatusType.NoContent] : statusCodeList[2],
  [StatusType.BadRequest] : statusCodeList[3],
  [StatusType.Unauthorized] : statusCodeList[4],
  [StatusType.PaymentRequired] : statusCodeList[5],
  [StatusType.Forbidden] : statusCodeList[6],
  [StatusType.NotFound] : statusCodeList[7],
  [StatusType.MethodNotAllowed] : statusCodeList[8],
  [StatusType.Timeout] : statusCodeList[9],
  [StatusType.Conflict] : statusCodeList[10],
  [StatusType.PayloadTooLarge] : statusCodeList[11],
  [StatusType.UnsupportedMediaType] : statusCodeList[12],
  [StatusType.ExpectationFailed] : statusCodeList[13],
  [StatusType.UnprocessableEntity] : statusCodeList[14],
  [StatusType.Locked] : statusCodeList[15],
  [StatusType.TooManyRequests] : statusCodeList[16],
  [StatusType.UnavailableForLegalReasons] : statusCodeList[17],
  [StatusType.InternalServerError] : statusCodeList[18],
  [StatusType.BadGateway] : statusCodeList[19],
  [StatusType.ServiceUnavailable] : statusCodeList[20],
  [StatusType.GatewayTimeout] : statusCodeList[21],
}

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
export const Rez: {[key in StatusType]: <k extends string, K = any>(ResponseData: TResponse<k, K>) => ServiceResponse<k, K>} = {
  [StatusType.OK]: OK,
  [StatusType.Created]: Created,
  [StatusType.NoContent]: NoContent,
  [StatusType.BadRequest]: BadRequest,
  [StatusType.Unauthorized]: Unauthorized,
  [StatusType.PaymentRequired]: PaymentRequired,
  [StatusType.Forbidden]: Forbidden,
  [StatusType.NotFound]: NotFound,
  [StatusType.MethodNotAllowed]: MethodNotAllowed,
  [StatusType.Timeout]: Timeout,
  [StatusType.Conflict]: Conflict,
  [StatusType.PayloadTooLarge]: PayloadTooLarge,
  [StatusType.UnsupportedMediaType]: UnsupportedMediaType,
  [StatusType.ExpectationFailed]: ExpectationFailed,
  [StatusType.UnprocessableEntity]: UnprocessableEntity,
  [StatusType.Locked]: Locked,
  [StatusType.TooManyRequests]: TooManyRequests,
  [StatusType.UnavailableForLegalReasons]: UnavailableForLegalReasons,
  [StatusType.InternalServerError]: InternalServerError,
  [StatusType.BadGateway]: BadGateway,
  [StatusType.ServiceUnavailable]: ServiceUnavailable,
  [StatusType.GatewayTimeout]: GatewayTimeout,
}

