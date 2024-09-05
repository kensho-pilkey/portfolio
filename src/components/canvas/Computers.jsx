import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three';

const Astronaut = ({ isMobile }) => {
  const astronaut = useGLTF("./astronaut/scene.gltf");
  const meshRef = useRef();
  const [position, setPosition] = useState(new THREE.Vector3(-2, 0, 0));
  const direction = useRef(new THREE.Vector3(1, 1, 0).normalize());

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate the astronaut
      meshRef.current.rotation.y += delta * 0.5;

      // Move the astronaut
      let newPos = position.clone().add(direction.current.clone().multiplyScalar(delta));

      // Bounce off the edges
      if (newPos.x > 2 || newPos.x < -2) direction.current.x *= -1;
      if (newPos.y > 1 || newPos.y < -1) direction.current.y *= -1;

      newPos.x = Math.max(-2, Math.min(2, newPos.x));
      newPos.y = Math.max(-1, Math.min(1, newPos.y));

      setPosition(newPos);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <primitive
        object={astronaut.scene}
        scale={isMobile ? 0.3 : 0.25}
        position={[0, -0.5, 0]}
      />
    </mesh>
  );
};

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <directionalLight position={[-5, 5, 5]} intensity={0.5} />
      <directionalLight position={[0, -5, 5]} intensity={0.3} />
      <pointLight position={[0, 0, 5]} intensity={0.5} />
    </>
  );
};

const AstronautCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <Suspense fallback={null}>
        <Lights />
        <Astronaut isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default AstronautCanvas;