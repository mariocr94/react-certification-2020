import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route, useLocation } from 'react-router-dom';
import Header from '../Header';
import './Layout.styles.css';
import { AppContext } from '../../context/AppProvider';
import GlobalStyles from '../../global';
import ProtectedRoute from '../ProtectedRoute';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import FavouritesPage from '../../pages/Favourite';
import FavouriteVideoPage from '../../pages/FavouriteVideo';
import LoginModal from '../LoginModal';
import MenuModal from '../MenuModal';
import LogoutModal from '../LogoutModal';

function Layout() {
  const { state } = useContext(AppContext);
  const { currentTheme } = state;
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <main className="container">
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <Header />
        {background && <Route path="/logout" component={LogoutModal} />}
        {background && <Route path="/login" component={LoginModal} />}
        {background && <Route path="/menu" component={MenuModal} />}
        <Switch location={background || location}>
          <Route exact path="/">
            <HomePage />
          </Route>
          <ProtectedRoute exact path="/favourites" component={FavouritesPage} />
          <ProtectedRoute
            exact
            path="/favourites/:videoId"
            component={FavouriteVideoPage}
          />
          <Route path="/:videoId">
            <VideoPage />
          </Route>
        </Switch>
      </ThemeProvider>
    </main>
  );
}

export default Layout;
