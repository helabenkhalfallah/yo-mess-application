import axios from 'axios';
import {
  SessionUtils,
} from '../../../core';
import UserServicesConstants from './UserServicesConstants';

const {
  USER_LOGIN_SERVICE_PATH,
  USER_UPDATE_SERVICE_PATH,
  USER_LOGOUT_SERVICE_PATH,
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

const userUpdateQuery = (params) => {
  const headers = {
    Authorization: SessionUtils.loadToken(),
  };

  return axios({
    method: 'post',
    url: USER_UPDATE_SERVICE_PATH,
    headers,
    data: params,
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

const UserApi = {
  userLoginQuery,
  userUpdateQuery,
  userLogOutQuery,
};

export default UserApi;
