/* eslint-disable no-undef */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import 'semantic-ui-css/semantic.css';
import 'babel-polyfill';
import App from './components/App';
import configureStore from './config/configureStore';

const history = createHistory();
const store = configureStore(history);

const renderApp = Component => (
  render(
    <AppContainer warnings={false}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Component />
          </div>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  )
);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const reducers = require('./reducers').default; // eslint-disable-line
    store.replaceReducer(reducers);
  });
}

renderApp(App);
