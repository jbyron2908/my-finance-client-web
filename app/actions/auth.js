/* eslint-disable no-undef */
import store from 'store';
import { LOGIN, LOGOUT } from '../consts/auth';

export function loginAction(values) {
  store.set('logged', true);
  console.log('loginAction', values);

  return {
    type: LOGIN,
  };
}

export function logoutAction() {
  store.set('logged', false);

  return {
    type: LOGOUT,
  };
}
