import UserActionTypes from './UserActionTypes';

const {
  USER_LOGIN_REQUEST,
  USER_UPDATE_REQUEST,
} = UserActionTypes;

const UserDispatcher = {
  requestLoginUser: (data) => ({
    type: USER_LOGIN_REQUEST,
    payload: data,
  }),
  requestUpdateUser: (data) => ({
    type: USER_UPDATE_REQUEST,
    payload: data,
  }),
};

export default UserDispatcher;
