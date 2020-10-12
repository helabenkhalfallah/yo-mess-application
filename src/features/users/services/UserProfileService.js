import { call, put, } from 'redux-saga/effects';
import {
  UserActionTypes,
} from '../redux';
import UserApi from './UserApi';

const {
  USER_SAVE,
} = UserActionTypes;

const {
  userProfileQuery,
} = UserApi;

// worker saga: makes the api call
// when watcher saga sees the action
export default function* getMessages() {
  try {
    const response = yield call(userProfileQuery);

    // parse the response
    const userProfile = response.data;

    // check if we have success or fail
    if (userProfile
        && Object.keys(userProfile)
        && Object.keys(userProfile).length) {
      // dispatch a success action to the store
      yield put({
        type: USER_SAVE,
        user: userProfile,
      });
    }
  } catch (error) {
    // nothing to do case error, we handle empty user on UI part
  }
}
