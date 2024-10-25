// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import Application from './components/Application';
import FormBuilder from './components/FormBuilder';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/application/:id" element={<Application />} />
        <Route path="/form-builder" element={<FormBuilder />} />
      </Routes>
    </Router>
  );
}

export default App;
