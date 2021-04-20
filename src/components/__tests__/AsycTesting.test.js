import React from 'react';
import axios from 'axios';
import { render, findByText } from '@testing-library/react';
import AsyncTesting from '../AsyncTesting/AsyncTesting';

jest.mock('axios');

describe('Users view', () => {
  it('displays loading indicator', () => {
    const { getByText } = render(<AsyncTesting />);
    expect(getByText(/loading/i)).toBeInTheDocument();
  });

  it("displays users' data", async () => {
    axios.get.mockResolvedValue({ data: [{ name: 'Tomek', age: 32 }] });
    const container = render(<AsyncTesting />);
    const userInfo = await container.findByText(/Name/);
    expect(userInfo).toBeInTheDocument();
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
