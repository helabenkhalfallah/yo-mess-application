import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

/**
 * Configure redux store
 * @param {} ReducerRoot
 */
const ReduxStore = (ReducerRoot) => {
  // Add the combined reducers to the store
  // And apply saga middleware to handle HTTP Effects
  // prepare reducer and middle ware
  const reduxReducers = combineReducers(ReducerRoot);
  const sagaMiddleware = createSagaMiddleware();

  // create store
  const reduxStore = createStore(
    reduxReducers,
    compose(applyMiddleware(sagaMiddleware))
  );

  // return middleware & store
  return {
    store: reduxStore,
    sagaMiddleware,
  };
};

export default ReduxStore;
