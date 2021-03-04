import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
// import Collapse from 'components/providers/Collapse';
// import withAuth from 'components/hoc/withAuth';
import styles from './Columns.module.scss';

const Columns = ({ isCollapsed, toggle, isAuthorised, toggleAuth }) => {
  const columnsClass = cx('columns', {
    [styles.isCollapsed]: isCollapsed,
  });

  return (
    <>
      <button type='button' className='button is-dark is-large' onClick={toggle}>
        Collapse
      </button>
      <button type='button' className='button is-warning is-large' onClick={toggleAuth}>
        {isAuthorised ? 'Logout' : 'Login'}
      </button>
      <h2 className='title is-4'>Authorised: {isAuthorised.toString()}</h2>
      {isAuthorised ? (
        <div className={columnsClass}>
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
  );
};

Columns.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  isAuthorised: PropTypes.bool.isRequired,
  toggleAuth: PropTypes.func.isRequired,
};

export default Columns;
