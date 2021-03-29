import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <section className='hero is-primary'>
      <div className='hero-body'>
        <div className='container has-text-centered is-centered'>
          <h1 className='title'>Magia Reacta</h1>
          <h2 className='subtitle'>Kurs zaawansowany</h2>
        </div>
      </div>
      <div className='hero-foot'>
        <nav className='tabs is-centered'>
          <div className='container'>
            <ul>
              <li>
                <NavLink to='/'>Documents</NavLink>
              </li>
              <li>
                <NavLink to='/tips'>Tips</NavLink>
              </li>
              <li>
                <NavLink to='/patterns'>Patterns</NavLink>
              </li>
              <li>
                <NavLink to='/components'>Components</NavLink>
              </li>
              <li>
                <NavLink to='/useEffectSandbox'>UseEffectSandbox</NavLink>
              </li>
              <li>
                <NavLink to='/useRefSandbox'>UseRefSandbox</NavLink>
              </li>
              <li>
                <NavLink to='/users'>Users</NavLink>
              </li>
              <li>
                <NavLink to='/compoundComponents'>CompoundComponents</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
