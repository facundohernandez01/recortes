import React from 'react';

const ReglaVertical = ({ baseHeight, scale }) => {
  const canvasHeight = baseHeight * scale;

  return (
    <div style={{ position: 'absolute', top: '0', left: '0', width: '20px', height: `${canvasHeight}px`, border: '1px solid black' }}>
      <canvas width={20} height={canvasHeight} ref={canvasRef => {
        if (canvasRef) {
          const ctx = canvasRef.getContext('2d');
          ctx.clearRect(0, 0, 20, canvasHeight);
          ctx.fillStyle = 'lightgray';
          ctx.fillRect(0, 0, 20, canvasHeight);
          ctx.font = '10px Arial';
          ctx.fillStyle = 'black';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          for (let i = 0; i <= baseHeight; i += 10) {
            ctx.fillText(i.toString(), 10, i * scale);
          }
        }
      }} />
    </div>
  );
};

export default ReglaVertical;
