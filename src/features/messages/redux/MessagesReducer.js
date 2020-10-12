import {
  Matcher,
} from '../../../core';
import MessagesActionTypes from './MessagesActionTypes';

const {
  MESSAGES_REQUEST,
  MESSAGES_REQUEST_SUCCESS,
  MESSAGES_REQUEST_FAIL,
} = MessagesActionTypes;

const initialState = {
  loading: false,
  messages: null,
  error: null,
};

const MessagesReducer = (state = initialState, action) => Matcher()
  .on(() => action.type === MESSAGES_REQUEST, () => ({
    ...state,
    loading: true,
    messages: null,
    error: null,
  }))
  .on(() => action.type === MESSAGES_REQUEST_SUCCESS, () => ({
    ...state,
    loading: false,
    messages: action.messages,
    error: null,
  }))
  .on(() => action.type === MESSAGES_REQUEST_FAIL, () => ({
    ...state,
    loading: false,
    messages: null,
    error: action.error,
  }))
  .otherwise(() => state);

export default MessagesReducer;
