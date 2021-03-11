import React, { useState } from 'react';
import cx from 'classnames';
import styles from './Components.module.scss';

const Components = () => {
  const [inputContent, setInputContent] = useState('');
  const [isInputVisible, setIsInputVisible] = useState(true);

  const handleInputChange = (e) => {
    setInputContent(e.target.value);
  };

  return (
    <div>
      <h2 className='title is-3'>Components</h2>
      <div className={styles.wrapper}>
        {isInputVisible ? (
          <input
            name='name'
            type='text'
            className={cx('input', 'is-large', styles['margin-bottom'])}
            onChange={handleInputChange}
            value={inputContent}
          />
        ) : null}

        <button
          type='button'
          className={cx('button', 'is-warning', styles['margin-bottom'])}
          onClick={() => setIsInputVisible(!isInputVisible)}
        >
          {isInputVisible ? 'Hide input' : 'Show input'}
        </button>

        <div className='notification is-primary'>
          <button type='button' className='delete' aria-label='Close this notification.' />
          Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
          Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
          efficitur.
        </div>
      </div>
    </div>
  );
};

export default Components;
