import React from 'react';
import { useAppContext } from '../../../context/AppProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../../providers/Auth';
import HomePage from '../../../pages/Home';
import VideoPage from '../../../pages/Video';
import Layout from '../../Layout';
import GlobalStyles from '../../../global';
import { ThemeProvider } from 'styled-components';

function RealApp() {
    const { state } = useAppContext();
    const { currentTheme } = state;
  
    return (
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <BrowserRouter>
            <AuthProvider>
                <Layout>
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route path="/:videoId">
                            <VideoPage />
                        </Route>
                    </Switch>
                </Layout>
            </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
  
  export default RealApp;
  