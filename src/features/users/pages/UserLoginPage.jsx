import React, { Component, } from 'react';
import Spin from 'antd/es/spin';
import Message from 'antd/es/message';
import {
  ReduxMe,
} from '../../../core';
import Path from '../../../routes/Path';
import {
  UserDispatcher,
  UserProvider,
} from '../redux';
import {
  UserLoginForm,
} from '../components';
import UserPropTypes from '../commons/UserPropTypes';

const {
  UserFragment,
  UserLoginFragment,
} = UserProvider;

@ReduxMe((state) => ({
  ...UserFragment(state),
  ...UserLoginFragment(state),
}), {
  ...UserDispatcher,
})
class UserLoginPage extends Component {
  componentDidMount() {
    this.initPage();
  }

  componentDidUpdate(prevProps) {
    this.handleLoginStatus(prevProps);
  }

  handleLoginStatus = (prevProps) => {
    const {
      user,
      userLoginError,
      history,
    } = this.props;
    if (user?.userToken
      && user?.userToken.length
      && user?.userToken !== prevProps.userToken) {
      history.push(Path.MESSAGES_DASHBOARD_PATH);
    }
    if (userLoginError
      && userLoginError.length
      && userLoginError !== prevProps.userLoginError) {
      Message.error(userLoginError);
    }
  }

  initPage = () => {}

  onLogin = (email, password) => {
    const {
      requestLoginUser,
    } = this.props;
    requestLoginUser({
      userEmail: email,
      userPassword: password,
    });
  }

  onRegister = () => {}

  onPasswordForget = () => {}

  render() {
    const {
      userLoginLoading,
    } = this.props;
    return (
      <Spin
        spinning={userLoginLoading}
        size="large"
      >
        <UserLoginForm
          onLogin={this.onLogin}
          onRegister={this.onRegister}
          onPasswordForget={this.onPasswordForget}
        />
      </Spin>
    );
  }
}

UserLoginPage.propTypes = {
  ...UserPropTypes.propTypes,
};

UserLoginPage.defaultProps = {
  ...UserPropTypes.defaultProps,
};

export default UserLoginPage;
