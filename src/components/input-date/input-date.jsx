import React from 'react';
import PropTypes from 'prop-types';
import Flatpickr from 'react-flatpickr';
import classNames from 'classnames';
import styles from './input-date.module.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'flatpickr/dist/themes/material_blue.css';

const currentDate = new Date();

export default function InputDate({
  name,
  type = 'text',
  withCalendar = false,
  startValue,
  endValue,
  onCalendarChange,
  styles: style = '',
}) {
  const handleCalendarChange = (selectedDates) => {
    const selectedDate = selectedDates[0];
    onCalendarChange(selectedDate);
  };
  const handleTimeChange = (evt) => {
    onCalendarChange(evt.target.value);
  };

  return (
    <fieldset className={classNames(styles.wrapper, style)}>
      {withCalendar && (
        <Flatpickr
          name={name}
          className={styles.calendar}
          options={{
            defaultDate: currentDate,
            dateFormat: 'j.m.Y',
            minDate: currentDate,
            onChange: handleCalendarChange,
          }}
        />
      )}
      {!withCalendar && (
        <input
          type={type}
          value={startValue}
          min="07:00"
          max="20:00"
          className={classNames(styles.calendar, styles.calendar__time)}
          required
          onChange={handleTimeChange}
        />
      )}
      <span className={styles.from}>до</span>
      <span className={classNames(styles.calendar, styles.calendar__from)}>
        {endValue}
      </span>
    </fieldset>
  );
}

InputDate.propTypes = {
  name: PropTypes.string.isRequired,
  withCalendar: PropTypes.bool,
  styles: PropTypes.string,
  type: PropTypes.string,
  startValue: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  endValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onCalendarChange: PropTypes.func,
};
