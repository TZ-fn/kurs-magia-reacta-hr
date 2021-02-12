import React from 'react';
import cx from 'classnames';
import withCollapse from 'components/hoc/withCollapse';
import PropTypes from 'prop-types';
import styles from './ItemsList.module.scss';

const items = ['Document 1', 'Document 2', 'Document 3', 'Document 4'];

const ItemsList = ({ isCollapsed, toggle }) => {
  const listClass = cx(styles.list, {
    [styles.isCollapsed]: isCollapsed,
  });

  return (
    <div>
      <button type='button' className='button is-dark is-large' onClick={toggle}>
        Collapse
      </button>
      <ul className={listClass}>
        {items.map((item) => {
          return (
            <li key={item} className='notification is-primary'>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default withCollapse(ItemsList);
