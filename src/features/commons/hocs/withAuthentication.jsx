import React from 'react';
import PropTypes from 'prop-types';
import {
  SessionUtils,
} from '../../../core';
import Path from '../../../routes/Path';

/**
 * HOC to handle if user is
 * connected or not before displaying content
 * @param {} WrappedComponent
 */
const withAuthentication = (WrappedComponent) => {
  class AuthenticationComponent extends React.Component {
    componentDidMount() {
      if (!SessionUtils.loadToken()) {
        // we need window to force all site refresh and cache remove
        window.location = Path.USER_LOGIN_PATH;
      }
    }

    render() {
      const {
        userLogoutStatus,
      } = this.props;
      const canRedirect = userLogoutStatus && userLogoutStatus === 'OK';
      if (canRedirect) {
        // we need window to force all site refresh and cache remove
        window.location = Path.USER_LOGIN_PATH;
      }

      // else display content
      return <WrappedComponent {...this.props} />;
    }
  }

  AuthenticationComponent.propTypes = {
    userLogoutStatus: PropTypes.func,
  };

  AuthenticationComponent.defaultProps = {
    userLogoutStatus: null,
  };

  return AuthenticationComponent;
};

export default withAuthentication;
