import React from 'react';

function StockManager({ leftovers }) {
  return (
    <div>
      <h2>Stock Manager</h2>
      <ul>
        {leftovers.map((leftover, index) => (
          <li key={index}>{`Width: ${leftover.width}, Height: ${leftover.height}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default StockManager;
