import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, label, placeholder }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = ({ target: { value } }) => {
    const regex = /[0-9]/g;
    setInputValue(value.replace(regex, ''));
  };

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <br />
      <input
        onChange={handleInput}
        name={name}
        id={name}
        placeholder={placeholder}
        value={inputValue}
      />
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: 'Your Name',
};

export default Input;
