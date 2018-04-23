/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { createStructuredSelector } from 'reselect';
import { Form, Input, Button } from 'semantic-ui-react';
import { increase } from '../actions/counter';
import { getUser } from '../actions/user';
import { getSelectCounter } from '../selectors/counter';

import database from '../rxdb/database/database';

class Main extends Component {
  submitTest(values) {
    this.props.change('firstName', 'new value');
    this.props.onSubmitClick(values);
  }

  render() {
    const {
      counter, onIncreaseCounterClick,
      onGetUserGraphQLClick,
      onAddHeroRxDBClick, onGetHeroRxDBClick,
      onAddUserRxDBClick, onGetUserRxDBClick,
      handleSubmit,
    } = this.props;

    return (
      <div>
        <div>
            To get started, edit App.js and save to reload.
            Counter = {counter}
        </div>
        <div>
          <Button onClick={() => onIncreaseCounterClick()}>
            Increase counter
          </Button>
          <Button onClick={() => onGetUserGraphQLClick()}>
            Get user
          </Button>
        </div>
        <div>
          <Button onClick={() => onAddHeroRxDBClick()}>
          Add hero
          </Button>
          <Button onClick={() => onGetHeroRxDBClick()}>
          Get hero
          </Button>
        </div>
        <div>
          <Button onClick={() => onAddUserRxDBClick()}>
            Add user rxdb
          </Button>
          <Button onClick={() => onGetUserRxDBClick()}>
            Get user rxdb
          </Button>
        </div>
        <div>
          <Form onSubmit={handleSubmit(values => this.submitTest(values))} >
            <div>
              <Field name="firstName" component={Input} label="First name" placeholder="First name" />
            </div>
            <div>
              <Field name="lastName" component={Input} label="Last Name" placeholder="Last Name" />
            </div>
            <div>
              <Field name="email" component={Input} label="Email" placeholder="Email" type="email" />
            </div>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncreaseCounterClick: PropTypes.func.isRequired,
  onGetUserGraphQLClick: PropTypes.func.isRequired,
  onAddHeroRxDBClick: PropTypes.func.isRequired,
  onGetHeroRxDBClick: PropTypes.func.isRequired,
  onAddUserRxDBClick: PropTypes.func.isRequired,
  onGetUserRxDBClick: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  onSubmitClick: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  counter: getSelectCounter(),
});

const mapDispatchToProps = dispatch => ({
  onIncreaseCounterClick: () => {
    dispatch(increase());
  },
  onGetUserGraphQLClick: () => {
    dispatch(getUser());
  },
  onAddHeroRxDBClick: async () => {
    console.log('onAddHeroRxDBClick');

    const db = await database();
    db.heroes.insert({ name: 'Byron1', color: 'Black' });
  },
  onGetHeroRxDBClick: async () => {
    console.log('onGetHeroRxDBClick');

    const db = await database();
    db.heroes.find().sort({ name: 1 }).$.subscribe((heroes) => {
      if (!heroes) { return; }
      console.log(heroes);
    });
  },
  onAddUserRxDBClick: async () => {
    console.log('onAddUserRxDBClick');

    const db = await database();
    db.users.insert({ name: 'Byron1', email: 'byron1@symbio.com', password: 'Symbio123' });
  },
  onGetUserRxDBClick: async () => {
    console.log('onGetUserRxDBClick');

    const db = await database();
    db.users.find().sort({ name: 1 }).$.subscribe((users) => {
      if (!users) { return; }
      console.log(users);
    });
  },
  onSubmitClick: (values) => {
    console.log(values);
  },
});

const MainForm = reduxForm({
  form: 'main',
})(Main);

const MainRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainForm);

export default MainRedux;
