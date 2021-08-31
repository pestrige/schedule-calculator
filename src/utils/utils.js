import dayjs from 'dayjs';

const MINUTES_IN_HOUR = 60;

const toMinutes = (value) => {
  const hours = +value.slice(0, 2);
  const minutes = +value.slice(3);
  return hours * MINUTES_IN_HOUR + minutes;
};

const formatTime = (time) => {
  const hours = Math.trunc(time / MINUTES_IN_HOUR);
  const minutes = time % MINUTES_IN_HOUR;
  const formattedHours = `0${hours}`.slice(-2);
  const formattedMinutes = `0${minutes}`.slice(-2);

  return `${formattedHours}:${formattedMinutes}`;
};

const getSelectedDayNumbers = (days) => {
  const selected = days.reduce((acc, day) => {
    if (day.checked) {
      acc.push(day.value);
    }
    return acc;
  }, []);

  return selected.sort();
};

export const formatSelectedDays = (days) => days.reduce((acc, day) => {
  acc.push({ id: day.id, label: day.label, value: day.value, checked: day.checked });
  return acc;
}, []);

export const formatDate = (date) => dayjs(date).format('DD.MM.YYYY');
export const formatDateToISO = (date) => dayjs(date).toISOString();

export const calcEndTime = (hoursType, hours, breakTime, startTime) => {
  const startTimeInMinutes = toMinutes(startTime);
  const result = Math.round(hoursType * hours + breakTime + startTimeInMinutes);

  return formatTime(result);
};

export const calcEndDate = (totalHours, dayHours, startDate, days) => {
  const totalDays = Math.ceil(totalHours / dayHours);
  const selectedDays = getSelectedDayNumbers(days);

  let endDate = startDate;
  let i = 0;

  while (i < totalDays) {
    endDate = dayjs(endDate).add(1, 'day');
    const weekday = dayjs(endDate).day();
    if (selectedDays.includes(weekday)) {
      i += 1;
    }
  }

  return formatDate(endDate);
};
