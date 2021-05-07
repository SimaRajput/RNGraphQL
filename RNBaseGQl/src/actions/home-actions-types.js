import { createAction } from 'redux-actions';

export const GET_MISSION = 'GET_MISSION';
export const getMission = createAction(GET_MISSION);

export const GET_MISSION_FAILURE = 'GET_MISSION_FAILURE';
export const getMissionFailure = createAction(GET_MISSION_FAILURE);

export const GET_MISSION_REQUESTED = 'GET_MISSION_REQUESTED';
export const getMissionRequested = createAction(GET_MISSION_REQUESTED);

export const GET_MISSION_SUCCESS = 'GET_MISSION_SUCCESS';
export const getMissionSuccess = createAction(GET_MISSION_SUCCESS);