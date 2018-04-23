import { createSelector } from 'reselect';

const selectCounter = state => state.get('counter');

const getSelectCounter = () => createSelector(
  selectCounter,
  counterState => counterState.get('counter'),
);

export {
  selectCounter,
  getSelectCounter,
};
