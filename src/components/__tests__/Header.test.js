import React from 'react';
import Header from '../Header/Header';
import renderWithRouter from '../utils/renderWithRouter';

describe('Header component', () => {
  it('displays language controls', () => {
    const { getByText } = renderWithRouter(<Header />);
    expect(getByText(/^pl/i)).toBeInTheDocument();
    expect(getByText(/^en/i)).toBeInTheDocument();
  });

  it('displays the default language correctly', () => {
    const { getByText } = renderWithRouter(<Header />);
    expect(getByText(/current language is: en/i)).toBeInTheDocument();
  });
});