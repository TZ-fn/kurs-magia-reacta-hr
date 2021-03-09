import React, { useState } from 'react';

const Components = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2 className='title is-3'>Components</h2>
      <p className>{counter}</p>
      <button type='button' className='button' onClick={incrementCounter}>
        Increment
      </button>
    </div>
  );
};

export default Components;
