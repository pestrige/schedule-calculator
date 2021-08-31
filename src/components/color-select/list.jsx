import React from 'react';
import PropTypes from 'prop-types';
import styles from './color-select.module.scss';

export default function List({ items }) {
  return (
    <ul className={styles.list}>
      {items.map(({ id, color }) => (
        <li
          key={id}
          className={styles.item}
          style={{
            backgroundColor: color,
          }}
        />
      ))}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
};
