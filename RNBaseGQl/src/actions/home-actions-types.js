import { createAction } from 'redux-actions';

export const GET_MISSION = 'GET_MISSION';
export const getMission = createAction(GET_MISSION);

export const GET_MISSION_FAILURE = 'GET_MISSION_FAILURE';
export const getMissionFailure = createAction(GET_MISSION_FAILURE);

export const GET_MISSION_REQUESTED = 'GET_MISSION_REQUESTED';
export const getMissionRequested = createAction(GET_MISSION_REQUESTED);

export const GET_MISSION_SUCCESS = 'GET_MISSION_SUCCESS';
export const getMissionSuccess = createAction(GET_MISSION_SUCCESS);

export const GET_MOVIES = 'GET_MOVIES';
export const getMovies = createAction(GET_MOVIES);

export const GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE';
export const getMoviesFailure = createAction(GET_MOVIES_FAILURE);

export const GET_MOVIES_REQUESTED = 'GET_MOVIES_REQUESTED';
export const getMoviesRequested = createAction(GET_MOVIES_REQUESTED);

export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const getMoviesSuccess = createAction(GET_MOVIES_SUCCESS);