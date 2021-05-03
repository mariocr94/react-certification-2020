import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import LogoutModal from './index';

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
describe('LogoutModal Component', () => {
  beforeEach(() => {
    render(
      <Router history={history}>
        <LogoutModal />
      </Router>
    );
  });
  it('should render LogoutModal', () => {
    const button = screen.getByTestId('logoutButton');
    expect(button).toBeInTheDocument();
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
