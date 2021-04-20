import React from 'react';
import Header from '../../components/Header';
import './Layout.styles.css';
import { useAppContext } from '../../context/AppProvider';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../global';

function Layout({ children }) {
  const { state } = useAppContext();
  const { currentTheme } = state;
  
  return (
    <main className="container">
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <Header />
        {children}
      </ThemeProvider>
    </main>
    );
 
}

export default Layout;
