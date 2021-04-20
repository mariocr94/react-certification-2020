import React from 'react';
import AppProvider from '../../context/AppProvider';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import Layout from '../Layout';

function App() {

    return (
      <AppProvider >
        <BrowserRouter>
          <AuthProvider>
            <Layout />
          </AuthProvider>
        </BrowserRouter>
      </AppProvider>
    );
  }
  
  export default App;
  