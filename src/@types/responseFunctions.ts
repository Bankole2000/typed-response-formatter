import { StatusType, defaults } from "./statusTypes"
import { ServiceResponse } from "./ServiceResponse"
import { TResponse } from "./interfaces"

export const OK = <k extends string, K = any>({
  message = defaults[StatusType.OK].message,
  data = null,
  statusCode = defaults[StatusType.OK].code,
  success = true,
  error = undefined,
  errMessage = undefined,
  fix = undefined,
  newAccessToken = undefined,
  statusType = StatusType.OK,
  meta = undefined
}: TResponse<k, K>) => new ServiceResponse<k, K>({message, data, success, statusCode, errMessage, error, fix, statusType, newAccessToken, meta })

export const Created = <k extends string, K = any>({
  message = defaults[StatusType.Created].message,
  data = null,
  statusCode = defaults[StatusType.Created].code,
  success = true,
  error = undefined,
  errMessage = undefined,
  fix = undefined,
  newAccessToken = undefined,
  statusType = StatusType.Created,
  meta = undefined
}: TResponse<k, K>) => new ServiceResponse<k, K>({message, data, success, statusCode, errMessage, error, fix, statusType, newAccessToken, meta })

export const NoContent = <k extends string, K = any>({
  message = defaults[StatusType.NoContent].message,
  data = null,
  statusCode = defaults[StatusType.NoContent].code,
  success = true,
  error = undefined,
  errMessage = undefined,
  fix = defaults[StatusType.NoContent].fix ? defaults[StatusType.NoContent].fix : undefined,
  newAccessToken = undefined,
  statusType = StatusType.NoContent,
  meta = undefined
}: TResponse<k, K>) => new ServiceResponse<k, K>({message, data, success, statusCode, errMessage, error, fix, statusType, newAccessToken, meta })

export const BadRequest = <k extends string, K = any>({
  message = defaults[StatusType.BadRequest].message,
  data = null,
  statusCode = defaults[StatusType.BadRequest].code,
  success =  false,
  error =  defaults[StatusType.BadRequest].message,
  errMessage =  defaults[StatusType.BadRequest].message,
  fix = defaults[StatusType.BadRequest].fix,
  newAccessToken = undefined,
  statusType = StatusType.BadRequest,
  meta = undefined
}: TResponse<k, K>) => new ServiceResponse<k, K>({message, data, success, statusCode, errMessage, error, fix, statusType, newAccessToken, meta })

export const Unauthorized = <k extends string, K = any>({
  message = defaults[StatusType.Unauthorized].message,
  data = null,
  statusCode = defaults[StatusType.Unauthorized].code,
  success = false,
  error = defaults[StatusType.Unauthorized].message,
  errMessage = defaults[StatusType.Unauthorized].message,
  fix = defaults[StatusType.Unauthorized].fix,
  newAccessToken = undefined,
  statusType = StatusType.Unauthorized,
  meta = undefined
}: TResponse<k, K>) => new ServiceResponse<k, K>({message, data, success, statusCode, errMessage, error, fix, statusType, newAccessToken, meta })

export const PaymentRequired = <k extends string, K = any>({
  message = defaults[StatusType.PaymentRequired].message,
  data = null,
  statusCode = defaults[StatusType.PaymentRequired].code,
  success = defaults[StatusType.PaymentRequired].code < 300 ? true : false,
  error = defaults[StatusType.PaymentRequired].code < 300 ? undefined : defaults[StatusType.PaymentRequired].message,
  errMessage = defaults[StatusType.PaymentRequired].code < 300 ? undefined : defaults[StatusType.PaymentRequired].message,
  fix = defaults[StatusType.PaymentRequired].fix ? defaults[StatusType.PaymentRequired].fix : undefined,
  newAccessToken = undefined,
  statusType = StatusType.PaymentRequired,
  meta = undefined
}: TResponse<k, K>) => new ServiceResponse<k, K>({message, data, success, statusCode, errMessage, error, fix, statusType, newAccessToken, meta })

export const Forbidden = <k extends string, K = any>({
  message = defaults[StatusType.Forbidden].message,
  data = null,
  statusCode = defaults[StatusType.Forbidden].code,
  success = defaults[StatusType.Forbidden].code < 300 ? true : false,
  error = defaults[StatusType.Forbidden].code < 300 ? undefined : defaults[StatusType.Forbidden].message,
  errMessage = defaults[StatusType.Forbidden].code < 300 ? undefined : defaults[StatusType.Forbidden].message,
  fix = defaults[StatusType.Forbidden].fix ? defaults[StatusType.Forbidden].fix : undefined,
  newAccessToken = undefined,
  statusType = StatusType.Forbidden,
  meta = undefined
}: TResponse<k, K>) => new ServiceResponse<k, K>({message, data, success, statusCode, errMessage, error, fix, statusType, newAccessToken, meta })

