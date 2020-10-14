import React from 'react';
import { Provider, } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow, } from 'enzyme';
import MessagesDataMock from '../commons/MessagesDataMock';
import MessagesDashboardPage from './MessagesDashboardPage';

const {
  messagesFakeResponse,
} = MessagesDataMock;

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Test Suite - MessagesDashboardPage', () => {
  const initialState = {};
  it('Should render loading state', () => {
    const loadingMessages = {
      messages: {
        messages: null,
        loading: true,
        error: null,
      },
    };
    const store = mockStore({
      ...initialState,
      ...loadingMessages,
    });
    const wrapper = shallow(
      <Provider store={store}>
        <MessagesDashboardPage
          messagesLoading
          user={null}
          messages={null}
          messagesError={null}
          userFriends={null}
        />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('Should render messages', () => {
    const messagesState = {
      messages: {
        messages: messagesFakeResponse,
        loading: false,
        error: null,
      },
    };
    const store = mockStore({
      ...initialState,
      ...messagesState,
    });
    const wrapper = shallow(
      <Provider store={store}>
        <MessagesDashboardPage
          messagesLoading={false}
          user={null}
          messages={messagesFakeResponse}
          messagesError={null}
          userFriends={null}
        />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('Should render error', () => {
    const error = 'Une erreur technique c\'est produite, veuillez réessayez plus tard.';
    const messagesErrorState = {
      messages: {
        messages: null,
        loading: false,
        error,
      },
    };
    const store = mockStore({
      ...initialState,
      ...messagesErrorState,
    });
    const wrapper = shallow(
      <Provider store={store}>
        <MessagesDashboardPage
          messagesLoading={false}
          user={null}
          messages={null}
          messagesError={error}
          userFriends={null}
        />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
