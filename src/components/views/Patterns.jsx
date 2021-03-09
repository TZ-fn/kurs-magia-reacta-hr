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
    {({ isOpen, inputValue, getInputProps, getMenuProps, getItemProps, selectedItem }) => (
      <div className={cx('dropdown', { 'is-active': isOpen })}>
        <input
          className='input'
          type='text'
          placeholder='This is an input...'
          {...getInputProps()}
        />

        <div className='dropdown-menu' {...getMenuProps()}>
          <div className='dropdown-content'>
            {items
              .filter((item) => item.value.includes(inputValue))
              .map(({ value }, index) => (
                <button
                  key={value}
                  type='button'
                  className={cx('dropdown-item', 'button', 'is-white', {
                    'is-active': value === selectedItem,
                  })}
                  {...getItemProps({
                    key: value,
                    index,
                    item: value,
                  })}
                >
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
