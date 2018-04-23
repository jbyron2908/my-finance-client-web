/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { Form } from 'semantic-ui-react';

class AccountPage extends Component {
  submit(values) {
    console.log(values);
    this.props.reset();
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit(values => this.submit(values))}>
        <Form.Group inline>
          <Field component={Form.Field} control={Form.Input} name="name" label="Account Name" placeholder="Account name" />
          <Field component={Form.Field} control={Form.Input} name="parent" label="Parent" placeholder="Parent category" />
          <Form.Button type="submit" fluid>Create</Form.Button>
        </Form.Group>
      </Form>
    );
  }
}

AccountPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

const AccountPageForm = reduxForm({
  form: 'account',
})(AccountPage);

export default AccountPageForm;
