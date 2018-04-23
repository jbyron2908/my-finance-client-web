import { combineEpics } from 'redux-observable';
import user from './user';
import login from './login';

export default combineEpics(
  user,
  login,
);
