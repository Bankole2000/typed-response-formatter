import { TResponse } from "./@types/interfaces";
import { ServiceResponse } from "./@types/ServiceResponse";
import { StatusType, TStatusCode, TStatus } from "./@types/statusTypes";
export declare const statusCodeList: TStatusCode[];
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
    result?: ServiceResponse<Keys, T>;
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
    result?: TStatus<Keys, T>;
}
/**
 * Object - use {@link TStatusCode} status codes to look up {@link TStatusType} equivalents
 * @example
 * const notFoundStatusType = codeToStatusTypes[404]
 * const OKstatusType = codeToStatusTypes[200]
 */
export declare const codeToStatusTypes: {
    [x: number]: StatusType;
};
/**
 * Object - use {@link TStatusType} status codes to look up {@link TStatusCode} equivalents
 * @example
 * const conflickStatusCode = statusTypesToCode["Conflict"]
 * const timeOutStatusCode = statusTypesToCode["Timeout"]
 */
export declare const statusTypesToCode: {
    OK: TStatusCode;
    Created: TStatusCode;
    NoContent: TStatusCode;
    BadRequest: TStatusCode;
    Unauthorized: TStatusCode;
    PaymentRequired: TStatusCode;
    Forbidden: TStatusCode;
    NotFound: TStatusCode;
    MethodNotAllowed: TStatusCode;
    Timeout: TStatusCode;
    Conflict: TStatusCode;
    PayloadTooLarge: TStatusCode;
    UnsupportedMediaType: TStatusCode;
    ExpectationFailed: TStatusCode;
    UnprocessableEntity: TStatusCode;
    Locked: TStatusCode;
    TooManyRequests: TStatusCode;
    UnavailableForLegalReasons: TStatusCode;
    InternalServerError: TStatusCode;
    BadGateway: TStatusCode;
    ServiceUnavailable: TStatusCode;
    GatewayTimeout: TStatusCode;
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
export declare const Rez: {
    [key in StatusType]: <k extends string, K = any>(ResponseData: TResponse<k, K>) => ServiceResponse<k, K>;
};
