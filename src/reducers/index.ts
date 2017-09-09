import { combineReducers } from 'redux';

import incidents from './incidentReducer';

const rootReducer = combineReducers({
    incidents,
});

export default rootReducer;