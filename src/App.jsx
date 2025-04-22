import React, { createRef, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
  const boxRef = useRef();
  const groupRef=useRef();
  useFrame((state, delta) => {
    //1, we need to know hoe much time has passed sone the last frame
    //means delta time
    boxRef.current.rotation.y += delta;
    groupRef.current.rotation.y+=delta;
  });
  //2, like in Three.js, we can group objects with the Group class
  // Then are goinge to group th ecube and the sphere(not the floor) and them animate the group like a carousel


  return (
    <>
      <OrbitControls />
      <group ref={groupRef}>
      <mesh position-x={1.5} rotation-y={Math.PI * 0.25} scale={1} ref={boxRef}>
        {/* <sphereGeometry args={[1.5, 32, 32]} /> */}
        <boxGeometry scale={1.5} />
        <meshBasicMaterial args={[{ color: 'blue' }]} wireframe />
      </mesh>
      <mesh position-x={-1.5}>
        <sphereGeometry />
        <meshBasicMaterial color={'orange'} />
      </mesh>

      </group>
     
      <mesh scale={7} rotation-x={-Math.PI * 0.5} position-y={-1}>
        <planeGeometry />
        <meshBasicMaterial color={'green'} />
      </mesh>
    </>
  );
}

export default App;
