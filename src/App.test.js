import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

it('The App renders default view', () => {
  const divContainer = document.createElement('div');
  ReactDOM.render(<App />, divContainer);
  const appDiv = divContainer.querySelector('.app');
  expect(appDiv.innerHTML).toContain('Documents');
});
