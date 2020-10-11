import React, { Component, } from 'react';
import {
  ReduxMe,
  Matcher,
} from '../../../core';
import Path from '../../../routes/Path';
/* import {
  UserDispatcher,
  UserProvider,
} from '../redux'; */
import {
  AppLayout,
} from '../../commons';

/* const {
  UserFragment,
  UserLoginFragment,
} = UserProvider; */

@ReduxMe((state) => ({
  // ...UserFragment(state),
  // ...UserLoginFragment(state),
}), {
  // ...UserDispatcher,
})
class MessagesDashboard extends Component {
  componentDidMount() {
    this.initPage();
  }

  initPage = () => {}

  onMenuSelected = (menu) => {
    Matcher()
      .on(() => menu && menu === 'home', () => this.showPublicMessages())
      .on(() => menu && menu === 'messages', () => this.showPrivateMessages())
      .on(() => menu && menu === 'logout', () => this.onLogOut())
      .otherwise(() => {});
  }

  showPublicMessages = () => {
    console.log('showPublicMessages');
  }

  showPrivateMessages = () => {
    console.log('showPrivateMessages');
  }

  onLogOut = () => {
    console.log('onLogOut');
  }

  render() {
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

};

MessagesDashboard.defaultProps = {

};

export default MessagesDashboard;
