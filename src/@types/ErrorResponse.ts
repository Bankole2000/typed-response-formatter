import { statusCMap, statusTMap, statusCodes, ServiceResponse } from ".."
import { codeToStatusTypes, Rez, statusTypesToCode } from "../serviceResponse"
import { TErrorCode, TErrorType, TStatusCode, TStatusType } from "./statusTypes"

type TErrorData = {
  message: string,
  code: TErrorCode,
  type: TErrorType
}

type TErrorCodeData = {
  message?: string,
  code: TErrorCode
}

type TErrorTypeData = {
  message?: string,
  type: TErrorType
}
/**
 * Creates an instance of {@link CustomError}
 * @class {@link CustomError}
 * @constructor
 * @param {...TErrorData} errorData - {@link TErrorData} object describing details of the error.
 * @param {number} errorData.code - {@link TErrorCode} error status code (e.g. 404, 500).
 * @param {string} errorData.type - {@link TErrorType} error status type (e.g. NotFound, BadGateway).
 * @param {string} errorData.message - Any error message.
 * @example
 * const notFoundError = new CustomError({code: 404, type: "NotFound"})
 * @example
 * throw new CustomError({code: 403, type: "Forbidden", message: "Not allowed"})
 * @returns {CustomError}
 */
export abstract class CustomError extends Error {
  code: TErrorCode
  statusType: TErrorType
  constructor({message, code, type}: TErrorData){
    super(message)
    this.code = code
    this.statusType = type
  }
}

/**
 * Creates an instance of {@link CustomErrorByCode}
 * @class {@link CustomErrorByCode}
 * @extends CustomError
 * @constructor
 * @param {...TErrorCodeData} errorData - {@link TErrorCodeData} object describing the error.
 * @param {number} errorData.code - {@link TErrorCode} error status code (e.g. 404, 500). error status type {@link TErrorType} is generated based on error code entered
 * @param {string} [errorData.message] - Any error message.
 * @example
 * const badRequestError = new CustomError({code: 400})
 * @example
 * throw new CustomError({code: 404})
 * @returns {CustomErrorByCode}
 */
export class CustomErrorByCode extends CustomError {
  constructor({message = "An Error Occured", code = 500}: TErrorCodeData){
    super({ message, code, type: codeToStatusTypes[code] as TErrorType })
  }
}

/**
 * Creates an instance of {@link CustomErrorByType}
 * @class {@link CustomErrorByType}
 * @extends CustomError
 * @constructor
 * @param {...TErrorTypeData} errorData - {@link TErrorTypeData} object describing the error.
 * @param {string} errorData.type - {@link TErrorType} e.g. NotFound, BadGateway.
 * @param {string} [errorData.message] - Any error message.
 * @example
 * const badRequestError = new CustomErrorByType({type: "BadRequest"})
 * @example
 * throw new CustomErrorByType({type: "NotFound"})
 * @returns {CustomErrorByType}
 */
export class CustomErrorByType extends CustomError {
  constructor({message = "An Error Occured", type = "InternalServerError"}: TErrorTypeData){
    super({message, type, code: statusTypesToCode[type] as TErrorCode})
  }
}

// const errorOne = new CustomErrorByCode({code: 500, message: "Something went wrong"})
// const errorTwo = new CustomErrorByType({type: "BadGateway", message: "Something went wrong"})
// console.log({errorOne, errorTwo, isCustomError: errorOne instanceof CustomError})

// const cResult = statusCMap.get(errorOne.code as TStatusCode)!<'trace', string>({...errorOne, error: errorOne, data: {trace: errorOne.stack} })
// console.log({cResult})
// const tResult = statusTMap.get(errorTwo.statusType as TStatusType)!({...errorTwo, error: errorTwo, message: errorTwo.message })
// console.log({tResult})

// const sr = Rez[tResult.statusType]!({...tResult})
// console.log({sr})
