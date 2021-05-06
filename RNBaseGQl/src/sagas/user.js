import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  getMoviesFailure,
  getMoviesSuccess,
  GET_MOVIES,
} from '../actions/user-actions-types';
import { getMovie } from '../api';

function* getMovies({ payload }) {
  console.log('bdsgjjksdhk');
  try {
    const result = yield call(getMovie, payload);
    console.log('result saga=', JSON.stringify(result));
    yield put(getMoviesSuccess(result.movies));
  } catch (error) {
    console.log('error', error);
    yield put(getMoviesFailure({ error }));
  }
}

function* User() {
  yield all([takeLatest(GET_MOVIES, getMovies)]);
}

export default User;
