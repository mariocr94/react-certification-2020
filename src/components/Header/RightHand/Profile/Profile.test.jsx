import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Profile from './index';
import { AppContext } from '../../../../context/AppProvider';

const history = createMemoryHistory();
history.push('/');

describe('Test Profile', () => {
  it('should render logged in profile icon', () => {
    const state = {
      isLogged: true,
      user: {},
    };
    render(
      <AppContext.Provider value={{ state }}>
        <Router history={history}>
          <Profile />
        </Router>
      </AppContext.Provider>
    );
    expect(screen.getByTestId('LoggedProfile')).toBeInTheDocument();
  });

  it('should render logged out profile icon', () => {
    const state = {
      isLogged: false,
      user: {},
    };
    render(
      <AppContext.Provider value={{ state }}>
        <Router history={history}>
          <Profile />
        </Router>
      </AppContext.Provider>
    );
    expect(screen.getByTestId('Profile')).toBeInTheDocument();
  });
});
