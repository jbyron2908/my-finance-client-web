import React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import { Container } from 'semantic-ui-react';

import AppRouter from '../containers/AppRouter';
import LoginPage from '../containers/page/LoginPage';
import SignUpPage from '../containers/page/SignUpPage';

const App = () => (
  <Container style={{ padding: '1em 0em' }}>
    <Container style={{ padding: '1em 0em' }}>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route component={AppRouter} />
      </Switch>
    </Container>
  </Container>
);

export default hot(module)(App);

