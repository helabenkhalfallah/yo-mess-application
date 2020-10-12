import UserActionTypes from './UserActionTypes';

const {
  USER_LOGIN_REQUEST,
  USER_LOGOUT_REQUEST,
  USER_FRIENDS_REQUEST,
  USER_PROFILE_REQUEST,
} = UserActionTypes;

const UserDispatcher = {
  requestLoginUser: (data) => ({
    type: USER_LOGIN_REQUEST,
    payload: data,
  }),
  requestUserProfile: () => ({
    type: USER_PROFILE_REQUEST,
  }),
  requestLogOutUser: () => ({
    type: USER_LOGOUT_REQUEST,
  }),
  requestUserFriends: () => ({
    type: USER_FRIENDS_REQUEST,
  }),
};

export default UserDispatcher;
