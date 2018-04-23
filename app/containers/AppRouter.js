import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getSelectLogged } from '../selectors/auth';

import TopBar from './TopBar';
import Main from './Main';
import UIPlayground from './UIPlayground';
import AccountPage from './page/AccountPage';

class AppRouter extends Component {
  render() {
    const { logged } = this.props;

    if (!logged) {
      return <Redirect to="/login" />;
    }

    return (
      <Container style={{ padding: '1em 0em' }}>
        <TopBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/accounts" component={AccountPage} />
          <Route path="/playground" component={UIPlayground} />
          <Redirect to="/" />
        </Switch>
      </Container>
    );
  }
}

AppRouter.propTypes = {
  logged: PropTypes.bool.isRequired,
};

AppRouter.defaultProps = {};

const mapStateToProps = createStructuredSelector({
  logged: getSelectLogged(),
});

const AppRouterRedux = connect(mapStateToProps)(AppRouter);

export default AppRouterRedux;

