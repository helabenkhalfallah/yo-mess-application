import loadable from '@loadable/component';

// full dynamic import page
const UserLoginPage = loadable((props) => import(`../features/users/pages/${props.page}`));
const MessagesDashboardPage = loadable((props) => import(`../features/messages/pages/${props.page}`));

const LazyRoute = {
  UserLoginPage,
  MessagesDashboardPage,
};

export default LazyRoute;
