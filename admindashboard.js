// src/components/AdminDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        <li><Link to="/form-builder">Create Form</Link></li>
        <li><Link to="/application/1">Manage Application 1</Link></li>
      </ul>
    </div>
  );
}

export default AdminDashboard;
