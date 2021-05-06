import store from '../../config/configure-store';
import {authToken} from '../../config/api';

export const getDefaultHeaders = (operationName: string) => {
  if (operationName === 'Signin' || operationName === 'Signup') {
    return {authorization: authToken};
  }
  const state = store.getState();
  return {authorization: state.session.accessToken};
};