export const NotFound = <k extends string, K = any>({
  message = defaults[StatusType.NotFound].message,
  data = null,
  statusCode = defaults[StatusType.NotFound].code,
  success = defaults[StatusType.NotFound].code < 300 ? true : false,
  error = defaults[StatusType.NotFound].code < 300 ? undefined : defaults[StatusType.NotFound].message,
  errMessage = defaults[StatusType.NotFound].code < 300 ? undefined : defaults[StatusType.NotFound].message,
  fix = defaults[StatusType.NotFound].fix ? defaults[StatusType.NotFound].fix : undefined,
  newAccessToken = undefined,
  statusType = StatusType.NotFound,
  meta = undefined
}: TResponse<k, K>) => new ServiceResponse<k, K>({message, data, success, statusCode, errMessage, error, fix, statusType, newAccessToken, meta })

export const MethodNotAllowed = <k extends string, K = any>({
  message = defaults[StatusType.MethodNotAllowed].message,
  data = null,
  statusCode = defaults[StatusType.MethodNotAllowed].code,
  success = defaults[StatusType.MethodNotAllowed].code < 300 ? true : false,
  error = defaults[StatusType.MethodNotAllowed].code < 300 ? undefined : defaults[StatusType.MethodNotAllowed].message,
  errMessage = defaults[StatusType.MethodNotAllowed].code < 300 ? undefined : defaults[StatusType.MethodNotAllowed].message,
  fix = defaults[StatusType.MethodNotAllowed].fix ? defaults[StatusType.MethodNotAllowed].fix : undefined,
  newAccessToken = undefined,
  statusType = StatusType.MethodNotAllowed,
  meta = undefined
}: TResponse<k, K>) => new ServiceResponse<k, K>({message, data, success, statusCode, errMessage, error, fix, statusType, newAccessToken, meta })

export const Timeout = <k extends string, K = any>({
  message = defaults[StatusType.Timeout].message,
  data = null,
  statusCode = defaults[StatusType.Timeout].code,
  success = defaults[StatusType.Timeout].code < 300 ? true : false,
  error = defaults[StatusType.Timeout].code < 300 ? undefined : defaults[StatusType.Timeout].message,
  errMessage = defaults[StatusType.Timeout].code < 300 ? undefined : defaults[StatusType.Timeout].message,
  fix = defaults[StatusType.Timeout].fix ? defaults[StatusType.Timeout].fix : undefined,
  newAccessToken = undefined,
  statusType = StatusType.Timeout,
  meta = undefined
}: TResponse<k, K>) => new ServiceResponse<k, K>({message, data, success, statusCode, errMessage, error, fix, statusType, newAccessToken, meta })

export const Conflict = <k extends string, K = any>({
  message = defaults[StatusType.Conflict].message,
  data = null,
  statusCode = defaults[StatusType.Conflict].code,
  success = defaults[StatusType.Conflict].code < 300 ? true : false,
  error = defaults[StatusType.Conflict].code < 300 ? undefined : defaults[StatusType.Conflict].message,
  errMessage = defaults[StatusType.Conflict].code < 300 ? undefined : defaults[StatusType.Conflict].message,
  fix = defaults[StatusType.Conflict].fix ? defaults[StatusType.Conflict].fix : undefined,
  newAccessToken = undefined,
  statusType = StatusType.Conflict,
  meta = undefined
}: TResponse<k, K>) => new ServiceResponse<k, K>({message, data, success, statusCode, errMessage, error, fix, statusType, newAccessToken, meta })

export const PayloadTooLarge = <k extends string, K = any>({
  message = defaults[StatusType.PayloadTooLarge].message,
  data = null,
  statusCode = defaults[StatusType.PayloadTooLarge].code,
  success = defaults[StatusType.PayloadTooLarge].code < 300 ? true : false,
  error = defaults[StatusType.PayloadTooLarge].code < 300 ? undefined : defaults[StatusType.PayloadTooLarge].message,
  errMessage = defaults[StatusType.PayloadTooLarge].code < 300 ? undefined : defaults[StatusType.PayloadTooLarge].message,
  fix = defaults[StatusType.PayloadTooLarge].fix ? defaults[StatusType.PayloadTooLarge].fix : undefined,
  newAccessToken = undefined,
  statusType = StatusType.PayloadTooLarge,
  meta = undefined
}: TResponse<k, K>) => new ServiceResponse<k, K>({message, data, success, statusCode, errMessage, error, fix, statusType, newAccessToken, meta })

