import { createSelector } from 'reselect';

const selectLocation = state => state.get('router').get('location');

const getSelectPathname = () => createSelector(
  selectLocation,
  locationState => locationState.get('pathname'),
);

export {
  selectLocation,
  getSelectPathname,
};
