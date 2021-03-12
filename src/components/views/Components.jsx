import React, { useState } from 'react';
import cx from 'classnames';
import styles from './Components.module.scss';

const Components = () => {
  const [inputContent, setInputContent] = useState('');
  const [itemsList, setItemsList] = useState([
    {
      id: 0,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui autem laudantium quidem tenetur placeat beatae tempora sint iusto molestias consectetur magni, assumenda incidunt.',
    },
    {
      id: 1,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui autem laudantium quidem tenetur placeat beatae tempora sint iusto molestias consectetur magni, assumenda incidunt.',
    },
  ]);

  const handleInputChange = (e) => {
    setInputContent(e.target.value);
  };

  return (
    <div>
      <div className='container'>
        <div className={styles.wrapper}>
          <h2 className='title is-3'>To Do List</h2>
          <input
            name='name'
            type='text'
            className={cx('input', styles['margin-bottom'])}
            onChange={handleInputChange}
            value={inputContent}
            placeholder='Write your task...'
          />

          <button
            type='button'
            className={cx('button', 'is-primary', styles['margin-bottom'])}
            onClick={setItemsList}
          >
            Add a new item
          </button>
          <h3 className='title is-4'>To do&apos;s:</h3>
          {itemsList.map((item) => {
            return (
              <div className='notification is-background'>
                <button type='button' className='delete' aria-label='Close this notification.' />
                {item.content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Components;
