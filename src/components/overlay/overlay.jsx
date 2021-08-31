import React from 'react';
import PropTypes from 'prop-types';
import styles from './overlay.module.scss';

export default function Overlay({ children }) {
  return (
    <div className={styles.overlay}>
      {children}
    </div>
  );
}

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
};
