import MessagesActionTypes from './MessagesActionTypes';

const {
  MESSAGES_REQUEST,
  MESSAGE_ADD_REQUEST,
  MESSAGE_DELETE_REQUEST,
} = MessagesActionTypes;

const MessagesDispatcher = {
  requestMessages: (data) => ({
    type: MESSAGES_REQUEST,
    payload: data,
  }),
  requestAddMessage: (data) => ({
    type: MESSAGE_ADD_REQUEST,
    payload: data,
  }),
  requestDeleteMessage: (data) => ({
    type: MESSAGE_DELETE_REQUEST,
    payload: data,
  }),
};

export default MessagesDispatcher;
