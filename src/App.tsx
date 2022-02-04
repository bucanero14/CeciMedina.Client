import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import { Layout } from './common/components/layout/Layout';
import { ProtectedRoute } from './common/components/protected-route/ProtectedRoute';
import { Dashboard } from './pages/dashboard';
import { Login } from './pages/login/Login';
import { NotFound } from './pages/not-found';

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="cuenta/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
