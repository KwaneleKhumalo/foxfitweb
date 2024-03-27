import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import App from './App';
import LoginScreen from './pages/LoginScreen';
import RegistrationScreen from './pages/RegistrationScreen'
import HomeScreen from './pages/HomeScreen'
import DashboardScreen from './pages/DashboardScreen';
import ProfileScreen from './pages/ProfileScreen';
import SettingsScreen from './pages/SettingsScreen';
import AboutScreen from './pages/AboutScreen';
import ProgramsScreen from './pages/ProgramsScreen';
import PriceScreen from './pages/PriceScreen';
import PaymentScreen from './pages/PaymentScreen';
import WorkoutScreen from './pages/WorkoutScreen';

import NotFoundScreen from './pages/NotFoundScreen';

const router = createBrowserRouter(
  
  createRoutesFromElements(
    
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/programs" element={<ProgramsScreen />} />
      <Route path="/pricing" element={<PriceScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegistrationScreen />} />
      <Route path="/dashboard" element={<DashboardScreen />} />
      <Route path="/workouts" element={<WorkoutScreen />} />
      <Route path="/profile" element={<ProfileScreen />} />
      <Route path="/settings" element={<SettingsScreen />} />
      <Route path="/payment" element={<PaymentScreen />} />
      <Route path='*' element={<NotFoundScreen />} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

