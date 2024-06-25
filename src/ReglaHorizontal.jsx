import React from 'react';

const ReglaHorizontal = ({ baseWidth, scale }) => {
  const canvasWidth = baseWidth * scale;

  return (
    <div style={{ position: 'absolute', top: '0', left: '0', width: `${canvasWidth}px`, height: '20px', border: '1px solid black' }}>
      <canvas width={canvasWidth} height={20} ref={canvasRef => {
        if (canvasRef) {
          const ctx = canvasRef.getContext('2d');
          ctx.clearRect(0, 0, canvasWidth, 20);
          ctx.fillStyle = 'lightgray';
          ctx.fillRect(0, 0, canvasWidth, 20);
          ctx.font = '10px Arial';
          ctx.fillStyle = 'black';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          for (let i = 0; i <= baseWidth; i += 10) {
            ctx.fillText(i.toString(), i * scale, 10);
          }
        }
      }} />
    </div>
  );
};

export default ReglaHorizontal;
