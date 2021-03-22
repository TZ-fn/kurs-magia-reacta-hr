import React, { useEffect } from 'react';

const UseEffectSandbox = () => {
  useEffect(() => {
    const data = fetch('https://run.mocky.io/v3/d6b1b139-cb05-4c36-b751-6a6b316898a3');
    return data.then((response) => response.json()).then((items) => console.log(items));
  });

  return (
    <div>
      <h1 className='title is-3'>useEffect Sandbox</h1>
    </div>
  );
};

export default UseEffectSandbox;
