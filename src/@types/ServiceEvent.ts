import { AppEvent, dataMeta, TEvent } from "./interfaces";

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

