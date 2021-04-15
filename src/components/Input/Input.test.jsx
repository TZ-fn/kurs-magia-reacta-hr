import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

const renderInput = (props) => {
  const utils = render(<Input name='Name' label='Name' {...props} />);
  const input = utils.getByLabelText(/name/i);
  return { ...utils, input };
};

describe('Input component', () => {
  it('renders input element', () => {
    const { input } = renderInput();
    expect(input).toBeInTheDocument();
  });

  it('displays placeholder properly', () => {
    // custom placeholder
    let placeholderText = 'Name';
    const { getByPlaceholderText, rerender } = renderInput({ placeholder: placeholderText });
    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();

    // default placeholder
    placeholderText = Input.defaultProps.placeholder;
    rerender(<Input name='Name' label='Name' />);
    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });

  it('displays proper value', () => {
    const { input } = renderInput();
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'Tomek' } });
    expect(input).toHaveValue('Tomek');
  });

  it('displays an error when digits are typed in', () => {
    const { input, container } = renderInput();
    fireEvent.change(input, { target: { value: 'Tomek' } });
    expect(container).not.toHaveTextContent(/error/i);
    fireEvent.change(input, { target: { value: 'Tomek123' } });
    expect(container).toHaveTextContent(/error/i);
  });

  describe('Async methods', () => {
    it('works', async () => {});
  });
});
