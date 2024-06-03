"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceEvent = void 0;
class ServiceEvent {
    ;
    constructor({ type, origin = "UNKNOWN", data = null, desc = undefined, meta = undefined, eventId = undefined, appToken = undefined, accessToken = undefined, serviceQueues = [] }) {
        this.type = type;
        this.origin = origin;
        this.data = data;
        this.meta = meta;
        this.eventId = eventId;
        this.appToken = appToken;
        this.serviceQueues = serviceQueues;
        this.desc = desc;
        this.accessToken = accessToken;
    }
}
exports.ServiceEvent = ServiceEvent;
