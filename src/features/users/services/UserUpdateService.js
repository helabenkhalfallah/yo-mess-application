import { call, put, } from 'redux-saga/effects';
import {
  UserActionTypes,
} from '../redux';
import {
  SessionUtils,
} from '../../../core';
import UserApi from './UserApi';

const {
  USER_UPDATE_REQUEST_FAIL,
  USER_SAVE,
} = UserActionTypes;

const {
  userUpdateQuery,
} = UserApi;

// worker saga: makes the api call
// when watcher saga sees the action
export default function* userUpdateWorker(action) {
  if (action && action.payload) {
    try {
      const response = yield call(
        userUpdateQuery,
        action.payload
      );

      // get the auth response
      const user = response.data;

      // check if we have success or fail auth
      if (user && user.userToken) {
        // save token on cookie
        SessionUtils.saveToken(user.userToken);

        // dispatch a success action to the store
        // with the logged user
        yield put({
          type: USER_SAVE,
          user,
        });
      } else {
        yield put({
          type: USER_UPDATE_REQUEST_FAIL,
          error: 'Echec de mise à jour du profile.',
        });
      }
    } catch (error) {
      yield put({
        type: USER_UPDATE_REQUEST_FAIL,
        error: 'Une erreur technique c\'est produite, veuillez réessayez plus tard.',
      });
    }
  } else {
    yield put({
      type: USER_UPDATE_REQUEST_FAIL,
      error: 'Une erreur technique c\'est produite, veuillez réessayez plus tard.',
    });
  }
}
