// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // Backend URL
});

export const loginUser = (credentials) => API.post('/login', credentials);
export const createForm = (formData) => API.post('/forms', formData);
