/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';
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
  onChange(checked) {
    const { checkValue, radio, input: { onChange } } = this.props;
    if (!radio && !checked) {
      onChange('');
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
      <Checkbox
        {...props}
        value={checkValue}
        checked={checkValue === value}
        onChange={(e, data) => this.onChange({ checked })}
      />
    );
  }
}

CustomCheckbox.propTypes = propTypes;
CustomCheckbox.defaultProps = defaultPropTypes;

export default CustomCheckbox;
