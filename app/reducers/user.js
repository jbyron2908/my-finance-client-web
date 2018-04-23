import { fromJS } from 'immutable';

import { USER } from '../consts/user';

const initialState = fromJS({
  user: {},
});

function user(state = initialState, action) {
  switch (action.type) {
    case USER:
      console.log(action);
      return (state.set('user', action.payload));
    default:
      return state;
  }
}

export default user;
