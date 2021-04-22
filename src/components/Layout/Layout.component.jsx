import React from 'react';
import Header from '../../components/Header';
import './Layout.styles.css';
import { useAppContext } from '../../context/AppProvider';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../global';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import LoginModal from '../LoginModal';
import MenuModal from '../MenuModal';
import LogoutModal from '../LogoutModal';
import FavouritesView from '../FavouritesView';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';

function Layout() {
  const { state } = useAppContext();
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
          <Route exact path="/favourites" render={() =>(
            isLogged ? 
            <FavouritesView />
            :
            <Redirect to="/" />
          )}/>
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
