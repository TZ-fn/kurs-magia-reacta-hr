import React from 'react';
import Downshift from 'downshift';
import cx from 'classnames';

const items = [
  { value: 'apple' },
  { value: 'pear' },
  { value: 'orange' },
  { value: 'grape' },
  { value: 'banana' },
];
const Patterns = () => (
  <Downshift>
    {({ isOpen, inputValue, getInputProps }) => (
      <div className={cx('dropdown', { 'is-active': isOpen })}>
        <input
          className='input'
          type='text'
          placeholder='This is an input...'
          {...getInputProps()}
        />

        <div className='dropdown-menu'>
          <div className='dropdown-content'>
            {items
              .filter((item) => item.value.includes(inputValue))
              .map(({ value }) => (
                <button key={value} type='button' className='dropdown-item button is-white'>
                  {value}
                </button>
              ))}
          </div>
        </div>
      </div>
    )}
  </Downshift>
);

export default Patterns;
