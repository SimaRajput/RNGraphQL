import { UPDATE_LANGUAGE } from "../actions/update-language-types";

const initialState = { selectedLanguage: 'en' };

export default function language(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case UPDATE_LANGUAGE:
      return {
        ...state,
        selectedLanguage: payload,
      };

    default:
      return state;
  
  } 
 }
