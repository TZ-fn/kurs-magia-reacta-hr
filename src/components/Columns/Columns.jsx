import React from 'react';
import cx from 'classnames';
import styles from './Columns.module.scss';
import Authorisation from '../providers/Authorisation';
import Collapse from '../providers/Collapse';

const Columns = () => {
  const columnsClass = (isCollapsed) =>
    cx('columns', {
      [styles.isCollapsed]: isCollapsed,
    });

  return (
    <Collapse
      render={({ isCollapsed, toggle }) => (
        <Authorisation
          render={({ isAuthorised, toggleAuth }) => (
            <>
              <button type='button' className='button is-dark is-large' onClick={toggle}>
                Collapse
              </button>
              <button type='button' className='button is-warning is-large' onClick={toggleAuth}>
                {isAuthorised ? 'Logout' : 'Login'}
              </button>
              <h2 className='title is-4'>Authorised: {isAuthorised.toString()}</h2>
              {isAuthorised ? (
                <div className={columnsClass(isCollapsed)}>
                  <div className='column'>
                    <div className='notification is-primary'>First column</div>
                  </div>
                  <div className='column'>
                    <div className='notification is-primary'>Second column</div>
                  </div>
                  <div className='column'>
                    <div className='notification is-primary'>Third column</div>
                  </div>
                  <div className='column'>
                    <div className='notification is-primary'>Forth column</div>
                  </div>
                </div>
              ) : (
                <h2 className='title is-2'>Please login to continue.</h2>
              )}
            </>
          )}
        />
      )}
    />
  );
};

export default Columns;
