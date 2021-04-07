import React, { useState, useContext, useEffect } from 'react';
import PropTypes, { element } from 'prop-types';

const WizardContext = React.createContext({
  currentPage: 1,
  changePage: () => {},
  pageIndexes: [],
  updatePageIndexes: () => {},
});

const Page = ({ children, pageIndex }) => {
  const { currentPage, updatePageIndexes } = useContext(WizardContext);

  useEffect(() => {
    updatePageIndexes(pageIndex);
  });

  return currentPage === pageIndex ? children : null;
};

const ProgressBar = () => {
  const { currentPage, pageIndexes } = useContext(WizardContext);

  return (
    <progress className='progress is-primary' value={currentPage} max={pageIndexes.length}>
      {Math.round((currentPage / pageIndexes.length) * 100)}%
    </progress>
  );
};

const Controls = () => {
  const context = useContext(WizardContext);
  const { changePage, currentPage, pageIndexes } = context;

  return (
    <div>
      <button
        disabled={currentPage === 1}
        onClick={() => changePage(-1)}
        className='button is-primary'
        type='button'
      >
        Back
      </button>

      <button
        disabled={currentPage === pageIndexes.length}
        onClick={() => changePage(1)}
        className='button is-primary'
        type='button'
      >
        Next
      </button>

      {currentPage === pageIndexes.length && (
        <button className='button is-success' type='button'>
          Submit
        </button>
      )}
    </div>
  );
};

const Wizard = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageIndexes, setPageIndexes] = useState([]);

  const updatePageIndexes = (pageIndex) => {
    if (pageIndexes.includes(pageIndex)) {
      return;
    }
    setPageIndexes([...pageIndexes, pageIndex]);
  };

  const changePage = (newPageIndex) => {
    setCurrentPage((oldPageIndex) => oldPageIndex + newPageIndex);
  };

  return (
    <WizardContext.Provider value={{ currentPage, changePage, pageIndexes, updatePageIndexes }}>
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

export { Page, ProgressBar, Controls, Wizard };
