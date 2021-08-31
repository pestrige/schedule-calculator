import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { observer } from 'mobx-react-lite';

function InputSelect({
  name,
  options,
  isDisabled = false,
  styles: style = '',
  onChange,
}) {
  return (
    <Select
      onChange={onChange}
      name={name}
      isDisabled={isDisabled}
      defaultValue={options[0]}
      options={options}
      isClearable={false}
      isSearchable={false}
      className={style}
      styles={{ control: (provided) => ({ ...provided, minHeight: 44 }) }}
    />
  );
}

InputSelect.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  styles: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  })),
};

export default observer(InputSelect);
