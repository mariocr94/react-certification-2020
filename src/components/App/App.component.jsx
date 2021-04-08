import React from 'react';
import AppProvider from '../../context/AppProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import Layout from '../Layout';
import GlobalStyles from '../../global';

function App() {
  return (
    <AppProvider >
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
    </AppProvider>
  );
}

export default App;
