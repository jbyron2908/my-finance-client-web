import { fromJS } from 'immutable';

import { DECREASE, INCREASE } from '../consts/counter';

const initialState = fromJS({
  counter: 0,
});

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state.set('counter', state.get('counter') + 1);
    case DECREASE:
      return state.set('counter', state.get('counter') - 1);
    default:
      return state;
  }
}

export default counter;
