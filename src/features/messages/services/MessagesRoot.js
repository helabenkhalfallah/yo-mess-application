import { takeEvery, } from 'redux-saga/effects';
import {
  MessagesActionTypes,
} from '../redux';
import MessageAddService from './MessageAddService';
import MessageDeleteService from './MessageDeleteService';
import MessagesService from './MessagesService';

const {
  MESSAGE_ADD_REQUEST,
  MESSAGE_DELETE_REQUEST,
  MESSAGES_REQUEST,
} = MessagesActionTypes;

const MessagesRoot = [
  takeEvery(MESSAGE_ADD_REQUEST, MessageAddService),
  takeEvery(MESSAGE_DELETE_REQUEST, MessageDeleteService),
  takeEvery(MESSAGES_REQUEST, MessagesService),
];

export default MessagesRoot;
