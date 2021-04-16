import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import LangContext from '../../context';
import flagPL from '../../assets/img/poland-flag-icon.png';
import flagUK from '../../assets/img/united-kingdom-flag-icon.png';

const Header = () => {
  const { currentLanguage } = useContext(LangContext);

  return (
    <section className='hero is-primary'>
      <div className='hero-body'>
        <div className='container has-text-centered is-centered'>
          <h1 className='title'>Magia Reacta</h1>
          <h2 className='subtitle'>Kurs zaawansowany</h2>
        </div>
        <div>
          <button type='button' className='button is-primary is-light'>
            PL
            <img src={flagPL} alt='Flag of Poland' />
          </button>
          <button type='button' className='button is-primary is-light'>
            EN
            <img src={flagUK} alt='Flag of United Kingdom' />
          </button>
        </div>
        <p>Current language is: {currentLanguage.toUpperCase()}</p>
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
              <li>
                <NavLink to='/multiStepView'>MultiStep View</NavLink>
              </li>
              <li>
                <NavLink to='/testingSandbox'>Testing Sandbox</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
