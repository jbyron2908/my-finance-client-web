import 'rxjs';
import { combineEpics } from 'redux-observable';
import user from './user';

export default (action$, store) =>
  combineEpics(user)(action$, store)
    .do({ error: err => console.error(err) });
