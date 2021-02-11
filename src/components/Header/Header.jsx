import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from 'components/Header/Header.module.scss';
import cx from 'classnames';

const Header = () => {
  const classList = cx('is-primary', styles.header);
  return (
    <header className={classList}>
      <h1 className='title is-primary'>Magia Reacta</h1>
      <h2 className='subtitle is-primary mb-6'>Kurs zaawansowany</h2>
      <div className='tabs is-centered'>
        <ul>
          <li>
            <NavLink to='/' className='button is-primary'>
              Documents
            </NavLink>
          </li>
          <li>
            <NavLink to='/tips' className='button is-primary'>
              Tips
            </NavLink>
          </li>
          <li>
            <NavLink to='/patterns' className='button is-primary'>
              Patterns
            </NavLink>
          </li>
          <li>
            <NavLink to='/components' className='button is-primary'>
              Components
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
