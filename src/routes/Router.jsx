import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import {
  withReduxBoot,
} from '../core';
import {
  ReducerRooter,
  SagaRoot,
} from '../features/commons';
import LazyRoute from './LazyRoute';
import Path from './Path';

const {
  USER_LOGIN_PATH,
  MESSAGES_DASHBOARD_PATH,
} = Path;

const {
  UserLoginPage,
  MessagesDashboard,
} = LazyRoute;

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path={USER_LOGIN_PATH}
        component={(props) => (
          <UserLoginPage
            {...props}
            page="UserLoginPage"
          />
        )}
      />
      <Route
        exact
        path={MESSAGES_DASHBOARD_PATH}
        component={(props) => (
          <MessagesDashboard
            {...props}
            page="MessagesDashboard"
          />
        )}
      />
      <Redirect
        from="/"
        to={USER_LOGIN_PATH}
      />
    </Switch>
  </BrowserRouter>
);

export default withReduxBoot(
  Router,
  ReducerRooter,
  SagaRoot
);
