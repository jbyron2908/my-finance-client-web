import { createSelector } from 'reselect';

const selectAuth = state => state.get('auth');

const getSelectLogged = () => createSelector(
  selectAuth,
  authState => authState.get('logged'),
);

export {
  selectAuth,
  getSelectLogged,
};
