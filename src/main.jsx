import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import SplashScreen from './screens/SplashScreen';
import BindingScreen from './screens/BindingScreen';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/dd-binding" element={<BindingScreen />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
