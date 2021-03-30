import React from 'react';
import PropTypes from 'prop-types';

export const Page = ({ children }) => <div>{children}</div>;

export const Controls = () => (
  <div>
    <button className='button' type='button'>
      Back
    </button>
    <button className='button' type='button'>
      Next
    </button>
    <button className='button' type='button'>
      Submit
    </button>
  </div>
);

const MultiStep = ({ children }) => {
  return <div>{children}</div>;
};

MultiStep.propTypes = {
  children: PropTypes.element.isRequired,
};

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MultiStep;
