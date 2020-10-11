import { call, put, } from 'redux-saga/effects';
import {
  UserActionTypes,
} from '../redux';
import {
  SessionUtils,
} from '../../../core';
import UserApi from './UserApi';

const {
  USER_LOGIN_REQUEST_FAIL,
  USER_SAVE,
} = UserActionTypes;

const {
  userLoginQuery,
} = UserApi;

// worker saga: makes the api call
// when watcher saga sees the action
export default function* loginWorker(action) {
  if (action && action.payload) {
    try {
      const response = yield call(
        userLoginQuery,
        action.payload
      );

      // get the auth response
      const user = response.data;

      // check if we have success or fail auth
      if (user && user.userToken) {
        // save token on cookie
        // if page is refreshed we keep the same token
        SessionUtils.saveToken(user.userToken);

        // dispatch a success action to the store
        // with the logged user
        yield put({
          type: USER_SAVE,
          user,
        });
      } else {
        yield put({
          type: USER_LOGIN_REQUEST_FAIL,
          error: 'Echec d\'authentification, veuillez vérifier vos paramètres',
        });
      }
    } catch (error) {
      yield put({
        type: USER_LOGIN_REQUEST_FAIL,
        error: 'Une erreur technique c\'est produite, veuillez réessayez plus tard.',
      });
    }
  } else {
    yield put({
      type: USER_LOGIN_REQUEST_FAIL,
      error: 'Une erreur technique c\'est produite, veuillez réessayez plus tard.',
    });
  }
}
