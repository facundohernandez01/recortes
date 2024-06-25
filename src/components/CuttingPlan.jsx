import React, { useEffect, useRef } from 'react';

function CuttingPlan({ baseWidth, baseHeight, cuts, onDeleteCut }) {
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

    // Draw cuts with measurement and red borders
    cuts.forEach((cut, index) => {
      // Draw lightblue filled rectangle for cut
      ctx.fillStyle = 'lightblue';
      ctx.fillRect(cut.x * scale, cut.y * scale, cut.width * scale, cut.height * scale);

      // Draw red border for cut
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 2;
      ctx.strokeRect(cut.x * scale, cut.y * scale, cut.width * scale, cut.height * scale);

      // Draw measurement text inside cut
      ctx.fillStyle = 'black';
      ctx.font = `${12 * scale}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${cut.width}x${cut.height}`, (cut.x + cut.width / 2) * scale, (cut.y + cut.height / 2) * scale);

      // Add click event listener to each cut for deletion
      canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        if (clickX >= cut.x * scale && clickX <= (cut.x + cut.width) * scale && clickY >= cut.y * scale && clickY <= (cut.y + cut.height) * scale) {
          onDeleteCut(index);
        }
      });
    });

    // Clean up event listener
    return () => {
      canvas.removeEventListener('click', () => {});
    };
  }, [baseWidth, baseHeight, cuts, onDeleteCut]);

  return <canvas ref={canvasRef} width={250} height={200} style={{ width: '50%', height: '50%', cursor: 'pointer' }} />;
}

export default CuttingPlan;
