import React, { createRef, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
  const boxRef = useRef();
  useFrame((state, delta) => {
    //we need to know hoe much time has passed sone the last frame
    //means delta time
    boxRef.current.rotation.y += delta;
  });
  return (
    <>
      <OrbitControls />
      <mesh position-x={1.5} rotation-y={Math.PI * 0.25} scale={1} ref={boxRef}>
        {/* <sphereGeometry args={[1.5, 32, 32]} /> */}
        <boxGeometry scale={1.5} />
        <meshBasicMaterial args={[{ color: 'blue' }]} wireframe />
      </mesh>
      <mesh position-x={-1.5}>
        <sphereGeometry />
        <meshBasicMaterial color={'orange'} />
      </mesh>
      <mesh scale={7} rotation-x={-Math.PI * 0.5} position-y={-1}>
        <planeGeometry />
        <meshBasicMaterial color={'green'} />
      </mesh>
    </>
  );
}

export default App;
