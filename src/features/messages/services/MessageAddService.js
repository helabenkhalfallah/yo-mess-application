import { call, put, } from 'redux-saga/effects';
import {
  MessagesActionTypes,
} from '../redux';
import MessagesApi from './MessagesApi';

const {
  MESSAGE_ADD_REQUEST_SUCCESS,
  MESSAGE_ADD_REQUEST_FAIL,
} = MessagesActionTypes;

const {
  addMessageQuery,
} = MessagesApi;

// worker saga: makes the api call
// when watcher saga sees the action
export default function* addMessage(action) {
  try {
    const response = yield call(addMessageQuery, action.payload);

    // parse the response
    const addMessageStatus = response.data;

    // check if we have success or fail
    if (addMessageStatus
        && addMessageStatus.status
         && addMessageStatus.status === 'OK') {
      // dispatch a success action to the store
      yield put({
        type: MESSAGE_ADD_REQUEST_SUCCESS,
        messageAdd: addMessageStatus.status,
      });
    } else {
      yield put({
        type: MESSAGE_ADD_REQUEST_FAIL,
        error: 'Echec lors de l\'ajout du message, veuillez réessayez plus tard.',
      });
    }
  } catch (error) {
    yield put({
      type: MESSAGE_ADD_REQUEST_FAIL,
      error: 'Une erreur technique c\'est produite, veuillez réessayez plus tard.',
    });
  }
}
