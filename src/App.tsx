import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { a, config } from 'react-spring/three';
import { render } from 'react-dom';
import { Controls, useControl } from 'react-three-gui';
import { withControls } from 'react-three-gui';
import { Canvas } from 'react-three-fiber';


interface AppProps {}


const GROUP = 'Extra';


function ManyCubes() {
  const verticalListScrollPos = useControl('Vertical Offset', { type: 'number', spring: false, min: -5, max: 5 });
  return <> + {Array(10).fill(10).map((_, index) => {
    return <a.mesh key={'mykey' + index} position={[1.5, 0 + index + verticalListScrollPos, 0.0]}>
      <boxGeometry attach="geometry" args={[0.7, 0.7, 0.7]} />
      <a.meshStandardMaterial attach="material" color={0xffff00} />
    </a.mesh>
  })} + </>
}

function Box() {
/*
  
  const clipPlanes = [
    new THREE.Plane( new THREE.Vector3( 0, 1, 0 ), 0.1 ),
//    new THREE.Plane( new THREE.Vector3( 0, - 0.001, 0 ), 0.04 ),
//    new THREE.Plane( new THREE.Vector3( 0, 0, - 0.1 ), 0.04 )
  ];


*/
  const [show, set] = useState(false);
  const posX = useControl('Pos X', { type: 'number', spring: true });
  const posY = useControl('Pos Y', {
    type: 'number',
    spring: config.wobbly,
  });
  const rotateXY = useControl('Rotation', { type: 'xypad', distance: Math.PI });
  const color = useControl('Material Color', { type: 'color' });
  useControl('Toggle cube', {
    group: GROUP,
    type: 'button',
    onClick: () => set(s => !s),
  });
  return (
    <>
      <a.mesh
        rotation-x={rotateXY.x}
        rotation-y={rotateXY.y}
        position-x={posX}
        position-y={posY}
      >
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <a.meshStandardMaterial attach="material" color={color} />
      </a.mesh>
      <ManyCubes />
    </>
  );
}


// clippingPlanes={clipPlanes} clipIntersection={false}

function App() {

  
const YourCanvas = withControls(Canvas);


const Scene = () => (
  <YourCanvas>
      <ambientLight />
      <pointLight position={[10, 0, 10]} intensity={1} />
      <Box />
  </YourCanvas>
);



  return (
    <Controls.Provider>
      <Scene />
      <Controls />
    </Controls.Provider>
  );
}
/*
function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}*/

export default App;
