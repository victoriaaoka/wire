import { applyMiddleware, createStore } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
// import { loadIncidents } from '../actions/IncidentAction';
const middlewares: any[] = process.env.NODE_ENV === 'production' ?
                            [thunk] : [thunk, reduxImmutableStateInvariant()];
const initialState = {};


/**
 * @export
 * @param {any} {}
 * @returns
 */
const configureStore = ({}) => {
  console.log('store initializing');
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
  );
  return store;
};

export default configureStore;