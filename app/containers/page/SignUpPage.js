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


class SignUpPage extends Component {
  render() {
    const { logged, signup, handleSubmit } = this.props;

    if (logged) {
      return <Redirect to="/" />;
    }

    return (
      <Form onSubmit={handleSubmit(values => signup(values))}>
        <Grid>
          <Grid.Row centered>
            <Grid.Column width={6}>
              <Field component={Form.Input} name="email" label="Email" placeholder="user@email.com" />
              <Field component={Form.Input} type="password" name="password" label="Password" placeholder="password" />
              <Field component={Form.Input} type="password" name="repeat_password" label="Repeat password" placeholder="repeat password" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={2}>
              <Form.Button type="submit" fluid>Sign Up</Form.Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    );
  }
}

SignUpPage.propTypes = {
  logged: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  logged: getSelectLogged(),
});

const mapDispatchToProps = dispatch => ({
  signup: (values) => {
    dispatch(loginAction(values));
  },
});

const SignUpPageForm = reduxForm({
  form: 'signup',
})(SignUpPage);

const SignUpPageRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpPageForm);

export default SignUpPageRedux;
