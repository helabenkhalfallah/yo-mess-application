import { call, put, } from 'redux-saga/effects';
import {
  UserActionTypes,
} from '../redux';
import UserApi from './UserApi';

const {
  USER_FRIENDS_REQUEST_SUCCESS,
  USER_FRIENDS_REQUEST_FAIL,
} = UserActionTypes;

const {
  userFriendsQuery,
} = UserApi;

// worker saga: makes the api call
// when watcher saga sees the action
export default function* getUserFriends() {
  try {
    const response = yield call(userFriendsQuery);

    // parse the response
    const friends = response.data;

    // check if we have success or fail
    if (friends
        && friends.length) {
      // dispatch a success action to the store
      yield put({
        type: USER_FRIENDS_REQUEST_SUCCESS,
        friends,
      });
    } else {
      yield put({
        type: USER_FRIENDS_REQUEST_FAIL,
        error: 'Echec de récupération de la liste des amis, veuillez réessayez plus tard.',
      });
    }
  } catch (error) {
    yield put({
      type: USER_FRIENDS_REQUEST_FAIL,
      error: 'Une erreur technique c\'est produite, veuillez réessayez plus tard.',
    });
  }
}
