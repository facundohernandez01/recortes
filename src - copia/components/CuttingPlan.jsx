import React, { useEffect, useRef } from 'react';

function CuttingPlan({ baseWidth, baseHeight, cuts }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const scale = Math.min(canvas.width / baseWidth, canvas.height / baseHeight);

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw base rectangle
    ctx.fillStyle = 'gray';
    ctx.fillRect(0, 0, baseWidth * scale, baseHeight * scale);

    // Draw cuts
    cuts.forEach(cut => {
      ctx.fillStyle = 'lightblue';
      ctx.fillRect(cut.x * scale, cut.y * scale, cut.width * scale, cut.height * scale);
    });
  }, [baseWidth, baseHeight, cuts]);

  return <canvas ref={canvasRef}  style={{ width: '75%', height: '75%' }} />;
}

export default CuttingPlan;
