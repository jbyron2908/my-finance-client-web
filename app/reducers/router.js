import { LOCATION_CHANGE } from 'react-router-redux';
import { fromJS } from 'immutable';

const initialState = fromJS({
  location: null,
});

function router(state = initialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

export default router;
