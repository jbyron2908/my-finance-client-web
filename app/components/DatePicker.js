/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import omit from 'lodash/omit';
import { FormField } from 'semantic-ui-react';

import { SingleDatePicker } from 'react-dates';
import { ICON_BEFORE_POSITION, ICON_AFTER_POSITION, HORIZONTAL_ORIENTATION, VERTICAL_ORIENTATION, ANCHOR_LEFT, ANCHOR_RIGHT } from 'react-dates/constants';


const propTypes = {
  label: PropTypes.string,

  autoFocus: PropTypes.bool,
  initialDate: momentPropTypes.momentObj,

  id: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  screenReaderInputMessage: PropTypes.string,
  showClearDate: PropTypes.bool,
  customCloseIcon: PropTypes.node,
  showDefaultInputIcon: PropTypes.bool,
  customInputIcon: PropTypes.node,
  inputIconPosition: PropTypes.oneOf([ICON_BEFORE_POSITION, ICON_AFTER_POSITION]),
  noBorder: PropTypes.bool,
  block: PropTypes.bool,
  small: PropTypes.bool,
  regular: PropTypes.bool,

  renderMonth: PropTypes.func,
  orientation: PropTypes.oneOf([HORIZONTAL_ORIENTATION, VERTICAL_ORIENTATION]),
  anchorDirection: PropTypes.oneOf([ANCHOR_LEFT, ANCHOR_RIGHT]),
  horizontalMargin: PropTypes.number,
  withPortal: PropTypes.bool,
  withFullScreenPortal: PropTypes.bool,
  appendToBody: PropTypes.bool,
  disableScroll: PropTypes.bool,
  initialVisibleMonth: PropTypes.func,
  firstDayOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  numberOfMonths: PropTypes.number,
  keepOpenOnDateSelect: PropTypes.bool,
  reopenPickerOnClearDate: PropTypes.bool,
  renderCalendarInfo: PropTypes.func,
  hideKeyboardShortcutsPanel: PropTypes.bool,
  daySize: PropTypes.number,
  isRTL: PropTypes.bool,

  navPrev: PropTypes.node,
  navNext: PropTypes.node,
  onPrevMonthClick: PropTypes.func,
  onNextMonthClick: PropTypes.func,
  onClose: PropTypes.func,

  renderCalendarDay: PropTypes.func,
  renderDayContents: PropTypes.func,
  enableOutsideDays: PropTypes.bool,
  isDayBlocked: PropTypes.func,
  isOutsideRange: PropTypes.func,
  isDayHighlighted: PropTypes.func,

  displayFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  monthFormat: PropTypes.string,
  input: PropTypes.shape({
    onChange: PropTypes.func,
  }),
};

const defaultProps = {
  label: '',

  autoFocus: false,
  initialDate: null,

  id: 'date',
  placeholder: 'Date',
  disabled: false,
  required: false,
  readOnly: false,
  screenReaderInputMessage: '',
  showClearDate: false,
  customCloseIcon: null,
  showDefaultInputIcon: false,
  customInputIcon: null,
  inputIconPosition: ICON_AFTER_POSITION,
  noBorder: true,
  block: false,
  small: false,
  regular: false,

  renderMonth: null,
  orientation: HORIZONTAL_ORIENTATION,
  anchorDirection: ANCHOR_LEFT,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  appendToBody: false,
  disableScroll: false,
  initialVisibleMonth: null,
  firstDayOfWeek: 0,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDate: false,
  renderCalendarInfo: () => {},
  hideKeyboardShortcutsPanel: true,
  daySize: 30,
  isRTL: false,

  navPrev: null,
  navNext: null,
  onPrevMonthClick() {},
  onNextMonthClick() {},
  onClose() {},

  renderCalendarDay: undefined,
  renderDayContents: null,
  enableOutsideDays: false,
  isDayBlocked: () => false,
  isOutsideRange: () => false,
  isDayHighlighted: () => {},

  displayFormat: () => moment.localeData().longDateFormat('L'),
  monthFormat: 'MMMM YYYY',
  input: {
    onChange: () => {},
  },
};

class SingleDatePickerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: props.autoFocus,
      date: props.initialDate,
    };

    props.input.onChange(props.initialDate);
  }

  onDateChange(date) {
    this.setState({ date });
    this.props.input.onChange(date);
  }

  onFocusChange({ focused }) {
    this.setState({ focused });
  }

  render() {
    const { focused, date } = this.state;
    const { label } = this.props;

    const props = omit(this.props, [
      'label',
      'autoFocus',
      'initialDate',
      'input',
      'meta',
    ]);

    return (
      <FormField>
        <label>{label}</label>
        <SingleDatePicker
          {...props}
          id="date_input"
          date={date}
          focused={focused}
          onDateChange={newDate => this.onDateChange(newDate)}
          onFocusChange={newFocused => this.onFocusChange(newFocused)}
        />
      </FormField>
    );
  }
}

SingleDatePickerWrapper.propTypes = propTypes;
SingleDatePickerWrapper.defaultProps = defaultProps;

export default SingleDatePickerWrapper;
