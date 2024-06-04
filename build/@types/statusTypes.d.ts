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
export type TStatusCode = 200 | 201 | 204 | 400 | 401 | 402 | 403 | 404 | 405 | 408 | 409 | 413 | 415 | 417 | 422 | 423 | 429 | 451 | 500 | 502 | 503 | 504;
export type TStatusType = keyof typeof StatusType;
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
export declare const defaults: {
    [key in StatusType]: TStatus<any>;
};
