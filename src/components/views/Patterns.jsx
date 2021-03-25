import React, { useState } from 'react';
import Downshift from 'downshift';
import cx from 'classnames';

const items = [
  { value: 'apple' },
  { value: 'pear' },
  { value: 'orange' },
  { value: 'grape' },
  { value: 'banana' },
];
const Patterns = () => {
  const [isTooltipOpen, setTooltipVisibility] = useState(false);
  const toggleTooltipVisibility = () => {
    setTooltipVisibility(!isTooltipOpen);
  };

  return (
    <div>
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

      <button onClick={toggleTooltipVisibility} type='button' className='button is-warning'>
        Open tooltip
      </button>
      {isTooltipOpen && (
        <div className='notification is-warning'>
          Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
          Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis
          venenatis efficitur.
        </div>
      )}
    </div>
  );
};

export default Patterns;
