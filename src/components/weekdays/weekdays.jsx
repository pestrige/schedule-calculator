import React from 'react';
import { observer } from 'mobx-react-lite';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DayToggleButton from './day-toggle-button';
import Weekday from './weekday';
import styles from './weekdays.module.scss';
import schedule from '../../store/schedule';

function Weekdays({ styles: style = '' }) {
  const handleDayToggleButtonClick = (evt) => {
    schedule.toggleDays(evt);
  };

  return (
    <>
      <legend className="visually-hidden">Выбор дней недели</legend>
      <div className={classNames(styles.wrapper, style)}>
        <DayToggleButton
          type="button"
          onClick={handleDayToggleButtonClick}
        >
          ПН/СР/ПТ
        </DayToggleButton>
        <DayToggleButton
          type="button"
          onClick={handleDayToggleButtonClick}
        >
          ВТ/ЧТ
        </DayToggleButton>
        <ul className={styles.list}>
          {schedule.options.selectedDays.map((day) => (
            <Weekday key={day.id} day={day} />
          ))}
        </ul>
      </div>
    </>
  );
}

Weekdays.propTypes = {
  styles: PropTypes.string,
};

export default observer(Weekdays);
