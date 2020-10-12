import { call, put, } from 'redux-saga/effects';
import {
  MessagesActionTypes,
} from '../redux';
import MessagesApi from './MessagesApi';

const {
  MESSAGES_REQUEST_SUCCESS,
  MESSAGES_REQUEST_FAIL,
} = MessagesActionTypes;

const {
  messagesQuery,
} = MessagesApi;

// worker saga: makes the api call
// when watcher saga sees the action
export default function* getMessages(action) {
  try {
    const response = yield call(messagesQuery, action.payload);

    // parse the response
    const messages = response.data;

    // check if we have success or fail
    if (messages
        && messages.length) {
      // dispatch a success action to the store
      yield put({
        type: MESSAGES_REQUEST_SUCCESS,
        messages,
      });
    } else {
      yield put({
        type: MESSAGES_REQUEST_FAIL,
        error: 'Echec lors de la récupération des messages, veuillez réessayez plus tard.',
      });
    }
  } catch (error) {
    yield put({
      type: MESSAGES_REQUEST_FAIL,
      error: 'Une erreur technique c\'est produite, veuillez réessayez plus tard.',
    });
  }
}
