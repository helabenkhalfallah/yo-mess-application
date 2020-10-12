import { call, put, } from 'redux-saga/effects';
import {
  MessagesActionTypes,
} from '../redux';
import MessagesApi from './MessagesApi';

const {
  MESSAGE_DELETE_REQUEST_FAIL,
  MESSAGE_DELETE_REQUEST_SUCCESS,
} = MessagesActionTypes;

const {
  deleteMessageQuery,
} = MessagesApi;

// worker saga: makes the api call
// when watcher saga sees the action
export default function* deleteMessage(action) {
  try {
    const response = yield call(deleteMessageQuery, action.payload);

    // parse the response
    const deleteMessageStatus = response.data;

    // check if we have success or fail
    if (deleteMessageStatus
         && deleteMessageStatus.status
          && deleteMessageStatus.status === 'OK') {
      // dispatch a success action to the store
      yield put({
        type: MESSAGE_DELETE_REQUEST_SUCCESS,
        messageDelete: deleteMessageStatus.status,
      });
    } else {
      yield put({
        type: MESSAGE_DELETE_REQUEST_FAIL,
        error: 'Echec lors de la suppression du message, veuillez réessayez plus tard.',
      });
    }
  } catch (error) {
    yield put({
      type: MESSAGE_DELETE_REQUEST_FAIL,
      error: 'Une erreur technique c\'est produite, veuillez réessayez plus tard.',
    });
  }
}
