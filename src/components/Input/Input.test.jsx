import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';

describe('Input component', () => {
  it('renders input element', () => {
    const { getAllByPlaceholderText } = render(<Input />);

    expect(getAllByPlaceholderText('name')).toBeInTheDocument();
  });

  describe('Async methods', () => {
    it('works', async () => {});
  });
});
