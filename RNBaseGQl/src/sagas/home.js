import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getMissionFailure, getMissionSuccess, GET_MISSION } from '../actions/home-actions-types';
import { GetMission } from '../api';

function* getMission() {
  try {
    const result = yield call(GetMission);
    yield put(getMissionSuccess(result));
  } catch (error) {
    yield put(getMissionFailure({ error }));
  }
}

function* Home() {
  yield all([takeLatest(GET_MISSION, getMission)]);
}

export default Home;