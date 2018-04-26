/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormInput } from 'semantic-ui-react';
import { omit } from 'lodash';

const propTypes = {
  initialValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]),
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }),
};

const defaultPropTypes = {
  initialValue: undefined,
  input: {
    onChange: () => {},
  },
};

class CustomInput extends Component {
  constructor(props) {
    super(props);

    const { initialValue } = props;
    if (initialValue) {
      this.onChange(initialValue);
    }
  }

  onChange(value) {
    const { input: { onChange } } = this.props;
    onChange(value);
  }

  render() {
    const { input: { value } } = this.props;

    const props = omit(this.props, [
      'input',
      'meta',
      'initialValue',
    ]);

    return (
      <FormInput
        {...props}
        value={value}
        onChange={(e, { value: newValue }) => this.onChange(newValue)}
      />
    );
  }
}

CustomInput.propTypes = propTypes;
CustomInput.defaultProps = defaultPropTypes;

export default CustomInput;
