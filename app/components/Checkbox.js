/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormField, Checkbox } from 'semantic-ui-react';
import { omit } from 'lodash';

const propTypes = {
  checkValue: PropTypes.string,
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }),
};

const defaultPropTypes = {
  checkValue: 'check',
  input: {
    onChange: () => {},
  },
};

class CustomCheckbox extends Component {
  constructor(props) {
    super(props);

    const { defaultChecked } = props;
    if (defaultChecked) {
      this.onChange(defaultChecked);
    }
  }

  onChange(checked) {
    const { checkValue, radio, input: { onChange } } = this.props;
    if (!radio) {
      if (checked) {
        onChange(checkValue);
      } else {
        onChange('');
      }
    } else {
      onChange(checkValue);
    }
  }

  render() {
    const { checkValue, input: { value } } = this.props;

    const props = omit(this.props, [
      'input',
      'meta',
      'checkValue',
    ]);

    return (
      <FormField>
        <Checkbox
          {...props}
          value={checkValue}
          checked={checkValue === value}
          onChange={(e, { checked }) => this.onChange(checked)}
        />
      </FormField>
    );
  }
}

CustomCheckbox.propTypes = propTypes;
CustomCheckbox.defaultProps = defaultPropTypes;

export default CustomCheckbox;
