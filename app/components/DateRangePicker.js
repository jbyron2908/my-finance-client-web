/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import omit from 'lodash/omit';
import { DateRangePicker } from 'react-dates';
import {
  START_DATE, END_DATE, ICON_BEFORE_POSITION,
  ICON_AFTER_POSITION, HORIZONTAL_ORIENTATION, VERTICAL_ORIENTATION,
  ANCHOR_LEFT, ANCHOR_RIGHT,
} from 'react-dates/constants';
import { FormField } from 'semantic-ui-react';

const propTypes = {
  label: PropTypes.string,

  autoFocus: PropTypes.bool,
  autoFocusEndDate: PropTypes.bool,
  stateDateWrapper: PropTypes.func,
  initialStartDate: momentPropTypes.momentObj,
  initialEndDate: momentPropTypes.momentObj,

  startDateId: PropTypes.string,
  endDateId: PropTypes.string,
  startDatePlaceholderText: PropTypes.string,
  endDatePlaceholderText: PropTypes.string,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf([START_DATE, END_DATE])]),
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  screenReaderInputMessage: PropTypes.string,
  showClearDates: PropTypes.bool,
  showDefaultInputIcon: PropTypes.bool,
  customInputIcon: PropTypes.node,
  customArrowIcon: PropTypes.node,
  customCloseIcon: PropTypes.node,
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
  daySize: PropTypes.number,
  isRTL: PropTypes.bool,
  initialVisibleMonth: PropTypes.func,
  firstDayOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  numberOfMonths: PropTypes.number,
  keepOpenOnDateSelect: PropTypes.bool,
  reopenPickerOnClearDates: PropTypes.bool,
  renderCalendarInfo: PropTypes.func,
  hideKeyboardShortcutsPanel: PropTypes.bool,

  navPrev: PropTypes.node,
  navNext: PropTypes.node,
  onPrevMonthClick: PropTypes.func,
  onNextMonthClick: PropTypes.func,
  onClose: PropTypes.func,

  renderCalendarDay: PropTypes.func,
  renderDayContents: PropTypes.func,
  minimumNights: PropTypes.number,
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
  autoFocusEndDate: false,
  initialStartDate: null,
  initialEndDate: null,

  startDateId: START_DATE,
  startDatePlaceholderText: 'Start Date',
  endDateId: END_DATE,
  endDatePlaceholderText: 'End Date',
  disabled: false,
  required: false,
  readOnly: false,
  screenReaderInputMessage: '',
  showClearDates: false,
  showDefaultInputIcon: false,
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,
  inputIconPosition: ICON_BEFORE_POSITION,
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
  daySize: 30,
  initialVisibleMonth: null,
  firstDayOfWeek: 0,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDates: false,
  isRTL: false,
  renderCalendarInfo: null,
  hideKeyboardShortcutsPanel: true,

  navPrev: null,
  navNext: null,
  onPrevMonthClick() {},
  onNextMonthClick() {},
  onClose() {},

  renderCalendarDay: undefined,
  renderDayContents: null,
  minimumNights: 1,
  enableOutsideDays: false,
  isDayBlocked: () => false,
  isOutsideRange: day => false,
  isDayHighlighted: () => false,

  displayFormat: () => moment.localeData().longDateFormat('L'),
  monthFormat: 'MMMM YYYY',

  stateDateWrapper: date => date,
  input: {
    onChange: () => {},
  },
};

class DateRangePickerWrapper extends React.Component {
  constructor(props) {
    super(props);

    let focusedInput = null;
    if (props.autoFocus) {
      focusedInput = START_DATE;
    } else if (props.autoFocusEndDate) {
      focusedInput = END_DATE;
    }

    this.state = {
      focusedInput,
      startDate: props.initialStartDate,
      endDate: props.initialEndDate,
    };

    props.input.onChange({
      startDate: props.initialStartDate,
      endDate: props.initialEndDate,
    });
  }

  onDatesChange({ startDate, endDate }) {
    const { stateDateWrapper, input: { onChange } } = this.props;
    this.setState({
      startDate: startDate && stateDateWrapper(startDate),
      endDate: endDate && stateDateWrapper(endDate),
    });
    onChange({
      startDate: startDate && stateDateWrapper(startDate),
      endDate: endDate && stateDateWrapper(endDate),
    });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  render() {
    const { focusedInput, startDate, endDate } = this.state;
    const { label } = this.props;

    const props = omit(this.props, [
      'label',
      'autoFocus',
      'autoFocusEndDate',
      'initialStartDate',
      'initialEndDate',
      'stateDateWrapper',
      'input',
      'meta',
    ]);

    return (
      <FormField>
        <label>{label}</label>
        <DateRangePicker
          {...props}
          onDatesChange={values => this.onDatesChange(values)}
          onFocusChange={focused => this.onFocusChange(focused)}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate}
        />
      </FormField>
    );
  }
}

DateRangePickerWrapper.propTypes = propTypes;
DateRangePickerWrapper.defaultProps = defaultProps;

export default DateRangePickerWrapper;
