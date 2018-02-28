import initialState from './initialState';
import { FETCH_INCIDENTS_SUCCESS, CHANGE_STATUS, INCIDENTS_LOADING } from '../actions/actionTypes';

const incidentReducer = (state = initialState.incidents, action) => {
  switch (action.type) {
    case FETCH_INCIDENTS_SUCCESS:
      return {
        ...state,
        incidents: action.incidents,
        isLoading: false
      };

    case INCIDENTS_LOADING:
      return {
        ...state,
        isLoading: action.status
      };

    case CHANGE_STATUS:
      return state;

    default:
      return state;
  }
};

export default incidentReducer;
