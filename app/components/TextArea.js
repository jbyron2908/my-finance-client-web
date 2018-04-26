/* eslint-disable react/prop-types,jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormField, Label, TextArea } from 'semantic-ui-react';
import { omit } from 'lodash';

const propTypes = {
  initialValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]),
  label: PropTypes.string,
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }),
};

const defaultPropTypes = {
  initialValue: undefined,
  label: '',
  input: {
    onChange: () => {},
  },
};

class CustomTextArea extends Component {
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
    const { label, input: { value } } = this.props;

    const props = omit(this.props, [
      'input',
      'meta',
      'label',
      'initialValue',
    ]);

    return (
      <FormField>
        <label>{label}</label>
        <TextArea
          {...props}
          value={value}
          onChange={(e, { value: newValue }) => this.onChange(newValue)}
        />
      </FormField>
    );
  }
}

CustomTextArea.propTypes = propTypes;
CustomTextArea.defaultProps = defaultPropTypes;

export default CustomTextArea;
