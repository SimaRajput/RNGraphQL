// @flow

import { CommonActions } from '@react-navigation/native';
import {Alert} from 'react-native';
import store from '../../config/configure-store';

export const catchError = (onSuccess: Function, onError: Function) => ({data}: any) => {
  const {status} = data.response;
  if (status === 200) {
    onSuccess(data.response);
  } else {
    let message = status === 401 ? 'Unauthorised Request' : 'Unknow Error';
    // Logout user now if status is 401
    if (status === 401) {
      store.dispatch(CommonActions.navigate({routeName: 'Auth'}));
    }
    if (data.response.message) message = data.response.message;
    if(status === 400) {
      Alert.alert('Error', message);
    }
    onError(message);
  }
};
