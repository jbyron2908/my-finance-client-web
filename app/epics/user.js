import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { GET_USER } from '../consts/user';
import meQuery from '../graphql/queries/me';
import { getUserComplete } from '../actions/user';

const user = action$ =>
  action$.ofType(GET_USER)
    .mergeMap(() => meQuery()
      .map(response => getUserComplete(response.data.me)));

export default user;
