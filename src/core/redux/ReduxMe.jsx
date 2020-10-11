import { connect, } from 'react-redux';
import { bindActionCreators, } from 'redux';

// decorator to handle Redux connect staff
const ReduxMe = (matchPropsToState, actions, ...args) => {
  const provideDispatch = (dispatch) => bindActionCreators(actions, dispatch);
  const matchDispatchToProps = !actions ? actions : provideDispatch;
  return connect(matchPropsToState, matchDispatchToProps, ...args);
};

export default ReduxMe;
