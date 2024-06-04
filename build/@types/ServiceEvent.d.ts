import { AppEvent, dataMeta, TEvent } from "./interfaces";
export declare class ServiceEvent<K extends string, T = any> implements AppEvent<K, T> {
    type: string;
    origin: string;
    data: (Partial<{
        [k in K]: T | T[];
    }> & dataMeta) | null;
    desc?: string;
    meta?: any;
    eventId?: string;
    appToken?: string | null;
    accessToken?: string | null;
    serviceQueues?: string[];
    constructor({ type, origin, data, desc, meta, eventId, appToken, accessToken, serviceQueues }: TEvent<K, T>);
}
