import React from 'react';
import { render } from '@testing-library/react';
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

    expect(getByLabelText('Name')).toBeInTheDocument();
  });

  describe('Async methods', () => {
    it('works', async () => {});
  });
});
