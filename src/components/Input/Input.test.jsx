import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input component', () => {
  it('renders input element', () => {
    const placeholderText = 'Name';
    const { getByPlaceholderText } = render(
      <Input placeholder={placeholderText} name='Name' label='Name' />,
    );

    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });

  it('displays placeholder properly', () => {
    // custom placeholder
    let placeholderText = 'Name';
    const { getByPlaceholderText, rerender } = render(
      <Input placeholder={placeholderText} name='Name' label='Name' />,
    );
    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();

    // default placeholder
    placeholderText = Input.defaultProps.placeholder;
    rerender(<Input name='Name' label='Name' />);
    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });

  it('displays proper value', () => {
    const { getByLabelText } = render(<Input name='Name' label='Name' />);
    const input = getByLabelText(/name/i);
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'Tomek' } });
    expect(input).toHaveValue('Tomek');
  });

  it('prevents user from typing in numbers', () => {
    const { getByLabelText } = render(<Input name='Name' label='Name' />);
    const input = getByLabelText(/name/i);

    fireEvent.change(input, { target: { value: 'Tomek123' } });
    expect(input).toHaveValue('Tomek');

    fireEvent.change(input, { target: { value: '123Tomek123' } });
    expect(input).toHaveValue('Tomek');

    fireEvent.change(input, { target: { value: '0To1me3k123' } });
    expect(input).toHaveValue('Tomek');
  });

  describe('Async methods', () => {
    it('works', async () => {});
  });
});
