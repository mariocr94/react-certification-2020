import React from 'react';
import Header from '../../components/Header';
import './Layout.styles.css';

function Layout({ children }) {
  return (
    <main className="container">
      <Header />
      {children}
    </main>
    );
 
}

export default Layout;
