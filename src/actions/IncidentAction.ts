import axios from 'axios';
import * as interfaces from '../interfaces/incident.d';
import * as types from '../types';
import { initiateAjaxCall } from './AjaxCallAction';

export type IncidentAction = interfaces.IincidentsActionProps | interfaces.Iincident;

export const createIncidentSuccess = (incident: any) => {
    return { type: types.CREATE_INCIDENT_SUCCESS, incident };
};

export const loadIncidentsSuccess = (incidents: any): interfaces.IincidentsActionProps => {
    return { type: types.LOAD_INCIDENTS_SUCCESS, incidents};
};

export const createIncident = (incident) => {
    return ((dispatch: any) => {
        initiateAjaxCall();
        return axios.post('https://private-3b686-wire3.apiary-mock.com/incidents', incident)
            .then((incidentResp: any) => {
                dispatch(createIncidentSuccess(incidentResp.data));
            })
            .catch((error) => {
                console.log(error);
            });
    });
};

export const loadIncidents = () => {
    return ((dispatch: any) => {
        initiateAjaxCall();
        return axios.get('https://private-3b686-wire3.apiary-mock.com/incidents')
        .then((incidents: any) => {
            dispatch(loadIncidentsSuccess(incidents.data.incidents));
        })
        .catch((error) => {
            console.log(error);
        });
    });
};
