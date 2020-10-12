import {
  Matcher,
} from '../../../core';
import MessagesActionTypes from './MessagesActionTypes';

const {
  MESSAGE_DELETE_REQUEST,
  MESSAGE_DELETE_REQUEST_SUCCESS,
  MESSAGE_DELETE_REQUEST_FAIL,
} = MessagesActionTypes;

const initialState = {
  loading: false,
  messageDelete: null,
  error: null,
};

const MessageDeleteReducer = (state = initialState, action) => Matcher()
  .on(() => action.type === MESSAGE_DELETE_REQUEST, () => ({
    ...state,
    loading: true,
    messageDelete: null,
    error: null,
  }))
  .on(() => action.type === MESSAGE_DELETE_REQUEST_SUCCESS, () => ({
    ...state,
    loading: false,
    messageDelete: action.messageDelete,
    error: null,
  }))
  .on(() => action.type === MESSAGE_DELETE_REQUEST_FAIL, () => ({
    ...state,
    loading: false,
    messageDelete: null,
    error: action.error,
  }))
  .otherwise(() => state);

export default MessageDeleteReducer;
