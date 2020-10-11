import { takeEvery, } from 'redux-saga/effects';
import {
  UserActionTypes,
} from '../redux';
import UserLoginService from './UserLoginService';
import UserUpdateService from './UserUpdateService';
import UserLogoutService from './UserLogoutService';

const {
  USER_LOGIN_REQUEST,
  USER_UPDATE_REQUEST,
  USER_LOGOUT_REQUEST,
} = UserActionTypes;

const UserServicesRoot = [
  takeEvery(USER_LOGIN_REQUEST, UserLoginService),
  takeEvery(USER_UPDATE_REQUEST, UserUpdateService),
  takeEvery(USER_LOGOUT_REQUEST, UserLogoutService),
];

export default UserServicesRoot;
