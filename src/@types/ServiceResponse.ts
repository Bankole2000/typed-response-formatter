import { dataMeta, AppResponse, TResponse } from "./interfaces";
import { TStatusType } from "./statusTypes";

export class ServiceResponse<Keys extends string, T = any> implements AppResponse<Keys, T> {
  message: string;

  success: boolean;

  data: (Partial<{ [K in Keys]: T | T[] }> & dataMeta) | null = null

  error?: unknown;

  fix?: string;

  newAccessToken?: string | null ;

  errMessage?: string;

  statusCode: number;
  
  statusType: TStatusType;

  meta?: any

  constructor({
    message = "", 
    success = false,
    data = null,
    error,
    errMessage,
    fix,
    statusCode = 200,
    statusType = "OK",
    newAccessToken,
    meta
  }: TResponse<Keys, T>) {
    this.message = message;
    this.success = success;
    this.data = data ? data: null;
    this.error = error;
    this.errMessage = errMessage;
    this.fix = fix;
    this.statusCode = statusCode;
    this.statusType = statusType;
    this.newAccessToken = newAccessToken;
    this.meta = meta
  }
}