"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusT = exports.statusC = exports.statusTypes = exports.statusCodes = void 0;
const responseFunctions_1 = require("./@types/responseFunctions");
const statusTypes_1 = require("./@types/statusTypes");
const serviceResponse_1 = require("./serviceResponse");
const statusTypes = new Map();
exports.statusTypes = statusTypes;
const statusT = new Map();
exports.statusT = statusT;
const statusC = new Map();
exports.statusC = statusC;
serviceResponse_1.statusCodeList.forEach(code => {
    statusC.set(code, ({ message, fix, data, error }) => {
        const status = statusTypes_1.defaults[serviceResponse_1.codeToStatusTypes[code]];
        if (message)
            status.message = message;
        if (fix)
            status.fix = fix;
        if (data)
            status.data = data;
        if (error)
            status.error = error;
        return status;
    });
});
Object.keys(statusTypes_1.StatusType).forEach((type) => {
    statusT.set(type, ({ message, fix, data, error }) => {
        const status = statusTypes_1.defaults[type];
        if (message)
            status.message = message;
        if (fix)
            status.fix = fix;
        if (data)
            status.data = data;
        if (error)
            status.error = error;
        return status;
    });
});
statusTypes.set(statusTypes_1.StatusType.OK, responseFunctions_1.OK);
statusTypes.set(statusTypes_1.StatusType.Created, responseFunctions_1.Created);
statusTypes.set(statusTypes_1.StatusType.NoContent, responseFunctions_1.NoContent);
statusTypes.set(statusTypes_1.StatusType.BadRequest, responseFunctions_1.BadRequest);
statusTypes.set(statusTypes_1.StatusType.Unauthorized, responseFunctions_1.Unauthorized);
statusTypes.set(statusTypes_1.StatusType.PaymentRequired, responseFunctions_1.PaymentRequired);
statusTypes.set(statusTypes_1.StatusType.Forbidden, responseFunctions_1.Forbidden);
statusTypes.set(statusTypes_1.StatusType.NotFound, responseFunctions_1.NotFound);
statusTypes.set(statusTypes_1.StatusType.MethodNotAllowed, responseFunctions_1.MethodNotAllowed);
statusTypes.set(statusTypes_1.StatusType.Timeout, responseFunctions_1.Timeout);
statusTypes.set(statusTypes_1.StatusType.Conflict, responseFunctions_1.Conflict);
statusTypes.set(statusTypes_1.StatusType.PayloadTooLarge, responseFunctions_1.PayloadTooLarge);
statusTypes.set(statusTypes_1.StatusType.UnsupportedMediaType, responseFunctions_1.UnsupportedMediaType);
statusTypes.set(statusTypes_1.StatusType.ExpectationFailed, responseFunctions_1.ExpectationFailed);
statusTypes.set(statusTypes_1.StatusType.UnprocessableEntity, responseFunctions_1.UnprocessableEntity);
statusTypes.set(statusTypes_1.StatusType.Locked, responseFunctions_1.Locked);
statusTypes.set(statusTypes_1.StatusType.UnavailableForLegalReasons, responseFunctions_1.UnavailableForLegalReasons);
statusTypes.set(statusTypes_1.StatusType.TooManyRequests, responseFunctions_1.TooManyRequests);
statusTypes.set(statusTypes_1.StatusType.InternalServerError, responseFunctions_1.InternalServerError);
statusTypes.set(statusTypes_1.StatusType.BadGateway, responseFunctions_1.BadGateway);
statusTypes.set(statusTypes_1.StatusType.ServiceUnavailable, responseFunctions_1.ServiceUnavailable);
statusTypes.set(statusTypes_1.StatusType.GatewayTimeout, responseFunctions_1.GatewayTimeout);
const statusCodes = new Map();
exports.statusCodes = statusCodes;
statusCodes.set(200, responseFunctions_1.OK);
statusCodes.set(201, responseFunctions_1.Created);
statusCodes.set(204, responseFunctions_1.NoContent);
statusCodes.set(400, responseFunctions_1.BadRequest);
statusCodes.set(401, responseFunctions_1.Unauthorized);
statusCodes.set(402, responseFunctions_1.PaymentRequired);
statusCodes.set(403, responseFunctions_1.Forbidden);
statusCodes.set(404, responseFunctions_1.NotFound);
statusCodes.set(405, responseFunctions_1.MethodNotAllowed);
statusCodes.set(408, responseFunctions_1.Timeout);
statusCodes.set(409, responseFunctions_1.Conflict);
statusCodes.set(413, responseFunctions_1.PayloadTooLarge);
statusCodes.set(415, responseFunctions_1.UnsupportedMediaType);
statusCodes.set(417, responseFunctions_1.ExpectationFailed);
statusCodes.set(422, responseFunctions_1.UnprocessableEntity);
statusCodes.set(423, responseFunctions_1.Locked);
statusCodes.set(429, responseFunctions_1.TooManyRequests);
statusCodes.set(451, responseFunctions_1.UnavailableForLegalReasons);
statusCodes.set(500, responseFunctions_1.InternalServerError);
statusCodes.set(502, responseFunctions_1.BadGateway);
statusCodes.set(503, responseFunctions_1.ServiceUnavailable);
statusCodes.set(504, responseFunctions_1.GatewayTimeout);
