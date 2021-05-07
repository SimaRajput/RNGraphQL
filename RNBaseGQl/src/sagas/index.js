import { all } from 'redux-saga/effects';
import user from './user';
import home from './home';

const sagas = function* sagas() {
  yield all([
    user(),
    home()
  ]);
};

export default sagas;
