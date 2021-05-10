import AsyncStorage from '@react-native-community/async-storage';
import { persistCombineReducers } from 'redux-persist';
import { toastReducer as toast } from 'react-native-redux-toast';
import app from './app';
// import nav from './nav';
import user from './user';
import language from './language';
import home from './home';

const config = {
  blacklist: ['app', 'toast'],
  key: 'primary',
  storage: AsyncStorage,
};

const reducers = persistCombineReducers(config, {
  app,
  toast,
  user,
  language,
  home
});

export default reducers;
