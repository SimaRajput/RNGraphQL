// @flow
import { Alert } from 'react-native';

const defaultServer = 'development';

export const apiURLs = {
  development: {
    baseURL: 'https://facebook.github.io/react-native/movies.json'
  },
  production: {
    baseURL: 'https://facebook.github.io/react-native/movies.json'
  },
  staging: {
    baseURL: 'https://facebook.github.io/react-native/movies.json'
  }
};

export const authToken = 'rngraphql_$2021';

const api = function () {
  const api = apiURLs[defaultServer];
  if (!api) {
    Alert.alert('Error', 'Invalid default configuration /config/api.js');
  }
  return api;
};

export default api();
