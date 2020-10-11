import PropTypes from 'prop-types';

const propTypes = {
  history: PropTypes.object.isRequired,
  user: PropTypes.shape({
    userToken: PropTypes.string,
    userFirstName: PropTypes.string,
    userLastName: PropTypes.string,
    userAddresse: PropTypes.string,
    userPhone: PropTypes.string,
  }),
  userLoginLoading: PropTypes.bool,
  userLoginError: PropTypes.string,
  requestLoginUser: PropTypes.func,
};

const defaultProps = {
  user: null,
  userLoginLoading: false,
  userLoginError: null,
  requestLoginUser: null,
};

const UserPropTypes = {
  propTypes,
  defaultProps,
};

export default UserPropTypes;