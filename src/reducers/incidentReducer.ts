import { IncidentAction } from '../actions/IncidentAction';
import * as types from '../types';
import initialState from './initialState';

const incidentReducer = (state = initialState.incidents, action: IncidentAction) => {
    switch (action.type) {
        case types.LOAD_INCIDENTS_SUCCESS:
            return action.incidents;
        case types.CREATE_INCIDENT_SUCCESS:
            const currentData = state.slice();
            currentData.splice(currentData.length, 0, action.incident );
            return currentData;
        default:
            return state;
    }
};

export default incidentReducer;
