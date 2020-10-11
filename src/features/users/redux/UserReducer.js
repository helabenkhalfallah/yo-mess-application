import {
  Matcher,
} from '../../../core';
import UserActionTypes from './UserActionTypes';

const {
  USER_LOGIN_REQUEST,
  USER_LOGIN_REQUEST_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_REQUEST_FAIL,
  USER_SAVE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_REQUEST_SUCCESS,
  USER_LOGOUT_REQUEST_FAIL,
} = UserActionTypes;

const initialState = {
  user: null,
  loginLoading: false,
  loginError: null,
  updateLoading: false,
  updateError: null,
  logOutStatus: null,
  logOutLoading: false,
  logOutError: null,
};

const UserReducer = (state = initialState, action) => Matcher()
  .on(() => action.type === USER_LOGIN_REQUEST, () => ({
    ...state,
    user: null,
    loginLoading: true,
    loginError: null,
  }))
  .on(() => action.type === USER_LOGIN_REQUEST_FAIL, () => ({
    ...state,
    user: null,
    loginLoading: false,
    loginError: action.error,
  }))
  .on(() => action.type === USER_UPDATE_REQUEST, () => ({
    ...state,
    updateLoading: true,
    updateError: null,
  }))
  .on(() => action.type === USER_UPDATE_REQUEST_FAIL, () => ({
    ...state,
    updateLoading: false,
    updateError: action.error,
  }))
  .on(() => action.type === USER_LOGOUT_REQUEST, () => ({
    ...state,
    logOutStatus: null,
    logOutLoading: true,
    logOutError: null,
  }))
  .on(() => action.type === USER_LOGOUT_REQUEST_SUCCESS, () => ({
    ...state,
    user: null,
    logOutStatus: action.status,
    logOutLoading: false,
    logOutError: null,
  }))
  .on(() => action.type === USER_LOGOUT_REQUEST_FAIL, () => ({
    ...state,
    logOutStatus: null,
    logOutLoading: false,
    logOutError: action.error,
  }))
  .on(() => action.type === USER_SAVE, () => ({
    ...state,
    user: action.user,
    loginLoading: false,
    loginError: null,
    updateLoading: false,
    updateError: null,
  }))
  .otherwise(() => state);

export default UserReducer;
