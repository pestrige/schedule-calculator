import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './error.module.scss';

export default function Error({ children, styles: style = '' }) {
  return (
    <div className={classNames(styles.error, style)}>
      {children}
    </div>
  );
}

Error.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.string,
};
