import loadable from '@loadable/component';

// full dynamic import page
const UserLoginPage = loadable((props) => import(`../features/users/pages/${props.page}`));
const MessagesDashboard = loadable((props) => import(`../features/messages/pages/${props.page}`));

const LazyRoute = {
  UserLoginPage,
  MessagesDashboard,
};

export default LazyRoute;
