import { connect, } from 'react-redux';
import { bindActionCreators, } from 'redux';

/**
 * Decorator to handle Redux connect
 * @param {*} matchPropsToState
 * @param {*} actions
 * @param  {...any} args
 */
const ReduxMe = (matchPropsToState, actions, ...args) => {
  const provideDispatch = (dispatch) => bindActionCreators(actions, dispatch);
  const matchDispatchToProps = !actions ? actions : provideDispatch;
  return connect(matchPropsToState, matchDispatchToProps, ...args);
};

export default ReduxMe;
