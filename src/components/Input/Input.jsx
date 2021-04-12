import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, label, placeholder }) => (
  <>
    <label htmlFor={name}>{label}</label>
    <input name={name} id={name} placeholder={placeholder} />;
  </>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
};

Input.defaultProps = {
  placeholder: 'Your Name',
};

export default Input;
