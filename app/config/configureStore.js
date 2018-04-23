/* eslint-disable max-len,no-underscore-dangle,no-undef,global-require,global-require */
import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';
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

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
      : compose;

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
