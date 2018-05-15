/* eslint-disable max-len,no-underscore-dangle,no-undef,global-require,global-require */
import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import { fromJS } from 'immutable';

import rootEpic from '../epics';
import rootReducer from '../reducers';

export default function configureStore(history) {
  const middlewares = [
    createEpicMiddleware(rootEpic),
    routerMiddleware(history),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const composeEnhancers = composeWithDevTools({
    realtime: true,
    name: 'Your Instance Name',
    host: '127.0.0.1',
    port: 1024, // the port your remotedev server is running at
  });

  const initialState = {};

  const store = createStore(
    rootReducer,
    fromJS(initialState),
    composeEnhancers(...enhancers),
  );

    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')/* .default if you use Babel 6+ */));
  }

  return store;
}
