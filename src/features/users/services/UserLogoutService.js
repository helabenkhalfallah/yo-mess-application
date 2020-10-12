import { call, put, } from 'redux-saga/effects';
import {
  UserActionTypes,
} from '../redux';
import {
  SessionUtils,
} from '../../../core';
import UserApi from './UserApi';

const {
  USER_LOGOUT_REQUEST_SUCCESS,
  USER_LOGOUT_REQUEST_FAIL,
} = UserActionTypes;

const {
  userLogOutQuery,
} = UserApi;

// worker saga: makes the api call
// when watcher saga sees the action
export default function* logOutWorker() {
  try {
    const response = yield call(userLogOutQuery);

    // get the logout response
    const logOutResponse = response.data;

    // check if we have success or fail logout
    if (logOutResponse
        && logOutResponse.status
         && logOutResponse.status === 'OK') {
      // remove token
      SessionUtils.removeToken();

      // dispatch a success action to the store
      yield put({
        type: USER_LOGOUT_REQUEST_SUCCESS,
        status: logOutResponse.status,
      });
    } else {
      yield put({
        type: USER_LOGOUT_REQUEST_FAIL,
        error: 'Echec de déconnexion, veuillez réessayez plus tard.',
      });
    }
  } catch (error) {
    yield put({
      type: USER_LOGOUT_REQUEST_FAIL,
      error: 'Une erreur technique c\'est produite, veuillez réessayez plus tard.',
    });
  }
}
