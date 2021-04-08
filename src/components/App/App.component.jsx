import React from 'react';
import AppProvider from '../../context/AppProvider';
import RealApp from './RealApp';

function App() {

  return (
      <AppProvider >
        <RealApp />
      </AppProvider>
  );
}

export default App;
