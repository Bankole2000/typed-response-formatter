import { TStatusType } from "./statusTypes";
export interface AppEvent<Keys extends string, T = any> {
    type: string;
    desc?: string;
    data?: (Partial<{
        [K in Keys]: T | T[];
    }> & dataMeta) | null;
    meta?: any;
    eventId?: string;
    origin: string;
    accessToken?: string | null;
}
export type TEvent<Keys extends string, T = any> = {
    type: string;
    origin: string;
    desc?: string;
    data?: (Partial<{
        [K in Keys]: T | T[];
    }> & dataMeta) | null;
    meta?: any;
    eventId?: string;
    appToken?: string;
    accessToken?: string;
    serviceQueues?: string[];
};
export interface dataMeta {
    meta?: any;
}
export type TFuncResult<Keys extends string, T = any> = {
    message?: string;
    data?: (Partial<{
        [K in Keys]: T | T[];
    }> & dataMeta) | null;
    error?: any | null;
    fix?: string;
};
export interface AppResponse<Keys extends string, T = any> {
    message: string;
    success: boolean;
    data: (Partial<{
        [K in Keys]: T | T[];
    }> & dataMeta) | null;
    error?: any;
    errMessage?: string;
    statusCode: number;
}
export type TResponse<Keys extends string, T = any> = {
    message?: string;
    data?: (Partial<{
        [K in Keys]: T | T[];
    }> & dataMeta) | null;
    success?: boolean;
    error?: any | null;
    errMessage?: string;
    fix?: string;
    statusCode?: number;
    statusType?: TStatusType;
    newAccessToken?: string | null;
    meta?: any;
};
