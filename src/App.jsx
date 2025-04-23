import React, { createRef, useRef } from 'react';

import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';


function App() {
  const  controls=useControls({
    position:-2,
  })
  const boxRef = useRef();
  const groupRef = useRef();
  useFrame((state, delta) => {
    //1, we need to know hoe much time has passed sone the last frame
    //means delta time
    // boxRef.current.rotation.y += delta;
    // groupRef.current.rotation.y += delta;
  });
  //2, like in Three.js, we can group objects with the Group class
  // Then are goinge to group th ecube and the sphere(not the floor) and them animate the group like a carousel
  //3,letps make our scene more realistic and add some lights
  //Add a directionalLight
  //i could go further and talk about other lights, enviromment maps, shadows, etc.
  // 4 custom geometry



  //Debug-a-R3F-Application 
  //StrictMode will warn you about potential problems in your application 

// 5 in the terminal, install leva with  npm install leva@latest but it's recomnded to us spacfic ver


  return (
    <>

      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1.5} position={[1, 2, 3]} />
      <group ref={groupRef}>

        <mesh position-x={-1.5}>
          <sphereGeometry />
          <meshStandardMaterial color={'orange'} />
        </mesh>
        <mesh position-x={1.5} rotation-y={Math.PI * 0.25} scale={1} ref={boxRef}>
          {/* <sphereGeometry args={[1.5, 32, 32]} /> */}
          <boxGeometry scale={1.5} />
          <meshStandardMaterial args={[{ color: 'blue' }]} wireframe={false} />
          </mesh>
      </group>

      <mesh scale={7} rotation-x={-Math.PI * 0.5} position-y={-1}>
        <planeGeometry />
        <meshStandardMaterial color={'green'} />
      </mesh>
    </>
  );
}

export default App;
