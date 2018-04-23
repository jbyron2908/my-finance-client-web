/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { Field, reduxForm } from 'redux-form/immutable';
import { Form, Grid } from 'semantic-ui-react';

import { loginAction } from '../../actions/auth';
import { getSelectLogged } from '../../selectors/auth';


class LoginPage extends Component {
  render() {
    const { logged, login, handleSubmit } = this.props;

    if (logged) {
      return <Redirect to="/" />;
    }

    return (
      <Form onSubmit={handleSubmit(values => login(values))}>
        <Grid>
          <Grid.Row centered>
            <Grid.Column width={6}>
              <Field component={Form.Input} name="email" label="Email" placeholder="user@email.com" />
              <Field component={Form.Input} type="password" name="password" label="Password" placeholder="password" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={2}>
              <Form.Button type="submit" fluid>Login</Form.Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    );
  }
}

LoginPage.propTypes = {
  logged: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  logged: getSelectLogged(),
});

const mapDispatchToProps = dispatch => ({
  login: (values) => {
    dispatch(loginAction(values.toJS()));
  },
});

const LoginPageForm = reduxForm({
  form: 'login',
})(LoginPage);

const LoginPageRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPageForm);

export default LoginPageRedux;
