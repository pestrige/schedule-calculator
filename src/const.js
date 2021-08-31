const ACADEMIC_MINUTES = 45;
const ASTRONOMIC_MINUTES = 60;

export const COLORS = [
  { id: `${Math.random()}`, color: '#eef3f7' },
  { id: `${Math.random()}`, color: '#5c8cee' },
];

export const HourType = {
  academic: { value: 'academic', label: 'Академические', time: ACADEMIC_MINUTES },
  astronomic: { value: 'astronomic', label: 'Астрономические', time: ASTRONOMIC_MINUTES },
};
export const BreakTime = {
  0: { value: 0, label: 'Без перерыва' },
  5: { value: 5, label: '5 мин' },
  10: { value: 10, label: '10 мин' },
  15: { value: 15, label: '15 мин' },
  20: { value: 20, label: '20 мин' },
  30: { value: 30, label: '30 мин' },
};

export const Days = [
  { id: `${Math.random()}`, value: 1, label: 'ПН', checked: true },
  { id: `${Math.random()}`, value: 2, label: 'ВТ', checked: false },
  { id: `${Math.random()}`, value: 3, label: 'СР', checked: true },
  { id: `${Math.random()}`, value: 4, label: 'ЧТ', checked: false },
  { id: `${Math.random()}`, value: 5, label: 'ПТ', checked: true },
  { id: `${Math.random()}`, value: 6, label: 'СБ', checked: false },
  { id: `${Math.random()}`, value: 0, label: 'ВС', checked: false },
];

export const scheduleOptions = {
  groupColor: COLORS,
  hoursType: Object.values(HourType),
  breakTime: Object.values(BreakTime),
  teacher: [{ label: 'Выберите преподавателя на это время', value: 'teacher' }],
  classroom: [{ label: 'Аудитория', value: 'classroom' }],
};
