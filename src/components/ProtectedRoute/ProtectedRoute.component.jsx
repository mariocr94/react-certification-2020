import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAppContext } from '../../context/AppProvider';

const ProtectedRoute = (props) => {
  const { state } = useAppContext();
  const { user, isLogged } = state;

  return user && isLogged ? <Route {...props} /> : <Redirect to="/" />;
};

export default ProtectedRoute;
