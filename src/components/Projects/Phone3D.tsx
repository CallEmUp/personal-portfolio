import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const PHONE_W = 2.6;
const PHONE_H = 5.4;
const PHONE_D = 0.28;
const BEZEL = 0.04;

const PhoneModel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null!);
  const screenTex = useTexture('/btb-screen.png');

  const makeRoundedRectShape = (width: number, height: number, radius: number) => {
    const shape = new THREE.Shape();
    const w = width / 2;
    const h = height / 2;
    const r = Math.min(radius, w, h);
    shape.moveTo(-w + r, -h);
    shape.lineTo(w - r, -h);
    shape.quadraticCurveTo(w, -h, w, -h + r);
    shape.lineTo(w, h - r);
    shape.quadraticCurveTo(w, h, w - r, h);
    shape.lineTo(-w + r, h);
    shape.quadraticCurveTo(-w, h, -w, h - r);
    shape.lineTo(-w, -h + r);
    shape.quadraticCurveTo(-w, -h, -w + r, -h);
    return shape;
  };

  const bodyGeo = useMemo(() => {
    const shape = makeRoundedRectShape(PHONE_W, PHONE_H, 0.38);
    return new THREE.ExtrudeGeometry(shape, {
      depth: PHONE_D,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelSegments: 3,
    });
  }, []);

  const screenGeo = useMemo(() => {
    const sw = PHONE_W - BEZEL * 2;
    const sh = PHONE_H - BEZEL * 2;
    const sr = 0.32;
    const shape = makeRoundedRectShape(sw, sh, sr);
    const geo = new THREE.ShapeGeometry(shape, 32);

    const pos = geo.attributes.position;
    const uv = new Float32Array(pos.count * 2);
    for (let i = 0; i < pos.count; i++) {
      uv[i * 2] = (pos.getX(i) + sw / 2) / sw;
      uv[i * 2 + 1] = (pos.getY(i) + sh / 2) / sh;
    }
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    return geo;
  }, []);

  const frameMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: '#2a2a2e',
        metalness: 0.9,
        roughness: 0.3,
        clearcoat: 0.4,
        clearcoatRoughness: 0.3,
      }),
    []
  );

  const sideMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: '#3a3a3e',
        metalness: 0.85,
        roughness: 0.25,
        clearcoat: 0.5,
      }),
    []
  );

  const cameraMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#050505',
        metalness: 0.95,
        roughness: 0.05,
      }),
    []
  );

  const cameraHousingGeo = useMemo(() => {
    const shape = makeRoundedRectShape(1.1, 1.1, 0.25);
    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.05,
      bevelEnabled: true,
      bevelThickness: 0.01,
      bevelSize: 0.01,
      bevelSegments: 2,
    });
  }, []);

  const lensRingMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: '#3a3a3c',
        metalness: 0.98,
        roughness: 0.05,
        clearcoat: 1.0,
      }),
    []
  );

  const appleLogoGeo = useMemo(() => {
    const sc = 0.00052;
    const ox = 407;
    const oy = 500;
    const c = (x: number, y: number): [number, number] => [(x - ox) * sc, (y - oy) * sc];

    const b = (shape: THREE.Shape, c1: [number, number], c2: [number, number], e: [number, number]) => {
      shape.bezierCurveTo(c1[0], c1[1], c2[0], c2[1], e[0], e[1]);
    };

    const shape = new THREE.Shape();
    shape.moveTo(...c(631.1, 300.4));
    b(shape, c(604.2, 345.8), c(564.8, 383.8), c(555.7, 435.3));
    b(shape, c(540.1, 510.8), c(535.1, 580.8), c(491.4, 692.4));
    b(shape, c(466.4, 755.2), c(435.2, 812.6), c(395.4, 862.2));
    b(shape, c(355.6, 912.0), c(316.8, 932.8), c(278.4, 934.8));
    b(shape, c(232.2, 937.2), c(189.6, 914.4), c(157.2, 887.2));
    b(shape, c(108.6, 846.8), c(72.2, 784.6), c(38.6, 695.4));
    b(shape, c(3.4, 601.8), c(-4.6, 504.8), c(0, 416.2));
    b(shape, c(4.6, 330.6), c(28.2, 270.6), c(80.6, 228.2));
    b(shape, c(124.6, 192.2), c(178.4, 168.2), c(243.8, 162.4));
    b(shape, c(290.2, 158.6), c(349.6, 178.4), c(399.8, 198.8));
    b(shape, c(426.2, 208.4), c(460.2, 198.8), c(502.8, 182.8));
    b(shape, c(544.6, 166.4), c(585.2, 143.2), c(632.6, 138.6));
    b(shape, c(670.6, 135.0), c(695.4, 140.6), c(695.4, 140.6));
    b(shape, c(660.4, 157.4), c(630.8, 183.2), c(608.8, 218.2));
    b(shape, c(583.2, 258.6), c(572.2, 281.2), c(631.1, 300.4));

    shape.moveTo(...c(488.4, 0));
    b(shape, c(491.2, 36.4), c(478.8, 78.4), c(453.2, 121.2));
    b(shape, c(433.2, 152.8), c(407.6, 167.2), c(370.6, 130.8));
    b(shape, c(348.4, 96.4), c(358.8, 54.6), c(383.4, 12.2));
    b(shape, c(408.0, -30.0), c(449.4, -52.2), c(488.4, 0));

    return new THREE.ShapeGeometry(shape, 64);
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    const CYCLE = 7;
    const p = (t % CYCLE) / CYCLE;
    const twoPi = Math.PI * 2;
    const K = 0.88;
    const warped = p - (K / twoPi) * Math.sin(twoPi * p);
    groupRef.current.rotation.y = warped * twoPi;
  });

  return (
    <group rotation={[-0.3, -0.4, 0.3]}>
    <group ref={groupRef}>

      {/* Phone body - single solid extruded shape */}
      <mesh geometry={bodyGeo} material={frameMat} position={[0, 0, -PHONE_D / 2]} />

      {/* Screen image with rounded corners */}
      <mesh geometry={screenGeo} position={[0, 0, PHONE_D / 2 + 0.025]}>
        <meshBasicMaterial map={screenTex} toneMapped={false} />
      </mesh>

      {/* Dynamic Island on front */}
      <mesh position={[0, PHONE_H / 2 - 0.28, PHONE_D / 2 + 0.026]}>
        <planeGeometry args={[0.68, 0.19]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      {/* Dynamic Island rounded end caps */}
      <mesh position={[-0.3, PHONE_H / 2 - 0.28, PHONE_D / 2 + 0.026]}>
        <circleGeometry args={[0.1, 32]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      <mesh position={[0.3, PHONE_H / 2 - 0.28, PHONE_D / 2 + 0.026]}>
        <circleGeometry args={[0.1, 32]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* Camera module on back - flipped to match new side */}
      <group position={[0.55, PHONE_H / 2 - 0.78, -PHONE_D / 2]} scale={[-1, 1, 1]}>
        {/* Rounded square housing - extruded bump */}
        <mesh position={[0, 0, -0.03]} geometry={cameraHousingGeo}>
          <meshPhysicalMaterial
            color="#1c1c1e"
            metalness={0.88}
            roughness={0.28}
            clearcoat={0.4}
          />
        </mesh>

        {/* Three lenses: two on left stacked, one on right middle - isosceles triangle */}
        {([
          [-0.22, 0.22],
          [-0.22, -0.22],
          [0.22, 0],
        ] as const).map(([x, y], idx) => (
          <group key={idx} position={[x, y, -0.03]}>
            {/* Slight lens barrel - protrudes outward from housing */}
            <mesh position={[0, 0, -0.012]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.155, 0.155, 0.024, 48]} />
              <meshPhysicalMaterial
                color="#2a2a2c"
                metalness={0.9}
                roughness={0.15}
                clearcoat={0.5}
              />
            </mesh>
            {/* Metallic ring at front of barrel */}
            <mesh position={[0, 0, 0.001]}>
              <ringGeometry args={[0.13, 0.155, 48]} />
              <primitive object={lensRingMat} attach="material" />
            </mesh>
            {/* Dark glass lens */}
            <mesh position={[0, 0, 0.002]}>
              <circleGeometry args={[0.13, 48]} />
              <meshPhysicalMaterial
                color="#060612"
                metalness={0.15}
                roughness={0.01}
                clearcoat={1.0}
                reflectivity={1.0}
              />
            </mesh>
            {/* Inner dark pupil */}
            <mesh position={[0, 0, 0.003]}>
              <circleGeometry args={[0.065, 48]} />
              <primitive object={cameraMat} attach="material" />
            </mesh>
          </group>
        ))}

        {/* Flash - on top right of bump */}
        <mesh position={[0.22, 0.2, -0.032]}>
          <circleGeometry args={[0.05, 32]} />
          <meshStandardMaterial color="#e8e0c8" emissive="#e8e0c8" emissiveIntensity={0.15} />
        </mesh>

        {/* LiDAR - below flash, right side of bump */}
        <mesh position={[0.22, -0.2, -0.032]}>
          <circleGeometry args={[0.03, 24]} />
          <meshStandardMaterial color="#111111" />
        </mesh>

        {/* Microphone - flat on housing */}
        <mesh position={[0, -0.42, -0.032]}>
          <circleGeometry args={[0.015, 16]} />
          <meshStandardMaterial color="#0a0a0a" />
        </mesh>
      </group>

      {/* Apple logo on back - single mesh, smooth curves, correct aspect */}
      <mesh
        position={[0, -0.3, -PHONE_D / 2 - 0.026]}
        rotation={[Math.PI, 0, 0]}
        scale={[-1, 1, 1]}
        geometry={appleLogoGeo}
      >
        <meshPhysicalMaterial
          color="#4a4a4e"
          metalness={0.95}
          roughness={0.15}
          clearcoat={0.8}
        />
      </mesh>

      {/* Side buttons */}
      <mesh position={[PHONE_W / 2 + 0.03, 0.7, 0]}>
        <boxGeometry args={[0.015, 0.5, 0.05]} />
        <primitive object={sideMat} attach="material" />
      </mesh>
      <mesh position={[-PHONE_W / 2 - 0.03, 1.5, 0]}>
        <boxGeometry args={[0.015, 0.15, 0.05]} />
        <primitive object={sideMat} attach="material" />
      </mesh>
      <mesh position={[-PHONE_W / 2 - 0.03, 1.05, 0]}>
        <boxGeometry args={[0.015, 0.28, 0.05]} />
        <primitive object={sideMat} attach="material" />
      </mesh>
      <mesh position={[-PHONE_W / 2 - 0.03, 0.6, 0]}>
        <boxGeometry args={[0.015, 0.28, 0.05]} />
        <primitive object={sideMat} attach="material" />
      </mesh>

    </group>
    </group>
  );
};

const Phone3D: React.FC = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const outerW = isMobile ? 220 : 350;
  const outerH = isMobile ? 420 : 400;
  const canvasSize = isMobile ? 520 : 700;

  return (
    <div style={{ width: outerW, height: outerH, position: 'relative', margin: '0 auto' }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: canvasSize,
        height: canvasSize,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }}>
      <Canvas
        camera={{ position: [0, 0, 14], fov: 35 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <directionalLight position={[-4, 3, 3]} intensity={0.6} color="#aaaacc" />
        <pointLight position={[3, -2, 5]} intensity={0.8} color="#ffffff" />
        <directionalLight position={[-5, 0, -3]} intensity={1.2} color="#555566" />
        <pointLight position={[0, 4, -2]} intensity={0.5} color="#444455" />
        <PhoneModel />
      </Canvas>
      </div>
    </div>
  );
};

export default Phone3D;
