import { ServiceResponse } from "./@types/ServiceResponse";
import { TFuncResult, TResponse } from "./@types/interfaces";
import { 
  OK,
  Created,
  NoContent,
  BadRequest,
  Unauthorized,
  BadGateway,
  PaymentRequired,
  Forbidden,
  NotFound,
  Timeout,
  Conflict,
  PayloadTooLarge,
  Locked,
  UnavailableForLegalReasons,
  TooManyRequests,
  MethodNotAllowed,
  ExpectationFailed,
  UnprocessableEntity,
  InternalServerError,
  ServiceUnavailable,
  UnsupportedMediaType,
  GatewayTimeout
} from "./@types/responseFunctions";
import { StatusType, TStatusType, TStatusCode, TStatus, defaults } from "./@types/statusTypes";
import { codeToStatusTypes, statusCodeList } from "./serviceResponse";

const statusTypes: Map<TStatusType, <k extends string, T = any>(Response: TResponse<k , T>) => ServiceResponse<k, T>> = new Map();
const statusT: Map<TStatusType, <k extends string, T = any>(Response: TFuncResult<k , T>) => TStatus<k, T>> = new Map();
const statusC: Map<TStatusCode, <k extends string, T = any>(Response: TFuncResult<k , T>) => TStatus<k, T>> = new Map();

statusCodeList.forEach(code => {
  statusC.set(code, <K extends string, T = any>({message, fix, data, error}: TFuncResult<K, T>) => {
    const status = defaults[codeToStatusTypes[code]]
    if (message) status.message = message;
    if (fix) status.fix = fix
    if (data) status.data = data
    if (error) status.error = error
    return status
  })
})


Object.keys(StatusType).forEach((type) => {
  statusT.set(type as TStatusType,  <K extends string, T = any>({message, fix, data, error}: TFuncResult<K, T>) => {
    const status = defaults[type as TStatusType]
    if (message) status.message = message;
    if (fix) status.fix = fix
    if (data) status.data = data
    if (error) status.error = error
    return status
  })
})

statusTypes.set(StatusType.OK, OK)
statusTypes.set(StatusType.Created, Created)
statusTypes.set(StatusType.NoContent, NoContent)
statusTypes.set(StatusType.BadRequest, BadRequest)
statusTypes.set(StatusType.Unauthorized, Unauthorized)
statusTypes.set(StatusType.PaymentRequired, PaymentRequired)
statusTypes.set(StatusType.Forbidden, Forbidden)
statusTypes.set(StatusType.NotFound, NotFound)
statusTypes.set(StatusType.MethodNotAllowed, MethodNotAllowed)
statusTypes.set(StatusType.Timeout, Timeout)
statusTypes.set(StatusType.Conflict, Conflict)
statusTypes.set(StatusType.PayloadTooLarge, PayloadTooLarge)
statusTypes.set(StatusType.UnsupportedMediaType, UnsupportedMediaType)
statusTypes.set(StatusType.ExpectationFailed, ExpectationFailed)
statusTypes.set(StatusType.UnprocessableEntity, UnprocessableEntity)
statusTypes.set(StatusType.Locked, Locked)
statusTypes.set(StatusType.UnavailableForLegalReasons, UnavailableForLegalReasons)
statusTypes.set(StatusType.TooManyRequests, TooManyRequests)
statusTypes.set(StatusType.InternalServerError, InternalServerError)
statusTypes.set(StatusType.BadGateway, BadGateway)
statusTypes.set(StatusType.ServiceUnavailable, ServiceUnavailable)
statusTypes.set(StatusType.GatewayTimeout, GatewayTimeout)

const statusCodes:  Map<TStatusCode, <k extends string, T = any>(Response: TResponse<k , T>) => ServiceResponse<k, T>> = new Map();

statusCodes.set(200, OK)
statusCodes.set(201, Created)
statusCodes.set(204, NoContent)
statusCodes.set(400, BadRequest)
statusCodes.set(401, Unauthorized)
statusCodes.set(402, PaymentRequired)
statusCodes.set(403, Forbidden)
statusCodes.set(404, NotFound)
statusCodes.set(405, MethodNotAllowed)
statusCodes.set(408, Timeout)
statusCodes.set(409, Conflict)
statusCodes.set(413, PayloadTooLarge)
statusCodes.set(415, UnsupportedMediaType)
statusCodes.set(417, ExpectationFailed)
statusCodes.set(422, UnprocessableEntity)
statusCodes.set(423, Locked)
statusCodes.set(429, TooManyRequests)
statusCodes.set(451, UnavailableForLegalReasons)
statusCodes.set(500, InternalServerError)
statusCodes.set(502, BadGateway)
statusCodes.set(503, ServiceUnavailable)
statusCodes.set(504, GatewayTimeout)

export { statusCodes, statusTypes, statusC, statusT }