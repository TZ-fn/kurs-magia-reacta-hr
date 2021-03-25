import React, { useState } from 'react';

const Users = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModalVisibility = () => {
    setModalVisible(() => !isModalVisible);
  };

  return (
    <div>
      <h2 className='title'>Users</h2>
      <button className='button is-primary' onClick={toggleModalVisibility} type='button'>
        Show modal
      </button>
      <div className={`modal ${isModalVisible ? 'is-active' : ''}`}>
        <div className='modal-background' />
        <div className='modal-content'>
          <article className='message is-primary'>
            <div className='message-header'>
              <p>Hello World</p>
            </div>
            <div className='message-body'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
              sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
              Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </article>
        </div>
        <button
          onClick={toggleModalVisibility}
          type='button'
          className='modal-close is-large'
          aria-label='close'
        />
      </div>
    </div>
  );
};

export default Users;
