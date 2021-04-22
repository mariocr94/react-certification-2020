import React from 'react';
import AppProvider from '../../context/AppProvider';
import { HashRouter } from 'react-router-dom';
import Layout from '../Layout';

function App() {

    return (
      <AppProvider >
        <HashRouter>
          <Layout />
        </HashRouter>
      </AppProvider>
    );
  }
  
  export default App;
  