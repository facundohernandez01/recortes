import React from 'react';
import { Canvas } from '@react-three/fiber';

function CuttingPlan({ baseWidth, baseHeight, cuts }) {
  const scale = 0.01; // 1 cm in real life equals 1 unit on the screen

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas>
        {/* Plano base */}
        <mesh position={[baseWidth * scale / 2, -baseHeight * scale / 2, 0]}>
          <planeGeometry args={[baseWidth * scale, baseHeight * scale]} />
          <meshBasicMaterial color="gray" />
        </mesh>
        {/* Cortes */}
        {cuts.map((cut, index) => (
          <mesh key={index} position={[cut.x * scale + cut.width * scale / 2, -(cut.y * scale + cut.height * scale / 2), 0]}>
            <planeGeometry args={[cut.width * scale, cut.height * scale]} />
            <meshBasicMaterial color="lightblue" />
          </mesh>
        ))}
      </Canvas>
    </div>
  );
}

export default CuttingPlan;
