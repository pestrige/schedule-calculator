import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './input-with-controls.module.scss';

export default function Control({ isIncrement = false, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        styles.control,
        { [styles.control__decrement]: !isIncrement },
        { [styles.control__increment]: isIncrement },
      )}
    >
      {isIncrement ? '+' : '-'}
    </button>
  );
}

Control.propTypes = {
  isIncrement: PropTypes.bool,
  onClick: PropTypes.func,
};
