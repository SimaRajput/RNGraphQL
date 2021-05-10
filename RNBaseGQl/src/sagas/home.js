import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getMissionFailure, getMissionSuccess, GET_MISSION } from '../actions/home-actions-types';
import { GetMission } from '../api';
import { showLoader, hideLoader } from '../actions/app-action-types';

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

function* Home() {
  yield all([takeLatest(GET_MISSION, getMission)]);
}

export default Home;