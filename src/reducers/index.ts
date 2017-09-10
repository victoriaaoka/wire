import { combineReducers } from 'redux';

import incidents from './incidentReducer';
import initiateCall from './initiateAjaxCall';

const rootReducer = combineReducers({
    incidents,
    initiateCall,
});

export default rootReducer;
