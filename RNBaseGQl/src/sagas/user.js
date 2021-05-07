import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  getMoviesFailure,
  getMoviesSuccess,
  GET_MOVIES,
} from '../actions/user-actions-types';
import { GetMovie } from '../api';

function* getMovies() {
  console.log('bdsgjjksdhk');
  try {
    const result = yield call(GetMovie);
    // console.log('result saga=', JSON.stringify(result));
    // yield put(getMoviesSuccess(result.movies));
  } catch (error) {
    console.log('error', error);
    // yield put(getMoviesFailure({ error }));
  }
}

function* User() {
  yield all([takeLatest(GET_MOVIES, getMovies)]);
}

export default User;
