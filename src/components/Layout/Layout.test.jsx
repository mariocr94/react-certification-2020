import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import AppProvider, { AppContext } from '../../context/AppProvider';
import Layout from './index';
import initState from '../../context/initState';

jest.mock('../../hooks/useYoutubeApi', () => ({
  __esModule: true,
  default: (search) => {
    if (search) return [['hola', 'adios', 'quetal']];
    return [[]];
  },
}));
describe('Layout Component', () => {
  it('should render layout component with homepage no search', () => {
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
  it('should render layout component with homepage with search', () => {
    const history = createMemoryHistory();
    history.push('/');
    const state = { ...initState, search: 'something' };
    render(
      <AppContext.Provider value={{ state }}>
        <Router history={history}>
          <Layout />
        </Router>
      </AppContext.Provider>
    );
    expect(screen.queryByTestId('Videocards')).toBeInTheDocument();
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
  it('should render layout component with favourites with videos', () => {
    const history = createMemoryHistory();
    history.push('/favourites');
    const state = { ...initState, isLogged: true, favourites: ['hi', 'bye'] };
    render(
      <AppContext.Provider value={{ state }}>
        <Router history={history}>
          <Layout />
        </Router>
      </AppContext.Provider>
    );
    expect(screen.queryByTestId('Videocards')).toBeInTheDocument();
  });
  it('should render layout component with videopage', () => {
    const history = createMemoryHistory();
    history.push('/sOS9aOIXPEk');
    const state = { ...initState, isLogged: true };
    render(
      <AppContext.Provider value={{ state }}>
        <Router history={history}>
          <Route path="/:videoId">
            <Layout />
          </Route>
        </Router>
      </AppContext.Provider>
    );
    expect(screen.queryByTestId('videopage')).toBeInTheDocument();
  });
  it('should render layout component with favouriteVideoPage', () => {
    const history = createMemoryHistory();
    history.push('/favourites/sOS9aOIXPEk');
    const state = { ...initState, isLogged: true };
    render(
      <AppContext.Provider value={{ state }}>
        <Router history={history}>
          <Route path="/favourites/:videoId">
            <Layout />
          </Route>
        </Router>
      </AppContext.Provider>
    );
    expect(screen.queryByTestId('favvideopage')).toBeInTheDocument();
  });
});
