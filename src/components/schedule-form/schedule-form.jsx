import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from './schedule-form.module.scss';
import ColorSelect from '../color-select/color-select';
import GroupName from '../group-name/group-name';
import Weekdays from '../weekdays/weekdays';
import { scheduleOptions } from '../../const';
import InputWithControls from '../input-with-controls/input-with-controls';
import InputDate from '../input-date/input-date';
import InputSelect from '../input-select/input-select';
import Error from '../error/error';
import Button from '../button/button';
import schedule from '../../store/schedule';

function ScheduleForm() {
  const handleHoursTypeChange = (option) => {
    schedule.setHoursType(option);
  };
  const handleTotalHoursChange = (value) => {
    schedule.setTotalHours(value);
  };
  const handleDayHoursChange = (value) => {
    schedule.setDayHours(value);
  };
  const handleCalendarChange = (date) => {
    schedule.setStartDay(date);
  };
  const handleTimeChange = (time) => {
    schedule.setStartTime(time);
  };
  const handleBreakTimeChange = (option) => {
    schedule.setBreakTime(option);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // eslint-disable-next-line
    console.log(schedule.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <GroupName
          title={schedule.options.groupName}
          styles={styles.title}
        />
        <ColorSelect
          title="Цвет группы"
          options={scheduleOptions.groupColor}
          styles={styles.color}
        />
        <InputSelect
          name="hours-type"
          options={scheduleOptions.hoursType}
          styles={styles.hours_type}
          onChange={handleHoursTypeChange}
        />
        <InputWithControls
          name="total-hours"
          label="Всего часов"
          value={schedule.options.totalHours}
          styles={styles.total_hours}
          onChange={handleTotalHoursChange}
          onIncrement={() => schedule.incrementTotalHours()}
          onDecrement={() => schedule.decrementTotalHours()}
        />
        <InputDate
          name="calendar"
          startValue={schedule.options.startDate}
          endValue={schedule.endDate}
          onCalendarChange={handleCalendarChange}
          withCalendar
          styles={styles.date}
        />
        <Weekdays styles={styles.weekdays} />
        <InputSelect
          name="break-time"
          options={scheduleOptions.breakTime}
          styles={styles.break_time}
          onChange={handleBreakTimeChange}
        />
        <InputWithControls
          name="day-hours"
          label="Часов в день"
          styles={styles.day_hours}
          value={schedule.options.dayHours}
          onChange={handleDayHoursChange}
          onIncrement={() => schedule.incrementDayHours()}
          onDecrement={() => schedule.decrementDayHours()}
        />
        <InputDate
          name="time"
          type="time"
          startValue={schedule.options.startTime}
          endValue={schedule.endTime}
          styles={styles.time}
          onCalendarChange={handleTimeChange}
        />
        <InputSelect
          name="teacher"
          options={scheduleOptions.teacher}
          styles={styles.teacher}
          isDisabled
        />
        <InputSelect
          name="classroom"
          options={scheduleOptions.classroom}
          styles={styles.classroom}
          isDisabled
        />
        <Error styles={styles.error}>
          Выбор преподавателя и аудитории не обязателен
        </Error>
      </div>
      <div className={styles.buttons_wrapper}>
        <Button
          variant="secondary"
          styles={styles.cancel_button}
        >
          Отмена
        </Button>
        <Button
          isSubmit
        >
          Добавить расписание
        </Button>
      </div>
    </form>
  );
}

export default observer(ScheduleForm);