export const UnsupportedMediaType = <k extends string, K = any>({
  message = defaults[StatusType.UnsupportedMediaType].message,
  data = null,
  statusCode = defaults[StatusType.UnsupportedMediaType].code,
  success = defaults[StatusType.UnsupportedMediaType].code < 300 ? true : false,
  error = defaults[StatusType.UnsupportedMediaType].code < 300 ? undefined : defaults[StatusType.UnsupportedMediaType].message,
  errMessage = defaults[StatusType.UnsupportedMediaType].code < 300 ? undefined : defaults[StatusType.UnsupportedMediaType].message,
  fix = defaults[StatusType.UnsupportedMediaType].fix ? defaults[StatusType.UnsupportedMediaType].fix : undefined,
  newAccessToken = undefined,
  statusType = StatusType.UnsupportedMediaType,
  meta = undefined
}: TResponse<k, K>) => new ServiceResponse<k, K>({message, data, success, statusCode, errMessage, error, fix, statusType, newAccessToken, meta })

export const ExpectationFailed = <k extends string, K = any>({
  message = defaults[StatusType.ExpectationFailed].message,
  data = null,
  statusCode = defaults[StatusType.ExpectationFailed].code,
  success = defaults[StatusType.ExpectationFailed].code < 300 ? true : false,
  error = defaults[StatusType.ExpectationFailed].code < 300 ? undefined : defaults[StatusType.ExpectationFailed].message,
  errMessage = defaults[StatusType.ExpectationFailed].code < 300 ? undefined : defaults[StatusType.ExpectationFailed].message,
  fix = defaults[StatusType.ExpectationFailed].fix ? defaults[StatusType.ExpectationFailed].fix : undefined,
  newAccessToken = undefined,
  statusType = StatusType.ExpectationFailed,
  meta = undefined
}: TResponse<k, K>) => new ServiceResponse<k, K>({message, data, success, statusCode, errMessage, error, fix, statusType, newAccessToken, meta })

export const UnprocessableEntity = <k extends string, K = any>({
  message = defaults[StatusType.UnprocessableEntity].message,
  data = null,
  statusCode = defaults[StatusType.UnprocessableEntity].code,
  success = defaults[StatusType.UnprocessableEntity].code < 300 ? true : false,
  error = defaults[StatusType.UnprocessableEntity].code < 300 ? undefined : defaults[StatusType.UnprocessableEntity].message,
  errMessage = defaults[StatusType.UnprocessableEntity].code < 300 ? undefined : defaults[StatusType.UnprocessableEntity].message,
  fix = defaults[StatusType.UnprocessableEntity].fix ? defaults[StatusType.UnprocessableEntity].fix : undefined,
  newAccessToken = undefined,
  statusType = StatusType.UnprocessableEntity,
  meta = undefined
}: TResponse<k, K>) => new ServiceResponse<k, K>({message, data, success, statusCode, errMessage, error, fix, statusType, newAccessToken, meta })

export const Locked = <k extends string, K = any>({
  message = defaults[StatusType.Locked].message,
  data = null,
  statusCode = defaults[StatusType.Locked].code,
  success = defaults[StatusType.Locked].code < 300 ? true : false,
  error = defaults[StatusType.Locked].code < 300 ? undefined : defaults[StatusType.Locked].message,
  errMessage = defaults[StatusType.Locked].code < 300 ? undefined : defaults[StatusType.Locked].message,
  fix = defaults[StatusType.Locked].fix ? defaults[StatusType.Locked].fix : undefined,
  newAccessToken = undefined,
  statusType = StatusType.Locked,
  meta = undefined
}: TResponse<k, K>) => new ServiceResponse<k, K>({message, data, success, statusCode, errMessage, error, fix, statusType, newAccessToken, meta })

export const TooManyRequests = <k extends string, K = any>({
  message = defaults[StatusType.TooManyRequests].message,
  data = null,
  statusCode = defaults[StatusType.TooManyRequests].code,
  success = defaults[StatusType.TooManyRequests].code < 300 ? true : false,
  error = defaults[StatusType.TooManyRequests].code < 300 ? undefined : defaults[StatusType.TooManyRequests].message,
  errMessage = defaults[StatusType.TooManyRequests].code < 300 ? undefined : defaults[StatusType.TooManyRequests].message,
  fix = defaults[StatusType.TooManyRequests].fix ? defaults[StatusType.TooManyRequests].fix : undefined,
  newAccessToken = undefined,
  statusType = StatusType.TooManyRequests,
  meta = undefined
}: TResponse<k, K>) => new ServiceResponse<k, K>({message, data, success, statusCode, errMessage, error, fix, statusType, newAccessToken, meta })

