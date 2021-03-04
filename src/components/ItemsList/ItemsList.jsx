import React from 'react';
import cx from 'classnames';
import Collapse from 'components/providers/Collapse';
import styles from './ItemsList.module.scss';

const items = ['Document 1', 'Document 2', 'Document 3', 'Document 4'];

const ItemsList = () => {
  const listClass = (isCollapsed) =>
    cx(styles.list, {
      [styles.isCollapsed]: isCollapsed,
    });

  return (
    <Collapse
      render={({ toggle, isCollapsed }) => (
        <div>
          <button type='button' className='button is-dark is-large' onClick={toggle}>
            Collapse
          </button>
          <ul className={listClass(isCollapsed)}>
            {items.map((item) => {
              return (
                <li key={item} className='notification is-primary'>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    />
  );
};

export default ItemsList;
