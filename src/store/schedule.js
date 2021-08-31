import { makeAutoObservable } from 'mobx';
import { BreakTime, Days, HourType } from '../const';
import { calcEndDate, calcEndTime, formatDate, formatSelectedDays } from '../utils/utils';

const MIN_TOTAL_HOURS = 3;
const MIN_DAY_HOURS = 1;
const MAX_DAY_HOURS = 8;
const START_TIME = '07:00';

class Schedule {
  options = {
    groupName: 'Онлайн-школа',
    hoursType: HourType.academic,
    totalHours: MIN_TOTAL_HOURS,
    dayHours: MIN_DAY_HOURS,
    startDate: new Date(),
    startTime: START_TIME,
    breakTime: BreakTime[0],
    selectedDays: Days,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setHoursType(type) {
    this.options.hoursType = type;
  }

  setTotalHours(value) {
    this.options.totalHours = value;
  }

  incrementTotalHours() {
    this.options.totalHours += 1;
  }

  decrementTotalHours() {
    if (this.options.totalHours > MIN_TOTAL_HOURS) {
      this.options.totalHours -= 1;
    }
  }

  setDayHours(value) {
    if (value > MAX_DAY_HOURS) {
      return;
    }
    this.options.dayHours = value;
  }

  incrementDayHours() {
    if (this.options.dayHours >= MAX_DAY_HOURS) {
      return;
    }
    this.options.dayHours += 0.5;
  }

  decrementDayHours() {
    if (this.options.dayHours > MIN_DAY_HOURS) {
      this.options.dayHours -= 0.5;
    }
  }

  setStartDay(date) {
    this.options.startDate = date;
  }

  setStartTime(time) {
    this.options.startTime = time;
  }

  setBreakTime(value) {
    this.options.breakTime = value;
  }

  toggleDays(type) {
    this.options.selectedDays = this.options.selectedDays.map((day) => (
      type.includes(day.label)
        ? { ...day, checked: true }
        : { ...day, checked: false }
    ));
  }

  setSelectedDay(label) {
    this.options.selectedDays = this.options.selectedDays.map((day) => (
      label === day.label
        ? { ...day, checked: !day.checked }
        : day
    ));
  }

  get endTime() {
    return calcEndTime(
      this.options.hoursType.time,
      this.options.dayHours,
      this.options.breakTime.value,
      this.options.startTime,
    );
  }

  get endDate() {
    return calcEndDate(
      this.options.totalHours,
      this.options.dayHours,
      this.options.startDate,
      this.options.selectedDays,
    );
  }

  get data() {
    return {
      group_name: this.options.groupName,
      hours_type: this.options.hoursType.value,
      total_hours: this.options.totalHours,
      day_hours: this.options.dayHours,
      start_date: formatDate(this.options.startDate),
      end_date: this.endDate,
      start_time: this.options.startTime,
      end_time: this.endTime,
      break_time: this.options.breakTime.value,
      selected_days: formatSelectedDays(this.options.selectedDays),
    };
  }
}

export default new Schedule();
