import React, { Component, } from 'react';
import loadable from '@loadable/component';
import {
  Spin,
  Result,
} from 'antd';
import {
  ReduxMe,
  Matcher,
} from '../../../core';
import {
  AppLayout,
  withAuthentication,
} from '../../commons';
import {
  UserProvider,
  UserDispatcher,
} from '../../users/redux';
import {
  MessagesProvider,
  MessagesDispatcher,
} from '../redux';
import MessagesPropTypes from '../commons/MessagesPropTypes';

// dynamic load tabs content (load at need)
const MessagesList = loadable((props) => import(`../components/${props.path}`), {
  fallback: <Spin spinning />,
  cacheKey: (props) => props.path,
});

const MessageAddView = loadable((props) => import(`../components/${props.path}`), {
  fallback: <Spin spinning />,
  cacheKey: (props) => props.path,
});

const {
  UserFragment,
  UserLogoutFragment,
  UserFriendsFragment,
} = UserProvider;

const {
  MessagesFragment,
  MessageAddFragment,
  MessageDeleteFragment,
} = MessagesProvider;

@ReduxMe((state) => ({
  ...UserFragment(state),
  ...UserLogoutFragment(state),
  ...UserFriendsFragment(state),
  ...MessagesFragment(state),
  ...MessageAddFragment(state),
  ...MessageDeleteFragment(state),
}), {
  ...UserDispatcher,
  ...MessagesDispatcher,
})
@withAuthentication
class MessagesDashboardPage extends Component {
  currentType = 'public';

  constructor(props) {
    super(props);
    this.state = {
      showAddMessage: false,
    };
  }

  componentDidMount() {
    this.initPage();
  }

  initPage = () => {
    const {
      requestUserProfile,
      requestUserFriends,
    } = this.props;
      // default request public messages
    this.showPublicMessages();

    // request user profile if page is reloaded
    // and user still connected
    requestUserProfile();

    // prepare friends list before use
    requestUserFriends();
  }

  onMenuSelected = (menu) => {
    Matcher()
      .on(() => menu && menu === 'home', () => this.showPublicMessages())
      .on(() => menu && menu === 'messages', () => this.showPrivateMessages())
      .on(() => menu && menu === 'logout', () => this.onLogOut())
      .otherwise(() => {});
  }

  showPublicMessages = () => {
    this.currentType = 'public';
    const {
      requestMessages,
    } = this.props;
    requestMessages({
      type: 'public',
    });
  }

  showPrivateMessages = () => {
    this.currentType = 'private';
    const {
      requestMessages,
    } = this.props;
    requestMessages({
      type: 'private',
    });
  }

  onLogOut = () => {
    const {
      requestLogOutUser,
    } = this.props;
    requestLogOutUser();
  }

  openNewMessage = () => {
    this.setState({
      showAddMessage: true,
    });
  };

  hideNewMessage = () => {
    this.setState({
      showAddMessage: false,
    });
  };

  onSendMessage = (message) => {
    // eslint-disable-next-line no-console
    console.log('onSendMessage message : ', message);
    this.hideNewMessage();
    const {
      requestAddMessage,
    } = this.props;
    requestAddMessage(message);
  };

  render() {
    const {
      user,
      messages,
      messagesLoading,
      messagesError,
      userFriends,
    } = this.props;
    const {
      showAddMessage,
    } = this.state;
    return (
      <AppLayout
        selectedMenu="home"
        onNewMessage={this.openNewMessage}
        onMenuSelected={this.onMenuSelected}
        content={(
          <Spin
            spinning={messagesLoading}
            size="large"
          >
            {messagesError ? (
              <Result
                status="error"
                title="YoMess !"
                subTitle={messagesError}
              />
            ) : (
              <div className="user_form_login--page">
                <MessagesList
                  path="MessagesList"
                  messages={messages}
                />
                {showAddMessage && (
                  <MessageAddView
                    path="MessageAddView"
                    type={this.currentType}
                    showAddMessage={showAddMessage}
                    currentUser={user}
                    userFriends={userFriends}
                    onSendMessage={this.onSendMessage}
                    onCancel={this.hideNewMessage}
                  />
                )}
              </div>
            )}
          </Spin>
        )}
      />
    );
  }
}

MessagesDashboardPage.propTypes = {
  ...MessagesPropTypes.propTypes,
};

MessagesDashboardPage.defaultProps = {
  ...MessagesPropTypes.defaultProps,
};

export default MessagesDashboardPage;
