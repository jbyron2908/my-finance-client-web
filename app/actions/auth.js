import store from 'store';

import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../consts/auth';

export function loginAction(values) {
  return {
    type: LOGIN,
    payload: values,
  };
}

export function loginSuccessAction(token) {
  store.set('token', token);

  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginFailAction() {
  return {
    type: LOGIN_FAIL,
  };
}

export function logoutAction() {
  store.remove('token');

  return {
    type: LOGOUT,
  };
}
