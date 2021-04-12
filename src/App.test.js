import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('The App renders the default view', () => {
  const divContainer = document.createElement('div');
  ReactDOM.render(<App />, divContainer);
  const appDiv = divContainer.querySelector('.app');
  expect(appDiv.innerHTML).toContain('Documents');
});
