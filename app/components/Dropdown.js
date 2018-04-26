/* eslint-disable react/prop-types,jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormField, Dropdown } from 'semantic-ui-react';
import { omit } from 'lodash';

const propTypes = {
  label: PropTypes.string,
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }),
  options: PropTypes.arrayOf(PropTypes.object),
};

const defaultPropTypes = {
  label: '',
  input: {
    onChange: () => {},
  },
  options: [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'ux', text: 'User Experience', value: 'ux' },
  ],
};

class CustomDropdown extends Component {
  onChange(value) {
    const { input: { onChange } } = this.props;
    onChange(value);
  }

  render() {
    const { label } = this.props;

    const props = omit(this.props, [
      'input',
      'meta',
    ]);

    return (
      <FormField>
        <label>{label}</label>
        <Dropdown
          {...props}
          onChange={(e, { value }) => this.onChange(value)}
        />
      </FormField>
    );
  }
}

CustomDropdown.propTypes = propTypes;
CustomDropdown.defaultProps = defaultPropTypes;

export default CustomDropdown;
