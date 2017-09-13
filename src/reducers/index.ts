import { combineReducers } from 'redux';

// reducers
import incidentCategories from './incidentCategoryReducer';
import incidents from './incidentReducer';
import initiateCall from './initiateAjaxCall';

const rootReducer = combineReducers({
    incidentCategories,
    incidents,
    initiateCall,
});

export default rootReducer;
