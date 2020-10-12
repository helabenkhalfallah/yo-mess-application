// user session utils : token, cookies, session ...
import cookie from 'react-cookies';

const saveToken = (token) => cookie.save('yo-mess-access_token', token, { path: '/', });
const removeToken = () => cookie.remove('yo-mess-access_token', { path: '/', });
const loadToken = () => cookie.load('yo-mess-access_token');

const SessionUtils = {
  saveToken,
  loadToken,
  removeToken,
};

export default SessionUtils;
