import { all, } from 'redux-saga/effects';
import UserServicesRoot from '../../users/services/UserServicesRoot';
import MessagesRoot from '../../messages/services/MessagesRoot';

export default function* rootSaga() {
  yield all([
    ...UserServicesRoot,
    ...MessagesRoot,
  ]);
}
