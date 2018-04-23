import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { LOGIN } from '../consts/auth';
import loginMutation from '../graphql/mutations/login';
import { loginSuccessAction, loginFailAction } from '../actions/auth';

const login = action$ =>
  action$.ofType(LOGIN)
    .mergeMap((action) => {
      const { email, password } = action.payload;
      return loginMutation(email, password)
        .map(response => loginSuccessAction(response.data.login.token))
        .catch(() => Observable.of(loginFailAction()));
    });


export default login;
