import * as types from '../types';
import { IncidentAction } from '../actions/IncidentAction'; 
import initialState from './initialState';

const incidentReducer = (state = initialState.incidents, action: IncidentAction) => {
    switch (action.type) {
        case types.LOAD_INCIDENTS_SUCCESS:
            return action.incidents;
        default:
            return state;
    }
}

export default incidentReducer;