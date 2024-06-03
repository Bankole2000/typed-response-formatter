import { ServiceResponse } from "./@types/ServiceResponse";
import { TFuncResult, TResponse } from "./@types/interfaces";
import { TStatusType, TStatusCode, TStatus } from "./@types/statusTypes";
declare const statusTypes: Map<TStatusType, <k extends string, T = any>(Response: TResponse<k, T>) => ServiceResponse<k, T>>;
declare const statusT: Map<TStatusType, <k extends string, T = any>(Response: TFuncResult<k, T>) => TStatus<k, T>>;
declare const statusC: Map<TStatusCode, <k extends string, T = any>(Response: TFuncResult<k, T>) => TStatus<k, T>>;
declare const statusCodes: Map<TStatusCode, <k extends string, T = any>(Response: TResponse<k, T>) => ServiceResponse<k, T>>;
export { statusCodes, statusTypes, statusC, statusT };
