import React from 'react';
import { Provider, } from 'react-redux';
import ReduxStore from './ReduxStore';

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
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
