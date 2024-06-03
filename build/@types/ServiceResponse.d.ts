import { dataMeta, AppResponse, TResponse } from "./interfaces";
import { TStatusType } from "./statusTypes";
export declare class ServiceResponse<Keys extends string, T = any> implements AppResponse<Keys, T> {
    message: string;
    success: boolean;
    data: ({
        [K in Keys]: T | T[];
    } & dataMeta) | null;
    error?: unknown;
    fix?: string;
    newAccessToken?: string | null;
    errMessage?: string;
    statusCode: number;
    statusType: TStatusType;
    meta?: any;
    constructor({ message, success, data, error, errMessage, fix, statusCode, statusType, newAccessToken, meta }: TResponse<Keys, T>);
}
