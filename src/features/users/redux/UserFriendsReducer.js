import {
  Matcher,
} from '../../../core';
import UserActionTypes from './UserActionTypes';

const {
  USER_FRIENDS_REQUEST,
  USER_FRIENDS_REQUEST_SUCCESS,
  USER_FRIENDS_REQUEST_FAIL,
} = UserActionTypes;

const initialState = {
  loading: false,
  friends: null,
  error: null,
};

const UserFriendsReducer = (state = initialState, action) => Matcher()
  .on(() => action.type === USER_FRIENDS_REQUEST, () => ({
    ...state,
    loading: true,
    friends: null,
    error: null,
  }))
  .on(() => action.type === USER_FRIENDS_REQUEST_SUCCESS, () => ({
    ...state,
    loading: false,
    friends: action.friends,
    error: null,
  }))
  .on(() => action.type === USER_FRIENDS_REQUEST_FAIL, () => ({
    ...state,
    loading: false,
    friends: null,
    error: action.error,
  }))
  .otherwise(() => state);

export default UserFriendsReducer;
