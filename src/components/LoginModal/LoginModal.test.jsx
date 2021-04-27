import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginModal from './index';

beforeEach(() => {
  render(<LoginModal />);
});
describe('LoginModal', () => {
  it('should render LoginModal', () => {
    expect(screen.getByTestId('username')).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeInTheDocument();
  });
  it('should show username and password value', () => {
    const user = screen.getByTestId('username');
    const pw = screen.getByTestId('password');
    userEvent.type(user, 'userTest');
    userEvent.type(pw, 'passwordTest');
    expect(user).toHaveValue('userTest');
    expect(pw).toHaveValue('passwordTest');
  });
});
