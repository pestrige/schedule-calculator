import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Control from './control';
import styles from './input-with-controls.module.scss';

export default function InputWithControls({
  name,
  label,
  styles: style = '',
  value,
  onChange,
  onIncrement,
  onDecrement,
}) {
  const handleChange = (evt) => {
    onChange(+evt.target.value);
  };

  return (
    <fieldset className={classNames(styles.wrapper, style)}>
      <Control onClick={onDecrement} />
      <input
        type="number"
        name={name}
        id={name}
        className={styles.input}
        value={value}
        onChange={handleChange}
      />
      <label
        htmlFor={name}
        className={styles.label}
      >
        {label}
      </label>
      <Control isIncrement onClick={onIncrement} />
    </fieldset>
  );
}

InputWithControls.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  label: PropTypes.string.isRequired,
  styles: PropTypes.string,
};
