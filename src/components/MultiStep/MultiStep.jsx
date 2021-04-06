import React, { useState, useContext } from 'react';
import PropTypes, { element } from 'prop-types';

const WizardContext = React.createContext({
  currentPage: 1,
  changePage: () => {},
});

const Page = ({ children, pageIndex }) => {
  const { currentPage } = useContext(WizardContext);
  return currentPage === pageIndex ? children : null;
};

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
      {/* <button className='button' type='button'>
        Submit
      </button> */}
    </div>
  );
};

const Wizard = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (newPageIndex) => {
    if ((currentPage === 3 && newPageIndex === 1) || (currentPage === 1 && newPageIndex === -1)) {
      return;
    }
    setCurrentPage((oldPageIndex) => oldPageIndex + newPageIndex);
  };

  const totalPagesNumber = React.Children.map(children, (child) => child.props.pageIndex).length;

  return (
    <WizardContext.Provider value={{ currentPage, changePage }}>
      {totalPagesNumber}
      {children}
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
