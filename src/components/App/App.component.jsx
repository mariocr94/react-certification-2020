import React from 'react';
import AppProvider from '../../context/AppProvider';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../Layout';

function App() {

    return (
      <AppProvider >
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
      </AppProvider>
    );
  }
  
  export default App;
  