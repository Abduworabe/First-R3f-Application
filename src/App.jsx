import React, {  useRef } from 'react';
//it's not alowed by vite 
// import Perf from './Perf'; // Import the Perf component
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useControls, button } from 'leva';


function App() {
  // const { x, y } = useControls({
  //   position:-2,
  //   // Instead of having to write a value we would like to have a range
  //   x: {
  //     value: -2,
  //     min: -4,
  //     max: 4,
  //     step: 0.01,
  //   },
  //   y: {
  //     value: 0,
  //     min: -4,
  //     max: 4,
  //     step: 0.01,
  //   }
  // });

  //Instead of adding a second rage tweak we anre going to use  a vector 2 tweak


  const { position, color, visblity } = useControls('sphere',{
    position: {
      value: { x: -2, y: 0 },
      step: 0.1,
      //then y diraction is inverted so we can corect it
      joystick: 'invertY'

    },
    color: '#d6ff00',
    visblity: true,
    clickMe: button(() => {
      console.log('ok')
      //it used to animat object
    }),
    //We can create a select input by setting an array on the options property 

    choice: { options: ['A', 'B', 'C'] },
  })
const {cubescale}=useControls('Cube', {
  cubescale:{
    value:1.5, 
    max:5, 
    min:0.56, 
    step:0.1,
  }
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

  //deStructure debeg ui

  //9 we can create a button that will call a function one clicked
  // to do that we need to inport button from leva

  //10, Folders

  // 13 Monitoring with r3f-perf

  // Add the r3f-perf dependency with npm install rsr-parf mind now it is pro whan we install versioned rsr 
  //npm show rsr-parf version
  //insted of r3f we can use old librery
//npm install stats.js
  return (
    <>
    {/* <Perf/> */}
     

      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1.5} position={[1, 2, 3]} />
      <group ref={groupRef}>

        <mesh position={[position.x, position.y, 0]} visible={visblity}>
          <sphereGeometry />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh position-x={1.5} rotation-y={Math.PI * 0.25} scale={cubescale} ref={boxRef}>
          {/* <sphereGeometry args={[1.5, 32, 32]} /> */}
          <boxGeometry />
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
