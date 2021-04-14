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

  it('displays an error when digits are typed in', () => {
    const { getByLabelText, container } = render(<Input name='Name' label='Name' />);
    const input = getByLabelText(/name/i);
    fireEvent.change(input, { target: { value: 'Tomek' } });
    expect(container).not.toHaveTextContent(/error/i);
    fireEvent.change(input, { target: { value: 'Tomek123' } });
    expect(container).toHaveTextContent(/error/i);
  });

  describe('Async methods', () => {
    it('works', async () => {});
  });
});
