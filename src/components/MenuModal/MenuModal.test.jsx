import React from 'react';
import { screen, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import MenuModal from './index';
import { AppContext } from '../../context/AppProvider';

describe('Menu Component', () => {
  it('should render home only', () => {
    const history = createMemoryHistory();
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
    const history = createMemoryHistory();
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
});
