// @flow
import { Alert } from 'react-native';

const defaultServer = 'development';

export const apiURLs = {
  development: {
    baseURL: 'https://api.spacex.land/graphql/',
  },
  production: {
    baseURL: 'https://api.spacex.land/graphql/',
  },
  staging: {
    baseURL: 'https://api.spacex.land/graphql/',
  },
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
