import React from 'react';
import PropTypes from 'prop-types';

const MultiStep = ({ children }) => {
  return (
    <div>
      <h2 className='title is-3'>MultiStep</h2>
      {children}
    </div>
  );
};

MultiStep.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MultiStep;
