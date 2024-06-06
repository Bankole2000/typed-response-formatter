import { TStatusCode, TStatusType } from "./statusTypes";

export interface AppEvent<Keys extends string, T = any> {
  type: string;
  desc?: string;
  data?: (Partial<{ [K in Keys]: T | T[] }> & dataMeta) | null;
  meta?: any;
  eventId?: string;
  origin: string;
  accessToken?: string | null;
}
/**
 * Type definition for an application Event
 * @typedef {Object} TEvent
 * @property {string} type - event type e.g. 'user.created' or 'USER_REGISTERED'
 * @property {string} origin - event origin e.g. 'user-service'
 * @property {Object} [data] - event data e.g. { id: '123', name: 'John Doe' }
 * @property {string} [desc] - event description e.g. 'User registered on x'
 * @property {string} [eventId] - event unique identifier
 * @property {string} [appToken] - for any app-based security tokens
 * @property {string} [accessToken] - for any user-based security tokens
 * @property {Object} [meta] - event metaData e.g. { timestamp }
 */
export type TEvent<Keys extends string, T = any> = {
  type: string,
  origin: string,
  desc?: string,
  data?: (Partial<{ [K in Keys]: T | T[] }> & dataMeta) | null,
  meta?: any,
  eventId?: string,
  appToken?: string,
  accessToken?: string,
  serviceQueues?: string[]
}

export interface dataMeta {
  meta?: any
}

/**
 * Type definition for an {@link TFuncResult}
 * @typedef {Object} TFuncResult
 * @property {string} message - event type e.g. 'user.created' or 'USER_REGISTERED'
 * @property {Object} [data] - event data e.g. { id: '123', name: 'John Doe' }
 * @property {(any | null)} error - response error details if any
 * @property {string} [fix] - suggested fixes if any errors
 */
export type TFuncResult<Keys extends string, T = any> = {
  message?: string,
  data?: (Partial<{ [K in Keys]: T | T[] }> & dataMeta) | null,
  error?: any | null,
  fix?: string,
}

export interface AppResponse<Keys extends string, T = any> {
  message: string;
  success: boolean;
  data: (Partial<{ [K in Keys]: T | T[] }> & dataMeta) | null;
  error?: any;
  errMessage?: string;
  statusCode: number;
}

/**
 * Type definition for an {@link TResponse}
 * @typedef {Object} TResponse
 * @property {string} message - event type e.g. 'user.created' or 'USER_REGISTERED'
 * @property {Object} [data] - event data e.g. { id: '123', name: 'John Doe' }
 * @property {boolean} success - operation successful (true | false)
 * @property {number} [statusCode] - {@link TStatusCode} e.g. 200, 404, 500
 * @property {TStatusType} [statusType] - {@link TStatusType} e.g. OK, NotFound, InternalServerError
 * @property {(any | null)} error - response error details if any
 * @property {string} errMessage - error short description
 * @property {string} [fix] - suggested fixes if any errors
 * @property {string} [newAccessToken] - for any user-based security tokens
 * @property {(any | undefined)} [meta] - response metaData e.g. { timestamp }
 */
export type TResponse<Keys extends string, T = any> = {
  message?: string,
  data?: (Partial<{ [K in Keys]: T | T[] }> & dataMeta) | null;
  success?: boolean,
  error?: any | null,
  errMessage?: string,
  fix?: string,
  statusCode?: TStatusCode,
  statusType?: TStatusType,
  newAccessToken?: string | null,
  meta?: any
}