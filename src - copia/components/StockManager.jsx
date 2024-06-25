import React from 'react';

function StockManager({ leftovers }) {
  return (
    <div>
      <h2>Stock Manager</h2>
      <ul>
        {leftovers.length > 0 ? (
          leftovers.map((leftover, index) => (
            <li key={index}>
              {`Width: ${leftover.width}, Height: ${leftover.height}`}
            </li>
          ))
        ) : (
          <li>No leftovers</li>
        )}
      </ul>
    </div>
  );
}

export default StockManager;
