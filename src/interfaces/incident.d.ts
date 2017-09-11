import * as types from '../types';

export interface Iincident {
    id: number;
    categoryId: number;
    userId: number;
    description: string;
    dateReported: string;
    dateCreated: string;
    locationId: number;
}

export interface Iincidents {
    incidents: Iincident[];
}

export interface Iincident {
    incident: Iincident;
    type: types.CREATE_INCIDENT_SUCCESS;
}

export interface IincidentsActionProps {
    incidents: Iincidents;
    type: types.LOAD_INCIDENTS_SUCCESS;
}
