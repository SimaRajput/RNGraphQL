import uniqBy from 'lodash/uniqBy';
import { GET_MISSION_SUCCESS, GET_MOVIES_SUCCESS } from '../actions/home-actions-types';

const initialState = {
  missions: [],
  movies: []
};

export default function home(state = initialState, { payload, type }) {
  switch (type) {
    case GET_MISSION_SUCCESS:
      return {
        ...state,
        missions: uniqBy([...state.missions, ...payload], 'mission_name'),
      };

    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: uniqBy([...state.movies, ...payload], 'id'),
      };

    default:
      return state;
  }
}