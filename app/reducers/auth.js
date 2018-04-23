import { fromJS } from 'immutable';
import store from 'store';

import { LOGIN, LOGOUT } from '../consts/auth';

const logged = (store.get('logged') === true);

const initialState = fromJS({
  logged,
});

function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state.set('logged', true);
    case LOGOUT:
      return state.set('logged', false);
    default:
      return state;
  }
}

export default auth;
