import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { config } from 'react-spring/three';
import { render } from 'react-dom';
import { Canvas, useThree } from "react-three-fiber";
import * as THREE from 'three';
import { useGesture } from "react-use-gesture"
import { useSpring, a } from "@react-spring/three"

function ManyCubes() {

  const clipPlanes = [
    new THREE.Plane( new THREE.Vector3( 0, 1, 0 ), 0.5 ),
//    new THREE.Plane( new THREE.Vector3( 0, - 0.001, 0 ), 0.04 ),
//    new THREE.Plane( new THREE.Vector3( 0, 0, - 0.1 ), 0.04 )
  ];

  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width
  const [spring, set] = useSpring(() => ({ scale: [1, 1, 1], position: [0, 0, 0], rotation: [0, 0, 0], config: { friction: 20 } }))
//  const onMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }), [])

  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) => {
      set({ position: [0, -y / aspect, 0], rotation: [0, 0, 0] }) 
    },
    onHover: ({ hovering }) => {
      //set({ scale: hovering ? [1.2, 1.2, 1.2] : [1, 1, 1] })
    }
  });


  return <a.mesh {...spring} {...bind()}> + {Array(10).fill(10).map((_, index) => {

    
    
    return <a.mesh key={'mykefddy' + index} position={[-0.9, 0 + index, 0.0]}>
      <boxGeometry attach="geometry" args={[0.95, 0.95, 1.0]} />
      <a.meshStandardMaterial attach="material" color={0xff3300} clippingPlanes={clipPlanes} clipIntersection={false} />
    </a.mesh>
  })} + </a.mesh>
}

function Box() {

  


  return (
    <>
      <ManyCubes />
    </>
  );
}

interface AppProps {}

function App({}: AppProps) {

    return (<Canvas onCreated={({ gl }) => void (gl.localClippingEnabled = true)}>
        <ambientLight />
        <pointLight position={[10, 0, 10]} intensity={1.5} />
        <Box />
    </Canvas>)
}

export default App;
