import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from '@react-three/fiber';

createRoot(document.getElementById('root')).render(
  <Canvas>
    <App />
  </Canvas>
);
