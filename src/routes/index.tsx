import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '../pages/home';

import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import ProtectedRoute from './ProtectedRoute';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
