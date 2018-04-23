import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import counter from './counter';
import user from './user';
import router from './router';
import auth from './auth';


export default combineReducers({
  counter,
  user,
  router,
  auth,
  form: formReducer,
});
