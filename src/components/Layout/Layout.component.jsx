import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import Header from '../Header';
import './Layout.styles.css';
import { AppContext } from '../../context/AppProvider';
import GlobalStyles from '../../global';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import FavouritesPage from '../../pages/Favourite';
import FavouriteVideoPage from '../../pages/FavouriteVideo';
import LoginModal from '../LoginModal';
import MenuModal from '../MenuModal';
import LogoutModal from '../LogoutModal';

function Layout() {
  const { state } = useContext(AppContext);
  const { currentTheme, isLogged } = state;
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <main className="container">
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <Header />
        <Switch location={background || location}>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route
            exact
            path="/favourites"
            render={() => (isLogged ? <FavouritesPage /> : <Redirect to="/" />)}
          />
          <Route
            path="/favourites/:videoId"
            render={() => (isLogged ? <FavouriteVideoPage /> : <Redirect to="/" />)}
          />
          <Route path="/:videoId">
            <VideoPage />
          </Route>
        </Switch>
        {background && <Route path="/logout" component={LogoutModal} />}
        {background && <Route path="/login" component={LoginModal} />}
        {background && <Route path="/menu" component={MenuModal} />}
      </ThemeProvider>
    </main>
  );
}

export default Layout;
