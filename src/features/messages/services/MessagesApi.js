import axios from 'axios';
import MessagesServicesConstants from './MessagesServicesConstants';
import {
  SessionUtils,
} from '../../../core';

const {
  GET_MESSAGES_PUBLIC_SERVICE_PATH,
  GET_MESSAGES_PRIVATE_SERVICE_PATH,
  GET_FRIENDS_SERVICE_PATH,
  MESSAGE_ADD_SERVICE_PATH,
  MESSAGE_DELETE_SERVICE_PATH,
} = MessagesServicesConstants;

const messagesQuery = (params) => {
  const {
    type,
  } = params || {};
  const headers = {
    Authorization: SessionUtils.loadToken(),
  };

  return axios({
    method: 'get',
    url: type === 'private'
      ? GET_MESSAGES_PRIVATE_SERVICE_PATH
      : GET_MESSAGES_PUBLIC_SERVICE_PATH,
    headers,
  });
};

const friendsQuery = () => {
  const headers = {
    Authorization: SessionUtils.loadToken(),
  };

  return axios({
    method: 'get',
    url: GET_FRIENDS_SERVICE_PATH,
    headers,
  });
};

const addMessageQuery = (params) => {
  const headers = {
    Authorization: SessionUtils.loadToken(),
  };

  return axios({
    method: 'post',
    url: MESSAGE_ADD_SERVICE_PATH,
    headers,
    data: params,
  });
};

const deleteMessageQuery = (params) => {
  const headers = {
    Authorization: SessionUtils.loadToken(),
  };

  return axios({
    method: 'post',
    url: MESSAGE_DELETE_SERVICE_PATH,
    headers,
    data: params,
  });
};

const MessagesApi = {
  messagesQuery,
  addMessageQuery,
  deleteMessageQuery,
  friendsQuery,
};

export default MessagesApi;
