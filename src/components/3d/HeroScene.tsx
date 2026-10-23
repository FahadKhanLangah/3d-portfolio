import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 3D Cyber Reactor Core
function CyberCore({ isHovered }: { isHovered: boolean }) {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const speedMultiplier = isHovered ? 2.5 : 1.0;
    
    if (outerRef.current) {
      outerRef.current.rotation.x += delta * 0.25 * speedMultiplier;
      outerRef.current.rotation.y += delta * 0.35 * speedMultiplier;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.5 * speedMultiplier;
      const t = state.clock.getElapsedTime();
      const scale = 1 + Math.sin(t * 3) * 0.08;
      innerRef.current.scale.set(scale, scale, scale);
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.4 * speedMultiplier;
      ring1Ref.current.rotation.z += delta * 0.2 * speedMultiplier;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.45 * speedMultiplier;
      ring2Ref.current.rotation.z -= delta * 0.3 * speedMultiplier;
    }
  });

  return (
    <group>
      {/* Central Pulsing Plasma Core */}
      <mesh ref={innerRef}>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#0080ff"
          emissiveIntensity={1.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Wireframe Hologram Geometry */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshStandardMaterial
          color="#00f0ff"
          wireframe
          transparent
          opacity={0.45}
        />
      </mesh>

      {/* Orbital Ring 1 - Cyan */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.3, 0.025, 16, 100]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Orbital Ring 2 - Amber/Gold */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.6, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#f59e0b"
          emissive="#f59e0b"
          emissiveIntensity={2.5}
        />
      </mesh>

      {/* Glowing Floating Orbit Satellites */}
      <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[2.8, 1.2, 0.5]}>
          <octahedronGeometry args={[0.2, 0]} />
          <meshStandardMaterial color="#00c6a7" emissive="#00c6a7" emissiveIntensity={2} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-2.6, -1.1, -0.4]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color="#f59e0b" emissive="#d97706" emissiveIntensity={1.5} wireframe />
        </mesh>
      </Float>
    </group>
  );
}

// Interactive Cosmic Starfield & Data Particles
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particleCount = 1200;
  const positions = useMemo(() => {
    const coords = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      coords[i] = (Math.random() - 0.5) * 20;
      coords[i + 1] = (Math.random() - 0.5) * 20;
      coords[i + 2] = (Math.random() - 0.5) * 20;
    }
    return coords;
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f0ff"
        size={0.045}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

export const HeroScene: React.FC = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="w-full h-full relative cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f0ff" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#f59e0b" />
        <directionalLight position={[0, 5, 5]} intensity={0.8} />

        <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
          <CyberCore isHovered={isHovered} />
        </Float>

        <ParticleField />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
          rotateSpeed={0.5}
        />
      </Canvas>

      {/* Floating 3D Control Pill */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none text-[11px] font-mono uppercase tracking-widest text-cyan-400/70 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/20">
        ✦ Drag to rotate 3D core
      </div>
    </div>
  );
};
