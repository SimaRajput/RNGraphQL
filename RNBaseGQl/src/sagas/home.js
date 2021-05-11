import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  getMissionFailure,
  getMissionSuccess,
  GET_MISSION,
  GET_MOVIES,
  getMoviesRequested,
  getMoviesFailure,
  getMoviesSuccess,
} from '../actions/home-actions-types';
import { GetMission } from '../api';
import { showLoader, hideLoader } from '../actions/app-action-types';
import httpClient from './http-client';

function* getMission() {
  yield put(showLoader())
  try {
    const result = yield call(GetMission);
    yield put(getMissionSuccess(result));
  } catch (error) {
    yield put(getMissionFailure({ error }));
  }
  yield put(hideLoader())
}

export function* getMovies() {
  yield put(getMoviesRequested());
  const payload = {
    method: "get",
    url: `/movies.json`,
  };
  const { result, error } = yield call(httpClient, payload, true, false);
  if (error) {
    yield put(getMoviesFailure());
  } else {
    yield put(getMoviesSuccess(result.movies));
  }
}

function* Home() {
  yield all([
    takeLatest(GET_MISSION, getMission),
    takeLatest(GET_MOVIES, getMovies),
  ]);
}

export default Home;