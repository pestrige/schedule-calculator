import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './group-name.module.scss';

export default function GroupName({ title, styles: style = '' }) {
  return (
    <span className={classNames(styles.title, style)}>
      {title}
    </span>
  );
}

GroupName.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.string,
};
