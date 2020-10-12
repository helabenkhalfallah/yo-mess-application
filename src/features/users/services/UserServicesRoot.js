import { takeEvery, } from 'redux-saga/effects';
import {
  UserActionTypes,
} from '../redux';
import UserLoginService from './UserLoginService';
import UserLogoutService from './UserLogoutService';
import UserFriendsService from './UserFriendsService';

const {
  USER_LOGIN_REQUEST,
  USER_LOGOUT_REQUEST,
  USER_FRIENDS_REQUEST,
} = UserActionTypes;

const UserServicesRoot = [
  takeEvery(USER_LOGIN_REQUEST, UserLoginService),
  takeEvery(USER_LOGOUT_REQUEST, UserLogoutService),
  takeEvery(USER_FRIENDS_REQUEST, UserFriendsService),
];

export default UserServicesRoot;
