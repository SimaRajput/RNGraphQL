import uniqBy from 'lodash/uniqBy';
import { GET_MISSION_SUCCESS } from '../actions/home-actions-types';

const initialState = {
  missions: []
};

export default function home(state = initialState, { payload, type }) {
  switch (type) {
    case GET_MISSION_SUCCESS:
      return {
        ...state,
        missions: uniqBy([...state.missions, ...payload], 'mission_name'),
      };

    default:
      return state;
  }
}