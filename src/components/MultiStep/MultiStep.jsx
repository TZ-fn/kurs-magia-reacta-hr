import React, { useState, useContext } from 'react';
import PropTypes, { element } from 'prop-types';

const WizardContext = React.createContext({
  currentPage: 1,
  changePage: () => {},
});

const Page = ({ children }) => <div>{children}</div>;

const Controls = () => {
  const context = useContext(WizardContext);
  const { changePage } = context;

  return (
    <div>
      <button onClick={() => changePage(-1)} className='button' type='button'>
        Back
      </button>
      <button onClick={() => changePage(1)} className='button' type='button'>
        Next
      </button>
      <button className='button' type='button'>
        Submit
      </button>
    </div>
  );
};

const Wizard = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (newPageIndex) => {
    setCurrentPage((oldPageIndex) => oldPageIndex + newPageIndex);
  };

  return (
    <WizardContext.Provider value={{ currentPage, changePage }}>
      {children}
      <p>{currentPage}</p>
    </WizardContext.Provider>
  );
};

Wizard.propTypes = {
  children: PropTypes.arrayOf(element).isRequired,
};

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

export { Page, Controls, Wizard };
