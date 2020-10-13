import { expectSaga, } from 'redux-saga-test-plan';
import { throwError, } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';
import MessagesReducer from '../redux/MessagesReducer';
import MessagesService from './MessagesService';
import MessagesApi from './MessagesApi';

const {
  messagesQuery,
} = MessagesApi;

const fakeAction = {
  payload: {
    type: 'public',
  },
};

const fakeSuccessResponse = {
  data: [
    {
      idMessage: '87654321',
      messageType: 'public',
      messageDate: '08/10/2020',
      messageText: '23 ème édition du rallye Coeur de France, youpi !',
      messageSender: {
        userMail: 'seancarr@hotmail.fr',
        userFirstName: 'Sean',
        userLastName: 'Carr',
      },
      messageReceiver: null,
    }, {
      idMessage: '987654321',
      messageType: 'public',
      messageDate: '08/10/2020',
      messageText: 'Des vélos électriques proposés en location longue durée !',
      messageSender: {
        userMail: 'isabellehoward@hotmail.fr',
        userFirstName: 'Isabelle',
        userLastName: 'Howard',
      },
      messageReceiver: null,
    },
  ],
};

describe('Test Suite - Get Messages Service', () => {
  it('Get Messages Service (success', () => {
    const { data, } = fakeSuccessResponse;
    expectSaga(MessagesService, fakeAction)
      .withReducer(MessagesReducer)
      .provide([
        matchers.call.fn(messagesQuery), fakeSuccessResponse,
      ])
      .put({
        type: 'MESSAGES_REQUEST_SUCCESS',
        messages: data,
      })
      .hasFinalState({
        loading: false,
        messages: data,
        error: null,
      })
      .run();
  });
  it('Get Messages Service (fail)', () => {
    const data = {};
    const error = 'Echec lors de la récupération des messages, veuillez réessayez plus tard.';
    expectSaga(MessagesService, fakeAction)
      .withReducer(MessagesReducer)
      .provide([
        matchers.call.fn(messagesQuery), data,
      ])
      .put({
        type: 'MESSAGES_REQUEST_FAIL',
        error,
      })
      .hasFinalState({
        loading: false,
        messages: null,
        error,
      })
      .run();
  });
  it('Get Messages Service (exception)', () => {
    const error = 'Une erreur technique c\'est produite, veuillez réessayez plus tard.';
    const exception = new Error(error);
    expectSaga(MessagesService, fakeAction)
      .withReducer(MessagesReducer)
      .provide([
        matchers.call.fn(messagesQuery), throwError(exception),
      ])
      .put({
        type: 'MESSAGES_REQUEST_FAIL',
        error,
      })
      .hasFinalState({
        loading: false,
        messages: null,
        error,
      })
      .run();
  });
});
