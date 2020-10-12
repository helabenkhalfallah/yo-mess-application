import React from 'react';
import { Provider, } from 'react-redux';
import ReduxStore from './ReduxStore';

/**
 * Redux Boot HOC : to easy init and configure redux
 * @param {*} WrappedBootComponent
 * @param {*} ReducerRoot
 * @param {*} SagaRoot
 */
const withReduxBoot = (
  WrappedBootComponent,
  ReducerRoot,
  SagaRoot
) => {
  // prepare reducer and middle ware
  const {
    store,
    sagaMiddleware,
  } = ReduxStore(ReducerRoot);

  // start saga middleware
  sagaMiddleware.run(SagaRoot);

  return () => (
    <Provider store={store}>
      <WrappedBootComponent />
    </Provider>
  );
};

export default withReduxBoot;
