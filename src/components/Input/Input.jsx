import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, label, placeholder }) => {
  const [inputValue, setInputValue] = useState('');
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false);

  const handleInput = ({ target: { value } }) => {
    if (/[0-9]/g.test(value)) {
      setIsErrorMessageVisible(true);
    } else {
      setIsErrorMessageVisible(false);
      setInputValue(value);
    }
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
      {isErrorMessageVisible && <div>Error: You can&apos;t pass digits into the input.</div>}
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
