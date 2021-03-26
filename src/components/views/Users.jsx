import React, { useState, useRef } from 'react';
import useDetectOutsideClick from 'components/hooks/useDetectOutsideClick';
import cs from 'classnames';

const Users = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const modalRef = useRef(null);

  useDetectOutsideClick(modalRef, setModalVisible);

  return (
    <div>
      <h2 className='title'>Users</h2>
      <button className='button is-primary' onClick={() => setModalVisible(true)} type='button'>
        Show modal
      </button>
      <div className={cs('modal', isModalVisible ? 'is-active' : '')}>
        <div className='modal-background' />
        <div ref={modalRef} className='modal-content'>
          <article className='message is-primary'>
            <div className='message-header'>
              <p>Hello World</p>
            </div>
            <div className='message-body'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
              sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
              Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </article>
        </div>
        <button
          onClick={() => setModalVisible(false)}
          type='button'
          className='modal-close is-large'
          aria-label='close'
        />
      </div>
    </div>
  );
};

export default Users;
