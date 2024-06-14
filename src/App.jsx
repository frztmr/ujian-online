import { useState } from 'react'
import reactLogo from './assets/react.svg' 
import './App.css'


import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


import { Route, Routes } from "react-router-dom";

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

import Headerbar from './component/HeaderBar';
 
function App() { 

  return (
    <> 
    <Headerbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
