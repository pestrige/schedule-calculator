import React from 'react';
import PropTypes from 'prop-types';
import styles from './title.module.scss';

export default function Title({ children }) {
  return (
    <h2 className={styles.title}>
      {children}
    </h2>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
