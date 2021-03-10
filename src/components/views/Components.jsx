import React, { useState } from 'react';

const Components = () => {
  const [counter, setCounter] = useState(0);
  const [isCounterVisible, setIsCounterVisible] = useState(true);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2 className='title is-3'>Components</h2>
      <button
        type='button'
        className='button'
        onClick={() => setIsCounterVisible(!isCounterVisible)}
      >
        Show counter
      </button>
      {isCounterVisible ? <p className>{counter}</p> : null}
      <button type='button' className='button' onClick={incrementCounter}>
        Increment
      </button>
    </div>
  );
};

export default Components;
