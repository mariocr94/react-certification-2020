import React, {useState} from 'react';
import AppContext from '../AppContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import Layout from '../Layout';

function App() {
  const [search, setSearch] = useState("");

  const searchSettings = {
    searchValue: search,
    setSearch
  }

  return (
    <AppContext.Provider value={searchSettings}>
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
    </AppContext.Provider>
  );
}

export default App;
