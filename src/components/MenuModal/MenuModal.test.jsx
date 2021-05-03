import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import MenuModal from './index';
import { AppContext } from '../../context/AppProvider';

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
  createHref: jest.fn(),
};

describe('Menu Component', () => {
  it('should render home only', () => {
    const state = {
      isLogged: false,
    };
    render(
      <AppContext.Provider value={{ state }}>
        <Router history={history}>
          <MenuModal />
        </Router>
      </AppContext.Provider>
    );
    expect(screen.queryByText(/home/i)).toBeInTheDocument();
    expect(screen.queryByText(/favourites/i)).not.toBeInTheDocument();
  });
  it('should render home and favourites', () => {
    const state = {
      isLogged: true,
    };
    render(
      <AppContext.Provider value={{ state }}>
        <Router history={history}>
          <MenuModal />
        </Router>
      </AppContext.Provider>
    );
    expect(screen.queryByText(/home/i)).toBeInTheDocument();
    expect(screen.queryByText(/favourites/i)).toBeInTheDocument();
  });
  it('should trigger goback if clicked outside', () => {
    const state = {
      isLogged: true,
    };
    render(
      <AppContext.Provider value={{ state }}>
        <Router history={history}>
          <MenuModal />
        </Router>
      </AppContext.Provider>
    );
    const outside = screen.getByTestId('outside');
    userEvent.click(outside);
    expect(history.goBack).toHaveBeenCalled();
  });
  it('should not trigger goback if clicked inside', () => {
    const state = {
      isLogged: true,
    };
    render(
      <AppContext.Provider value={{ state }}>
        <Router history={history}>
          <MenuModal />
        </Router>
      </AppContext.Provider>
    );
    const outside = screen.getByTestId('inside');
    userEvent.click(outside);
    expect(history.goBack).not.toHaveBeenCalled();
  });
  it('should trigger goback with Esc key', () => {
    const state = {
      isLogged: true,
    };
    render(
      <AppContext.Provider value={{ state }}>
        <Router history={history}>
          <MenuModal />
        </Router>
      </AppContext.Provider>
    );
    fireEvent.keyDown(document, { keyCode: 27 });
    expect(history.goBack).toHaveBeenCalled();
  });
  it('should not trigger goback with any key', () => {
    const state = {
      isLogged: true,
    };
    render(
      <AppContext.Provider value={{ state }}>
        <Router history={history}>
          <MenuModal />
        </Router>
      </AppContext.Provider>
    );
    fireEvent.keyDown(document, { keyCode: 26 });
    expect(history.goBack).not.toHaveBeenCalled();
  });
});
