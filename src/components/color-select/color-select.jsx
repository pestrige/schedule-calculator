import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './color-select.module.scss';
import List from './list';

export default function ColorSelect({ options, title, styles: style = '' }) {
  const listShown = false; // TODO: add state and clickHandler to hide/show colors list

  return (
    <div className={classNames(styles.wrapper, style)}>
      <span className={styles.title}>
        {`${title}:`}
      </span>
      <div className={styles.inner}>
        <button
          type="button"
          className={styles.select}
        >
          <span className={styles.active} />
        </button>
        {listShown && <List items={options} />}
      </div>
    </div>
  );
}

ColorSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    color: PropTypes.string,
  })).isRequired,
  title: PropTypes.string.isRequired,
  styles: PropTypes.string,
};
