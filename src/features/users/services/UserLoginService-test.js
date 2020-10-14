import { expectSaga, } from 'redux-saga-test-plan';
import { throwError, } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';
import UserReducer from '../redux/UserReducer';
import UserLoginService from './UserLoginService';
import UserApi from './UserApi';
import UserDataMock from '../commons/UserDataMock';

const {
  userLoginFakeAction,
  userLoginFakeResponse,
  userLoginBadFakeResponse,
} = UserDataMock;

const {
  userLoginQuery,
} = UserApi;

describe('Test Suite - User Login Service', () => {
  it('User Login Service (success)', () => {
    expectSaga(UserLoginService, userLoginFakeAction)
      .withReducer(UserReducer)
      .provide([
        matchers.call.fn(userLoginQuery), userLoginFakeResponse,
      ])
      .put({
        type: 'USER_SAVE',
        user: userLoginFakeResponse,
      })
      .hasFinalState({
        loading: false,
        user: userLoginFakeResponse,
        error: null,
      })
      .run();
  });
  it('User Login Service (fail, no token received)', () => {
    const error = 'Echec d\'authentification, veuillez vérifier vos paramètres';
    expectSaga(UserLoginService, userLoginFakeAction)
      .withReducer(UserReducer)
      .provide([
        matchers.call.fn(userLoginQuery), userLoginBadFakeResponse,
      ])
      .put({
        type: 'USER_LOGIN_REQUEST_FAIL',
        error,
      })
      .hasFinalState({
        loading: false,
        user: null,
        error,
      })
      .run();
  });
  it('User Login Service (fail)', () => {
    const data = {};
    const error = 'Echec d\'authentification, veuillez vérifier vos paramètres';
    expectSaga(UserLoginService, userLoginFakeAction)
      .withReducer(UserReducer)
      .provide([
        matchers.call.fn(userLoginQuery), data,
      ])
      .put({
        type: 'USER_LOGIN_REQUEST_FAIL',
        error,
      })
      .hasFinalState({
        loading: false,
        user: null,
        error,
      })
      .run();
  });
  it('User Login Service (exception)', () => {
    const error = 'Une erreur technique c\'est produite, veuillez réessayez plus tard.';
    const exception = new Error(error);
    expectSaga(UserLoginService, userLoginFakeAction)
      .withReducer(UserReducer)
      .provide([
        matchers.call.fn(userLoginQuery), throwError(exception),
      ])
      .put({
        type: 'USER_LOGIN_REQUEST_FAIL',
        error,
      })
      .hasFinalState({
        loading: false,
        user: null,
        error,
      })
      .run();
  });
});
