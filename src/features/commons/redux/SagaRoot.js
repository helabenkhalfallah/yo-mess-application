import { all, } from 'redux-saga/effects';
import UserServicesRoot from '../../users/services/UserServicesRoot';

export default function* rootSaga() {
  yield all([
    ...UserServicesRoot,
  ]);
}
