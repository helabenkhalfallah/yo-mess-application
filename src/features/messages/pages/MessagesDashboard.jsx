import React, { Component, } from 'react';
import {
  Redirect,
} from 'react-router-dom';
import {
  ReduxMe,
  Matcher,
} from '../../../core';
import Path from '../../../routes/Path';
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
class MessagesDashboard extends Component {
  componentDidMount() {
    this.initPage();
  }

  initPage = () => {
    const {
      requestUserFriends,
    } = this.props;
      // default request public messages
    this.showPublicMessages();

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
    const {
      requestMessages,
    } = this.props;
    requestMessages({
      type: 'public',
    });
  }

  showPrivateMessages = () => {
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

  render() {
    const {
      messages,
      messagesLoading,
      messagesError,
      userFriends,
      userFriendsLoading,
      userFriendsError,
    } = this.props;
    return (
      <div>
        <AppLayout
          selectedMenu="home"
          onMenuSelected={this.onMenuSelected}
          content={(
            <div>Coucou</div>
          )}
        />
      </div>
    );
  }
}

MessagesDashboard.propTypes = {
  ...MessagesPropTypes.propTypes,
};

MessagesDashboard.defaultProps = {
  ...MessagesPropTypes.defaultProps,
};

export default MessagesDashboard;
