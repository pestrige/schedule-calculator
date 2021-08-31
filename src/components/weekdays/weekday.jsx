import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import styles from './weekdays.module.scss';
import schedule from '../../store/schedule';

function Weekday({ day }) {
  const { id, checked, label } = day;

  return (
    <>
      <input
        className={classNames(styles.weekday_input, 'visually-hidden')}
        type="checkbox"
        name="weekday"
        id={id}
        checked={checked}
        onChange={() => schedule.setSelectedDay(label)}
      />
      <label
        className={styles.weekday_label}
        htmlFor={id}
      >
        {label}
      </label>
    </>
  );
}

Weekday.propTypes = {
  day: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }).isRequired,
};

export default observer(Weekday);
