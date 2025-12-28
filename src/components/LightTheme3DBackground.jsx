import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

const DigitalParticles = ({ config }) => {
  const pointsRef = useRef();

  // 🎯 Generate particles only when count changes
  const particles = useMemo(() => {
    const array = new Float32Array(config.count * 3);
    for (let i = 0; i < array.length; i++) {
      array[i] = (Math.random() - 0.5) * config.spread;
    }
    return array;
  }, [config.count, config.spread]);

  // 🌀 Smooth animation (responsive speed)
  useFrame(({ clock }) => {
    if (!pointsRef.current) return;

    const t = clock.getElapsedTime();
    pointsRef.current.rotation.y = t * config.rotationSpeed;
    pointsRef.current.rotation.x = Math.sin(t / 2) * config.wobble;
  });

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled>
      <PointMaterial
        color="#20A612"          // SAME green
        size={config.size}       // responsive size
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
      />
    </Points>
  );
};

const LightTheme3DBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  // 📱 Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🎛 Responsive configuration
  const config = {
    count: isMobile ? 2000 : 5000,
    size: isMobile ? 0.025 : 0.035,
    spread: isMobile ? 14 : 20,
    cameraZ: isMobile ? 10 : 6,
    rotationSpeed: isMobile ? 0.005 : 0.01,
    wobble: isMobile ? 0.015 : 0.03,
  };

  return (
    <Canvas
      className="!absolute inset-0 !w-full !h-full"
      camera={{ position: [0, 0, config.cameraZ] }}
      dpr={[1, Math.min(1.5, window.devicePixelRatio)]}
    >
      <ambientLight intensity={0.3} />
      <DigitalParticles config={config} />
    </Canvas>
  );
};

export default LightTheme3DBackground;
