import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function BurgerStack() {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.4;
    }
  });

  // Layer helper: cylinder with flat top/bottom
  const layer = (y: number, radius: number, height: number, color: string, roughness = 0.5, metalness = 0.05) => (
    <mesh position={[0, y, 0]} castShadow receiveShadow>
      <cylinderGeometry args={[radius, radius, height, 64]} />
      <meshStandardMaterial color={color} roughness={roughness} metalness={metalness} />
    </mesh>
  );

  // Wavy lettuce ring
  const lettuce = (y: number) => (
    <mesh position={[0, y, 0]} castShadow>
      <torusGeometry args={[1.05, 0.18, 24, 64]} />
      <meshStandardMaterial color="#5fbf3a" roughness={0.7} />
    </mesh>
  );

  return (
    <group ref={group} position={[0, -0.4, 0]}>
      {/* Bottom bun */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <sphereGeometry args={[1.15, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#e8a960" roughness={0.85} />
      </mesh>
      {layer(0.05, 1.1, 0.12, "#3d2415")}
      {/* Patty */}
      {layer(0.18, 1.12, 0.22, "#4a2818", 0.85)}
      {/* Cheese (slightly drippy via slight scale) */}
      <mesh position={[0, 0.34, 0]} castShadow>
        <cylinderGeometry args={[1.18, 1.05, 0.08, 64]} />
        <meshStandardMaterial color="#f5b800" roughness={0.4} metalness={0.1} emissive="#f5b800" emissiveIntensity={0.05} />
      </mesh>
      {/* Bacon */}
      {[0, Math.PI / 2.5, -Math.PI / 2.5].map((rot, i) => (
        <mesh key={i} position={[0, 0.42, 0]} rotation={[0, rot, 0]} castShadow>
          <boxGeometry args={[2.1, 0.06, 0.32]} />
          <meshStandardMaterial color="#a83a1f" roughness={0.6} />
        </mesh>
      ))}
      {/* Second patty */}
      {layer(0.55, 1.12, 0.22, "#4a2818", 0.85)}
      {/* More cheese */}
      <mesh position={[0, 0.71, 0]} castShadow>
        <cylinderGeometry args={[1.18, 1.05, 0.08, 64]} />
        <meshStandardMaterial color="#f5b800" roughness={0.4} metalness={0.1} emissive="#f5b800" emissiveIntensity={0.05} />
      </mesh>
      {/* Lettuce */}
      {lettuce(0.78)}
      {/* Top bun */}
      <mesh position={[0, 1.1, 0]} castShadow receiveShadow>
        <sphereGeometry args={[1.18, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#e8a960" roughness={0.75} />
      </mesh>
      {/* Sesame seeds */}
      {Array.from({ length: 22 }).map((_, i) => {
        const angle = (i / 22) * Math.PI * 2;
        const r = 0.4 + (i % 3) * 0.25;
        const x = Math.cos(angle) * r;
        const z = Math.sin(angle) * r;
        const y = 1.1 + Math.sqrt(Math.max(0, 1.18 ** 2 - x * x - z * z)) - 0.02;
        return (
          <mesh key={i} position={[x, y, z]} rotation={[Math.random(), Math.random(), Math.random()]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial color="#f9e6b8" roughness={0.6} />
          </mesh>
        );
      })}
    </group>
  );
}

export function Burger3D() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [3.2, 2.2, 4.2], fov: 38 }}
      className="!absolute inset-0"
    >
      <color attach="background" args={["#00000000"]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 5]} intensity={1.4} castShadow shadow-mapSize={[1024, 1024]} />
      <directionalLight position={[-5, 3, -3]} intensity={0.5} color="#7fff5f" />
      <pointLight position={[0, -2, 3]} intensity={0.8} color="#ff7a3a" />
      <Suspense fallback={null}>
        <Float speed={2.2} rotationIntensity={0.4} floatIntensity={0.6}>
          <BurgerStack />
        </Float>
        <ContactShadows position={[0, -1.4, 0]} opacity={0.55} scale={8} blur={2.5} far={3} />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
}
