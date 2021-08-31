import React from 'react';
import PropTypes from 'prop-types';
import styles from './weekdays.module.scss';

export default function DayToggleButton({ children, onClick }) {
  const handleClick = () => {
    onClick(children);
  };

  return (
    <button
      className={styles.toggle_button}
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

DayToggleButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
