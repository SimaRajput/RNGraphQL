import { all, fork } from 'redux-saga/effects';
import { networkSaga } from 'react-native-offline';
import user from './user';
import home from './home';

const sagas = function* sagas() {
  yield all([
    fork(networkSaga, { pingInterval: 20000 }),
    user(),
    home()
  ]);
};

export default sagas;
