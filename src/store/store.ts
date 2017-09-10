import { applyMiddleware, createStore } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
const middlewares: any[] = process.env.NODE_ENV === 'production' ?
                            [thunk] : [thunk, reduxImmutableStateInvariant()];
import rootReducer from '../reducers';

const initialState = {};

/**
 * @export
 * @param {any} {}
 * @returns
 */
const configureStore = ({}) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
  );
  return store;
};

export default configureStore;