export const UnavailableForLegalReasons = <k extends string, K = any>({
  message = defaults[StatusType.UnavailableForLegalReasons].message,
  data = null,
  statusCode = defaults[StatusType.UnavailableForLegalReasons].code,
  success = defaults[StatusType.UnavailableForLegalReasons].code < 300 ? true : false,
  error = defaults[StatusType.UnavailableForLegalReasons].code < 300 ? undefined : defaults[StatusType.UnavailableForLegalReasons].message,
  errMessage = defaults[StatusType.UnavailableForLegalReasons].code < 300 ? undefined : defaults[StatusType.UnavailableForLegalReasons].message,
  fix = defaults[StatusType.UnavailableForLegalReasons].fix ? defaults[StatusType.UnavailableForLegalReasons].fix : undefined,
  newAccessToken = undefined,
  statusType = StatusType.UnavailableForLegalReasons,
  meta = undefined
}: TResponse<k, K>) => new ServiceResponse<k, K>({message, data, success, statusCode, errMessage, error, fix, statusType, newAccessToken, meta })

export const InternalServerError = <k extends string, K = any>({
  message = defaults[StatusType.InternalServerError].message,
  data = null,
  statusCode = defaults[StatusType.InternalServerError].code,
  success = defaults[StatusType.InternalServerError].code < 300 ? true : false,
  error = defaults[StatusType.InternalServerError].code < 300 ? undefined : defaults[StatusType.InternalServerError].message,
  errMessage = defaults[StatusType.InternalServerError].code < 300 ? undefined : defaults[StatusType.InternalServerError].message,
  fix = defaults[StatusType.InternalServerError].fix ? defaults[StatusType.InternalServerError].fix : undefined,
  newAccessToken = undefined,
  statusType = StatusType.InternalServerError,
  meta = undefined
}: TResponse<k, K>) => new ServiceResponse<k, K>({message, data, success, statusCode, errMessage, error, fix, statusType, newAccessToken, meta })

export const BadGateway = <k extends string, K = any>({
  message = defaults[StatusType.BadGateway].message,
  data = null,
  statusCode = defaults[StatusType.BadGateway].code,
  success = defaults[StatusType.BadGateway].code < 300 ? true : false,
  error = defaults[StatusType.BadGateway].code < 300 ? undefined : defaults[StatusType.BadGateway].message,
  errMessage = defaults[StatusType.BadGateway].code < 300 ? undefined : defaults[StatusType.BadGateway].message,
  fix = defaults[StatusType.BadGateway].fix ? defaults[StatusType.BadGateway].fix : undefined,
  newAccessToken = undefined,
  statusType = StatusType.BadGateway,
  meta = undefined
}: TResponse<k, K>) => new ServiceResponse<k, K>({message, data, success, statusCode, errMessage, error, fix, statusType, newAccessToken, meta })

export const ServiceUnavailable = <k extends string, K = any>({
  message = defaults[StatusType.ServiceUnavailable].message,
  data = null,
  statusCode = defaults[StatusType.ServiceUnavailable].code,
  success = defaults[StatusType.ServiceUnavailable].code < 300 ? true : false,
  error = defaults[StatusType.ServiceUnavailable].code < 300 ? undefined : defaults[StatusType.ServiceUnavailable].message,
  errMessage = defaults[StatusType.ServiceUnavailable].code < 300 ? undefined : defaults[StatusType.ServiceUnavailable].message,
  fix = defaults[StatusType.ServiceUnavailable].fix ? defaults[StatusType.ServiceUnavailable].fix : undefined,
  newAccessToken = undefined,
  statusType = StatusType.ServiceUnavailable,
  meta = undefined
}: TResponse<k, K>) => new ServiceResponse<k, K>({message, data, success, statusCode, errMessage, error, fix, statusType, newAccessToken, meta })

export const GatewayTimeout = <k extends string, K = any>({
  message = defaults[StatusType.GatewayTimeout].message,
  data = null,
  statusCode = defaults[StatusType.GatewayTimeout].code,
  success = defaults[StatusType.GatewayTimeout].code < 300 ? true : false,
  error = defaults[StatusType.GatewayTimeout].code < 300 ? undefined : defaults[StatusType.GatewayTimeout].message,
  errMessage = defaults[StatusType.GatewayTimeout].code < 300 ? undefined : defaults[StatusType.GatewayTimeout].message,
  fix = defaults[StatusType.GatewayTimeout].fix ? defaults[StatusType.GatewayTimeout].fix : undefined,
  newAccessToken = undefined,
  statusType = StatusType.GatewayTimeout,
  meta = undefined
}: TResponse<k, K>) => new ServiceResponse<k, K>({message, data, success, statusCode, errMessage, error, fix, statusType, newAccessToken, meta })
