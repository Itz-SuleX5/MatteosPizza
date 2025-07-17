import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import Loading from './Loading';

const ProtectedRoute = ({ children }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading || !user) {
    return <Loading />;
  }

  const rolesNamespace = 'https://api.matteos-pizza.com/roles';
  const userRoles = user[rolesNamespace] || [];

  const isAdmin = isAuthenticated && userRoles.includes('admin');

  return isAdmin ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
