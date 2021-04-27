import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import AppProvider, { AppContext } from '../../context/AppProvider';
import Layout from './index';
import initState from '../../context/initState';

describe('Layout Component', () => {
  it('should render layout component with homepage', () => {
    const history = createMemoryHistory();
    history.push('/');
    render(
      <AppProvider>
        <Router history={history}>
          <Layout />
        </Router>
      </AppProvider>
    );
    expect(screen.queryByText(/look for something/i)).toBeInTheDocument();
  });
  it('should render layout component with favourites', () => {
    const history = createMemoryHistory();
    history.push('/favourites');
    const state = { ...initState, isLogged: true };
    render(
      <AppContext.Provider value={{ state }}>
        <Router history={history}>
          <Layout />
        </Router>
      </AppContext.Provider>
    );
    expect(screen.queryByText(/There are no favourite videos!/i)).toBeInTheDocument();
  });
});
