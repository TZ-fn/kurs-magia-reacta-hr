import React, { useState, useReducer } from 'react';
import cx from 'classnames';
import styles from './Components.module.scss';

const Components = () => {
  const [inputsContent, setInputContent] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      itemInputContent: '',
      searchInputContent: '',
    },
  );
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
    setInputContent({ [e.target.name]: e.target.value });
  };

  const addNewItem = () => {
    if (inputsContent.itemInputContent.trim()) {
      const newItem = {
        id: itemsList.length + 1,
        content: inputsContent.itemInputContent,
      };
      setItemsList([...itemsList, newItem]);
      setInputContent({ itemInputContent: '' });
    }
  };

  const removeItem = (id) => {
    const newItemsList = itemsList.filter((item) => item.id !== id);
    setItemsList(newItemsList);
  };

  const filterTasks = () =>
    itemsList.filter((item) =>
      item.content.toLowerCase().includes(inputsContent.searchInputContent.toLowerCase()),
    );

  return (
    <div>
      <div className='container'>
        <div className={styles.wrapper}>
          <h2 className='title is-3'>To Do List</h2>
          <input
            name='itemInputContent'
            type='text'
            className={cx('input', styles.margin)}
            onChange={handleInputChange}
            value={inputsContent.itemInputContent}
            placeholder='Write your task...'
          />
          <div className={styles['search-container']}>
            <button
              type='button'
              className={cx('button', 'is-primary', styles.margin)}
              onClick={addNewItem}
            >
              Add a new item
            </button>
            <label htmlFor='searchInputContent'>
              Search by content
              <input
                name='searchInputContent'
                type='search'
                className={cx('input', styles.margin)}
                onChange={handleInputChange}
                value={inputsContent.searchInputContent}
                placeholder='Search for a task...'
              />
            </label>
          </div>

          <h3 className='title is-4'>To do&apos;s:</h3>
          {filterTasks().map((item) => {
            return (
              <div className={cx('notification', 'is-background', styles.item)} key={item.id}>
                <button
                  type='button'
                  className='delete'
                  aria-label='Close this notification.'
                  onClick={() => removeItem(item.id)}
                />
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
