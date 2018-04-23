import { GET_USER, USER } from '../consts/user';

export function getUser() {
  return {
    type: GET_USER,
  };
}

export function getUserComplete(userData) {
  return {
    type: USER,
    payload: userData,
  };
}
