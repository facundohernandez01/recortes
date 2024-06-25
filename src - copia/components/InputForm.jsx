import React, { useState } from 'react';

function InputForm({ onNewCut, error }) {
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
      <input
        type="number"
        value={x}
        onChange={(e) => setX(e.target.value)}
        placeholder="X Position (cm)"
        required
      />
      <input
        type="number"
        value={y}
        onChange={(e) => setY(e.target.value)}
        placeholder="Y Position (cm)"
        required
      />
      <button type="submit">Add Cut</button>
    </form>
  );
}

export default InputForm;
