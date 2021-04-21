import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, age }) => (
  <div key={name}>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default User;
