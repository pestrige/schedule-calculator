import React from 'react';
import ScheduleForm from '../schedule-form/schedule-form';
import ButtonClose from '../button-close/button-close';
import styles from './schedule.module.scss';
import Title from '../title/title';

export default function Schedule() {
  return (
    <div className={styles.wrapper}>
      <Title>
        Редактирование расписания
      </Title>
      <ScheduleForm />
      <ButtonClose onClose={() => {}} />
    </div>
  );
}
