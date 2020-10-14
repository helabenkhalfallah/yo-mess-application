import { expectSaga, } from 'redux-saga-test-plan';
import { throwError, } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';
import MessagesReducer from '../redux/MessagesReducer';
import MessageAddService from './MessageAddService';
import MessagesApi from './MessagesApi';
import MessagesDataMock from '../commons/MessagesDataMock';

const {
  messageAddFakeAction,
} = MessagesDataMock;

const {
  addMessageQuery,
} = MessagesApi;

describe('Test Suite - Add A Message Service', () => {
  it('Add A Message Service (success)', () => {
    const data = {
      status: 'OK',
    };
    expectSaga(MessageAddService, messageAddFakeAction)
      .withReducer(MessagesReducer)
      .provide([
        matchers.call.fn(addMessageQuery), data,
      ])
      .put({
        type: 'MESSAGE_ADD_REQUEST_SUCCESS',
        messageAdd: data.status,
      })
      .hasFinalState({
        loading: false,
        messageAdd: data.status,
        error: null,
      })
      .run();
  });
  it('Add A Message Service (fail)', () => {
    const data = {};
    const error = 'Echec lors de l\'ajout du message, veuillez réessayez plus tard.';
    expectSaga(MessageAddService, messageAddFakeAction)
      .withReducer(MessagesReducer)
      .provide([
        matchers.call.fn(addMessageQuery), data,
      ])
      .put({
        type: 'MESSAGE_ADD_REQUEST_FAIL',
        error,
      })
      .hasFinalState({
        loading: false,
        messageAdd: null,
        error,
      })
      .run();
  });
  it('Add A Message Service (exception)', () => {
    const error = 'Une erreur technique c\'est produite, veuillez réessayez plus tard.';
    const exception = new Error(error);
    expectSaga(MessageAddService, messageAddFakeAction)
      .withReducer(MessagesReducer)
      .provide([
        matchers.call.fn(addMessageQuery), throwError(exception),
      ])
      .put({
        type: 'MESSAGE_ADD_REQUEST_FAIL',
        error,
      })
      .hasFinalState({
        loading: false,
        messageAdd: null,
        error,
      })
      .run();
  });
});
