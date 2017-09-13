import { IncidentAction } from '../actions/IncidentAction';
import { LOAD_CATEGORIES_SUCCESS } from '../types';
import initialState from './initialState';

const incidentCategoryReducer = (state = initialState.incidentCategories, action) => {
    switch (action.type) {
        case LOAD_CATEGORIES_SUCCESS:
            return action.categories;
        default:
            return state;
    }
};

export default incidentCategoryReducer;
