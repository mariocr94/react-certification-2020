import React from 'react';
import { screen, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import Video from './index';
import { AppContext } from '../../context/AppProvider';

describe(' Video Component', () => {
  it(' should render Video Component with no fav button', () => {
    const history = createMemoryHistory();
    history.push('/');
    const state = {
      isLogged: false,
      favourites: [],
    };
    render(
      <AppContext.Provider value={{ state }}>
        <Router history={history}>
          <Video />
        </Router>
      </AppContext.Provider>
    );
    expect(screen.getByTestId('VideoInfo')).toBeInTheDocument();
    expect(screen.queryByTestId('remFavButton')).toBeNull();
    expect(screen.queryByTestId('FavButton')).toBeNull();
  });
  it(' should render Video Component with fav button', () => {
    const history = createMemoryHistory();
    history.push('/sOS9aOIXPEk');
    const state = {
      isLogged: true,
      favourites: [],
    };
    render(
      <AppContext.Provider value={{ state }}>
        <Router history={history}>
          <Route path="/:videoId">
            <Video />
          </Route>
        </Router>
      </AppContext.Provider>
    );
    expect(screen.getByTestId('VideoInfo')).toBeInTheDocument();
    expect(screen.queryByTestId('remFavButton')).toBeNull();
    expect(screen.queryByTestId('FavButton')).toBeInTheDocument();
  });
  it(' should render Video Component with rem fav button', () => {
    const history = createMemoryHistory();
    history.push('/sOS9aOIXPEk');
    const state = {
      isLogged: true,
      favourites: ['sOS9aOIXPEk'],
    };
    render(
      <AppContext.Provider value={{ state }}>
        <Router history={history}>
          <Route path="/:videoId">
            <Video />
          </Route>
        </Router>
      </AppContext.Provider>
    );
    expect(screen.getByTestId('VideoInfo')).toBeInTheDocument();
    expect(screen.queryByTestId('remFavButton')).toBeInTheDocument();
    expect(screen.queryByTestId('FavButton')).toBeNull();
  });
  it(' should render Video details', () => {
    const history = createMemoryHistory();
    history.push('/sOS9aOIXPEk');
    const state = {
      isLogged: false,
      favourites: [],
    };
    render(
      <AppContext.Provider value={{ state }}>
        <Router history={history}>
          <Route path="/:videoId">
            <Video />
          </Route>
        </Router>
      </AppContext.Provider>
    );
    expect(screen.getByTestId('VideoInfo')).toBeInTheDocument();
  });
  it(' should render Video details', () => {
    const history = createMemoryHistory();
    history.push('/sOS9aOIXPEk');
    const state = {
      isLogged: false,
      favourites: [],
    };
    render(
      <AppContext.Provider value={{ state }}>
        <Router history={history}>
          <Route path="/:videoId">
            <Video />
          </Route>
        </Router>
      </AppContext.Provider>
    );
    expect(screen.getByTestId('VideoInfo')).toBeInTheDocument();
    // expect(screen.queryByText(/Daft Punk/i)).toBeInTheDocument();
  });
});
