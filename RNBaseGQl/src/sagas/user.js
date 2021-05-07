import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  getMoviesFailure,
  getMoviesSuccess,
  GET_MOVIES,
} from '../actions/user-actions-types';
import { GetMovie } from '../api';

function* getMovies() {
  try {
    const result = yield call(GetMovie);
    yield put(getMoviesSuccess(result));
  } catch (error) {
    yield put(getMoviesFailure({ error }));
  }
}

function* User() {
  yield all([takeLatest(GET_MOVIES, getMovies)]);
}

export default User;
