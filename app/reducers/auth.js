import { fromJS } from 'immutable';
import store from 'store';

import { LOGIN_SUCCESS, LOGOUT } from '../consts/auth';

const logged = (!!store.get('token'));

const initialState = fromJS({
  logged,
});

function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.set('logged', true);
    case LOGOUT:
      return state.set('logged', false);
    default:
      return state;
  }
}

export default auth;
