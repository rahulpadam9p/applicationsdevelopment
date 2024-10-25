// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: Add global styles here
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Optional for performance measurement

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Render the App component into the root div
);

// Optional: If you want to measure performance, pass a function to log results
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
