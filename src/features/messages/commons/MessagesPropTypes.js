import PropTypes from 'prop-types';
import UserPropTypes from '../../users/commons/UserPropTypes';

const propTypes = {
  ...UserPropTypes.propTypes,
  requestMessages: PropTypes.func,
};

const defaultProps = {
  ...UserPropTypes.defaultProps,
  requestMessages: null,
};

const MessagesPropTypes = {
  propTypes,
  defaultProps,
};

export default MessagesPropTypes;
