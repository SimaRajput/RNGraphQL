import AsyncStorage from '@react-native-community/async-storage';
import { persistCombineReducers } from 'redux-persist';
import { reducer as network } from 'react-native-offline';
import app from './app';
import nav from './nav';
import user from './user';
import language from './language';
import home from './home';

const config = {
  blacklist: ['app', 'nav', 'network'],
  key: 'primary',
  storage: AsyncStorage,
};

const reducers = persistCombineReducers(config, {
  app,
  nav,
  user,
  network,
  language,
  home
});

export default reducers;