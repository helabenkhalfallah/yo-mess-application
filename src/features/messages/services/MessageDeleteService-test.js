import { expectSaga, } from 'redux-saga-test-plan';
import { throwError, } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';
import MessageDeleteReducer from '../redux/MessageDeleteReducer';
import MessageDeleteService from './MessageDeleteService';
import MessagesApi from './MessagesApi';
import MessagesDataMock from '../commons/MessagesDataMock';

const {
  messageDeleteFakeAction,
} = MessagesDataMock;

const {
  deleteMessageQuery,
} = MessagesApi;

describe('Test Suite - Delete A Message Service', () => {
  it('Delete A Message Service (success', () => {
    const data = {
      status: 'OK',
    };
    expectSaga(MessageDeleteService, messageDeleteFakeAction)
      .withReducer(MessageDeleteReducer)
      .provide([
        matchers.call.fn(deleteMessageQuery), data,
      ])
      .put({
        type: 'MESSAGE_DELETE_REQUEST_SUCCESS',
        messageDelete: data.status,
      })
      .hasFinalState({
        loading: false,
        messageDelete: data.status,
        error: null,
      })
      .run();
  });
  it('Delete A Message Service (fail)', () => {
    const data = {};
    const error = 'Echec lors de la suppression du message, veuillez réessayez plus tard.';
    expectSaga(MessageDeleteService, messageDeleteFakeAction)
      .withReducer(MessageDeleteReducer)
      .provide([
        matchers.call.fn(deleteMessageQuery), data,
      ])
      .put({
        type: 'MESSAGE_DELETE_REQUEST_FAIL',
        error,
      })
      .hasFinalState({
        loading: false,
        messageDelete: null,
        error,
      })
      .run();
  });
  it('Delete A Message Service (exception)', () => {
    const error = 'Une erreur technique c\'est produite, veuillez réessayez plus tard.';
    const exception = new Error(error);
    expectSaga(MessageDeleteService, messageDeleteFakeAction)
      .withReducer(MessageDeleteReducer)
      .provide([
        matchers.call.fn(deleteMessageQuery), throwError(exception),
      ])
      .put({
        type: 'MESSAGE_DELETE_REQUEST_FAIL',
        error,
      })
      .hasFinalState({
        loading: false,
        messageDelete: null,
        error,
      })
      .run();
  });
});
