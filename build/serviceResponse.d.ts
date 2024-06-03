import { TResponse } from "./@types/interfaces";
import { ServiceResponse } from "./@types/ServiceResponse";
import { StatusType, TStatusCode, TStatus } from "./@types/statusTypes";
export declare const statusCodeList: TStatusCode[];
export interface IServiceAccess<Keys extends string, T = any> {
    result?: ServiceResponse<Keys, T>;
}
export interface IDataAccess<Keys extends string, T = any> {
    result?: TStatus<Keys, T>;
}
export declare const codeToStatusTypes: {
    [x: number]: StatusType;
};
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
export declare const Rez: {
    [key in StatusType]: <k extends string, K = any>(ResponseData: TResponse<k, K>) => ServiceResponse<k, K>;
};
