/* eslint-disable */
import React from 'react';

const MyComponent = ({ children }) => (
  <div>
    <p>Hello World!</p>
    {children('Roman')}
  </div>
);

const Patterns = () => (
  <div>
    <h2 className='title is-3'>Patterns</h2>
    <MyComponent>{(arg) => arg}</MyComponent>
  </div>
);

export default Patterns;
