import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface TechNodeProps {
  position: [number, number, number];
  name: string;
  tag: string;
  color: string;
}

function TechNode({ position, name, tag, color }: TechNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.8;
      meshRef.current.rotation.x += delta * 0.4;
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.3 : 1}
      >
        <octahedronGeometry args={[0.35, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 2.5 : 1.2}
          wireframe={!hovered}
        />
      </mesh>

      {/* 3D Floating HTML Label */}
      <Html distanceFactor={12} position={[0, 0.55, 0]} center>
        <div 
          className={`pointer-events-none transition-all duration-300 px-2.5 py-1 rounded-lg backdrop-blur-md border text-center whitespace-nowrap shadow-lg ${
            hovered 
              ? 'bg-slate-900/95 border-cyan-400 scale-110 shadow-cyan-500/30' 
              : 'bg-black/75 border-slate-700/60'
          }`}
        >
          <p className="text-xs font-bold text-white tracking-wide">{name}</p>
          <span className="text-[9px] font-mono uppercase tracking-wider text-cyan-400 block">{tag}</span>
        </div>
      </Html>
    </group>
  );
}

function ConstellationMesh() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
    }
  });

  const nodes: TechNodeProps[] = [
    { position: [0, 1.8, 0], name: "NestJS", tag: "Microservices", color: "#e0234e" },
    { position: [2.2, 0.8, 1.2], name: "Next.js", tag: "SSR & Edge", color: "#00f0ff" },
    { position: [-2.1, 0.9, -1.0], name: "Flutter", tag: "iOS & Android", color: "#02569b" },
    { position: [1.6, -1.4, -1.4], name: "PostgreSQL", tag: "ACID Vault", color: "#336791" },
    { position: [-1.8, -1.2, 1.3], name: "Redis", tag: "Cache & PubSub", color: "#ff4438" },
    { position: [0, -2.0, 0], name: "Docker", tag: "Containers", color: "#2496ed" },
    { position: [2.4, -0.2, -1.5], name: "WebSockets", tag: "Sub-100ms Sync", color: "#00c6a7" },
    { position: [-2.4, -0.3, -1.2], name: "Prisma ORM", tag: "Type-Safe Data", color: "#f59e0b" },
  ];

  return (
    <group ref={groupRef}>
      {/* Central Pulsing Nexus Sphere */}
      <mesh>
        <sphereGeometry args={[0.5, 24, 24]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00c6a7"
          emissiveIntensity={1.5}
          wireframe
        />
      </mesh>

      {/* Orbit Rings Connecting Nodes */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.5, 0.015, 16, 100]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.25} />
      </mesh>
      <mesh rotation={[-Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.8, 0.015, 16, 100]} />
        <meshBasicMaterial color="#f59e0b" transparent opacity={0.25} />
      </mesh>

      {nodes.map((node, i) => (
        <TechNode key={i} {...node} />
      ))}
    </group>
  );
}

export const TechGalaxy: React.FC = () => {
  return (
    <div className="w-full h-[450px] relative">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f0ff" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#f59e0b" />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.6}>
          <ConstellationMesh />
        </Float>

        <OrbitControls
          enableZoom={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.6}
          minPolarAngle={Math.PI / 2.8}
        />
      </Canvas>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none text-[11px] font-mono uppercase tracking-widest text-slate-400/80 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700/50">
        ✦ Interactive 3D Architecture Constellation • Drag to inspect
      </div>
    </div>
  );
};
