import React from 'react';
import { screen, render } from '@testing-library/react';
import LogoutModal from './index';

describe('LogoutModal Component', () => {
  it('should render', () => {
    render(<LogoutModal />);
    const button = screen.getByTestId('logoutButton');
    expect(button).toBeInTheDocument();
  });
});
