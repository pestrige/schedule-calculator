import React from 'react';
import PropTypes from 'prop-types';
import styles from './button-close.module.scss';

export default function ButtonClose({ onClose }) {
  return (
    <button
      className={styles.close}
      type="button"
      onClick={onClose}
      aria-label="Закрыть"
    />
  );
}

ButtonClose.propTypes = {
  onClose: PropTypes.func.isRequired,
};
