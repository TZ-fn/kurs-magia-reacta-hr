import React from 'react';
import Input from '../Input/Input';
import AsyncTesting from '../AsyncTesting/AsyncTesting';

const TestingSandbox = () => (
  <div>
    <h2 className='title is-3'>Testing Sandbox</h2>
    <Input name='Name' label='Name' />
    <AsyncTesting />
  </div>
);

export default TestingSandbox;
