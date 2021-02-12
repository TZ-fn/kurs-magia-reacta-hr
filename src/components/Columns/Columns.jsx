import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import withCollapse from 'components/hoc/withCollapse';
import styles from './Columns.module.scss';

const Columns = ({ isCollapsed, toggle }) => {
  const columnsClass = cx('columns', {
    [styles.isCollapsed]: isCollapsed,
  });

  return (
    <>
      <button type='button' className='button is-dark is-large' onClick={toggle}>
        Collapse
      </button>
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
    </>
  );
};

Columns.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default withCollapse(Columns);
