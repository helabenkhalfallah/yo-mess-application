import {
  Matcher,
} from '../../../core';
import MessagesActionTypes from './MessagesActionTypes';

const {
  MESSAGE_ADD_REQUEST,
  MESSAGE_ADD_REQUEST_SUCCESS,
  MESSAGE_ADD_REQUEST_FAIL,
} = MessagesActionTypes;

const initialState = {
  loading: false,
  messageAdd: null,
  error: null,
};

const MessageAddReducer = (state = initialState, action) => Matcher()
  .on(() => action.type === MESSAGE_ADD_REQUEST, () => ({
    ...state,
    loading: true,
    messageAdd: null,
    error: null,
  }))
  .on(() => action.type === MESSAGE_ADD_REQUEST_SUCCESS, () => ({
    ...state,
    loading: false,
    messageAdd: action.messageAdd,
    error: null,
  }))
  .on(() => action.type === MESSAGE_ADD_REQUEST_FAIL, () => ({
    ...state,
    loading: false,
    messageAdd: null,
    error: action.error,
  }))
  .otherwise(() => state);

export default MessageAddReducer;
