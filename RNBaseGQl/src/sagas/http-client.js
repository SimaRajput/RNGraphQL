import { call, select, put, delay } from 'redux-saga/effects';
import Idx from 'idx';
import { showLoader, hideLoader } from '../actions/app-action-types';
import { logoutSuccess, setAuthenticationToken } from '../actions/user-actions-types';
import axiosInstance from '../utilities/axios-instance';
// import { nestedReset } from '../utilities/navigator-methods';
import Toast from 'react-native-toast-message';

function* HttpClient(payload, isLoader = true, authorization = true) {
  // const networkStatus = yield select(({ network: { isConnected } }) => isConnected);

  // if (!networkStatus) {
  //   yield put(ToastActionsCreators.displayInfo('Please make sure you\'re connected with internet.'));

  //   return {
  //     error: true,
  //     result: null,
  //   };
  // }

  if (isLoader) {
    yield put(showLoader());
    // yield delay(250);
  }
  const data = { ...payload };

  if (authorization) {
    const authToken = yield select(({ user: { token } }) => token);

    if (authToken) {
      data.headers = { 'x-authorization': authToken };
    } else {
      yield put(hideLoader());

      return {
        error: true,
        result: null,
      };
    }
  }

  // eslint-disable-next-line no-console

  try {
    const {
      data: result,
      headers: { 'x-authorization': authentication = '' },
    } = yield call(axiosInstance, data);

    yield put(hideLoader());

    if (authentication) {
      yield put(setAuthenticationToken(authentication));
    }

    // eslint-disable-next-line no-console

    return {
      error: null,
      result,
    };
  } catch (error) {
    yield put(hideLoader());
    // eslint-disable-next-line no-console
    if (Idx(error, (_) => _.code)) {
      if (error.code === 'ECONNABORTED') {
        const message = 'Please try later our servers are not responding.';

        yield put(Toast.show(message));
      } else if (error.code === 401) {
        yield delay(250);
        yield put(logoutSuccess());
        yield put(Toast.show(error.message));
        // reset('Welcome');
        // nestedReset('Dashboard', 'Welcome');
      } else if (error.code === 402) {
        // show nothing
      } else {
        yield put(Toast.show(error.message));
      }
    } else {
      yield put(Toast.show(error.message));
    }

    return {
      error,
      result: null,
    };
  }
}

export default HttpClient;
