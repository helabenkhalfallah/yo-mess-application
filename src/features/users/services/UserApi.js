import axios from 'axios';
import {
  SessionUtils,
} from '../../../core';
import UserServicesConstants from './UserServicesConstants';

const {
  USER_LOGIN_SERVICE_PATH,
  USER_LOGOUT_SERVICE_PATH,
  USER_FRIENDS_SERVICE_PATH,
  USER_PROFILE_SERVICE_PATH,
} = UserServicesConstants;

const userLoginQuery = (params) => {
  const {
    userEmail,
    userPassword,
  } = params || {};
  let url = USER_LOGIN_SERVICE_PATH;
  url += `?user_email=${userEmail}`;
  url += `&user_password=${userPassword}`;

  const headers = {
    Authorization: SessionUtils.loadToken(),
  };

  return axios({
    method: 'get',
    url,
    headers,
  });
};

const userProfileQuery = () => {
  const headers = {
    Authorization: SessionUtils.loadToken(),
  };

  return axios({
    method: 'get',
    url: USER_PROFILE_SERVICE_PATH,
    headers,
  });
};

const userLogOutQuery = () => {
  const headers = {
    Authorization: SessionUtils.loadToken(),
  };

  return axios({
    method: 'get',
    url: USER_LOGOUT_SERVICE_PATH,
    headers,
  });
};

const userFriendsQuery = () => {
  const headers = {
    Authorization: SessionUtils.loadToken(),
  };

  return axios({
    method: 'get',
    url: USER_FRIENDS_SERVICE_PATH,
    headers,
  });
};

const UserApi = {
  userLoginQuery,
  userLogOutQuery,
  userFriendsQuery,
  userProfileQuery,
};

export default UserApi;
