import { AppEvent, dataMeta, TEvent } from "./interfaces";

/**
 * Generates a {@link ServiceEvent} instance
 * @class {@link ServiceEvent}
 * @constructor
 * @param {...TEvent} eventData - Object of 3 - 9 {@link TEvent} properties
 * @param {Object} eventData - Object of ServiceEvent properties
 * @param {Object} [eventData.data] - Object of any data to be sent.
 * @param {string} eventData.type - eventType (e.g. "USER_REGISTERED")
 * @param {string} eventData.origin - e.g. auth-service, email-service
 * @param {string} [eventData.desc] - event description
 * @param {string} [eventData.eventId] - unique event identifier
 * @param {string} [eventData.appToken] - for any app-based security tokens
 * @param {string} [eventData.accessToken] - for any user-based security tokens
 * @param {Array<string>} [eventData.serviceQueues] - list of services to send event to e.g. ['auth-service', 'email-service']
 * @param {any} [eventData.meta] - any event metadata
 * @example
 * const userGeneratedEvent = new ServiceEvent({type: "user.created", origin: 'auth-service', data: {name: "John", age: 20}})
 * @returns {ServiceEvent}
 */
export class ServiceEvent<K extends string, T = any> implements AppEvent<K, T> {
  type: string;
  
  origin: string;
  
  data: (Partial<{ [k in K]: T | T[] }> & dataMeta) | null;

  desc?: string;
  
  meta?: any;

  eventId?: string;

  appToken?: string | null;

  accessToken?: string | null;

  serviceQueues?: string[];

  constructor({
    type,
    origin = "UNKNOWN",
    data = null,
    desc = undefined,
    meta = undefined,
    eventId = undefined,
    appToken = undefined,
    accessToken = undefined,
    serviceQueues = []
  }: TEvent<K, T>) {
    this.type = type;
    this.origin = origin;
    this.data = data;
    this.meta = meta
    this.eventId = eventId;
    this.appToken = appToken
    this.serviceQueues = serviceQueues
    this.desc = desc;
    this.accessToken = accessToken;
  }
}

