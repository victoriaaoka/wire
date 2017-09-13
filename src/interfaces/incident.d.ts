import { CREATE_INCIDENT_SUCCESS, LOAD_INCIDENTS_SUCCESS } from '../types';

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
    type: CREATE_INCIDENT_SUCCESS;
}

export interface IincidentsActionProps {
    incidents: Iincidents;
    type: LOAD_INCIDENTS_SUCCESS;
}
