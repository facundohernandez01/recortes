import React, { useState } from 'react';

function InputForm({ onNewCut, error, availablePoints }) {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [x, setX] = useState('');
  const [y, setY] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewCut({ width: parseInt(width), height: parseInt(height), x: parseInt(x), y: parseInt(y) });
    setWidth('');
    setHeight('');
    setX('');
    setY('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="number"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
        placeholder="Width (cm)"
        required
      />
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Height (cm)"
        required
      />
      <select value={x} onChange={(e) => setX(e.target.value)}>
        <option value="">Select X Position</option>
        {availablePoints.xPoints.map(point => (
          <option key={point} value={point}>{point}</option>
        ))}
      </select>
      <select value={y} onChange={(e) => setY(e.target.value)}>
        <option value="">Select Y Position</option>
        {availablePoints.yPoints.map(point => (
          <option key={point} value={point}>{point}</option>
        ))}
      </select>
      <button type="submit">Add Cut</button>
    </form>
  );
}

export default InputForm;
