import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import LoginModal from './index';

const history = {
  push: jest.fn(),
  listen: jest.fn(),
  goBack: jest.fn(),
  location: {
    pathname: '',
    search: '',
    state: '',
    hash: '',
  },
};

describe('LoginModal', () => {
  beforeEach(() => {
    render(
      <Router history={history}>
        <LoginModal />
      </Router>
    );
  });
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
  it('should trigger goback if clicked outside', () => {
    const outside = screen.getByTestId('outside');
    userEvent.click(outside);
    expect(history.goBack).toHaveBeenCalled();
  });
  it('should not trigger goback if clicked inside', () => {
    const outside = screen.getByTestId('inside');
    userEvent.click(outside);
    expect(history.goBack).not.toHaveBeenCalled();
  });
  it('should trigger goback with Esc key', () => {
    fireEvent.keyDown(document, { keyCode: 27 });
    expect(history.goBack).toHaveBeenCalled();
  });
  it('should not trigger goback with any key', () => {
    fireEvent.keyDown(document, { keyCode: 26 });
    expect(history.goBack).not.toHaveBeenCalled();
  });
});
