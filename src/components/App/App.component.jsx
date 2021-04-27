import React from 'react';
import { HashRouter } from 'react-router-dom';
import AppProvider from '../../context/AppProvider';
import Layout from '../Layout';

function App() {
  return (
    <AppProvider>
      <HashRouter>
        <Layout data-testid="AppLayout" />
      </HashRouter>
    </AppProvider>
  );
}

export default App;
