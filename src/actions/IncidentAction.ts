import axios from 'axios';
import * as interfaces from '../interfaces/incident.d';
import * as types from '../types';

export type IncidentAction = interfaces.IincidentActionProps;

export const loadIncidentsSuccess = (incidents: any): interfaces.IincidentActionProps => {
    return { type: types.LOAD_INCIDENTS_SUCCESS, incidents};
}

export const loadIncidents = () => {
    return ((dispatch: any) => {
        return axios.get('https://private-3b686-wire3.apiary-mock.com/incidents')
        .then((incidents: any) => {
            console.log(incidents);
            dispatch(loadIncidentsSuccess(incidents));
        })
        .catch((error) => {
            console.log(error);
        })
    });
}