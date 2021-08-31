import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './button.module.scss';

export default function Button({ isSubmit = false, variant = '', styles: style = '', children }) {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={classNames(
        styles.button,
        style,
        { [styles.button__secondary]: variant === 'secondary' },
      )}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  isSubmit: PropTypes.bool,
  variant: PropTypes.string,
  styles: PropTypes.string,
  children: PropTypes.node.isRequired,
};
