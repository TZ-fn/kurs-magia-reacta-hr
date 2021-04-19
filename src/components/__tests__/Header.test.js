import React from 'react';
import { fireEvent } from '@testing-library/react';
import Header from '../Header/Header';
import renderWithRouter from '../utils/renderWithRouter';
import LangContext from '../../context';

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

  it('language control buttons call proper function with proper arguments', () => {
    const mockedContext = {
      currentLanguage: 'en',
      setLanguage: jest.fn(),
    };

    const { getByText } = renderWithRouter(
      <LangContext.Provider value={mockedContext}>
        <Header />
      </LangContext.Provider>,
    );

    fireEvent.click(getByText('EN'));
    fireEvent.click(getByText('PL'));
    expect(mockedContext.setLanguage).toBeCalledTimes(2);
    expect(mockedContext.setLanguage).toBeCalledWith('en');
    expect(mockedContext.setLanguage).toBeCalledWith('pl');
  });
});
