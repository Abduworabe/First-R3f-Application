import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import {Leva} from 'leva';

// 12 we can't  add leva in Canvas because everything in canves is intended for R3F
// and we can now add attributes like collapsed etc...

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Leva collapsed/>
    <Canvas camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6]

    }}>
      <App />
    </Canvas>
  </StrictMode>

);
