import React from 'react';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';

interface ProtectedRouteProps {
  children: React.ReactElement;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/cuenta/login" replace state={{ from: location }} />;
  }

  return children;
};
