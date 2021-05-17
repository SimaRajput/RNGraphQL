import AsyncStorage from '@react-native-community/async-storage';
import { persistCombineReducers } from 'redux-persist';
import app from './app';
import nav from './nav';
import user from './user';
import language from './language';
import home from './home';

const config = {
  blacklist: ['app', 'nav'],
  key: 'primary',
  storage: AsyncStorage,
};

const reducers = persistCombineReducers(config, {
  app,
  nav,
  user,
  language,
  home
});

export default reducers;