import React, { useState } from 'react';
import InputForm from './components/InputForm';
import CuttingPlan from './components/CuttingPlan';
import StockManager from './components/StockManager';
import { calculateCuts, isOverlap } from './cuttingAlgorithm';

function App() {
  const baseWidth = 250; // Base width in cm
  const baseHeight = 200; // Base height in cm
  const [cuts, setCuts] = useState([]);
  const [leftovers, setLeftovers] = useState([]);
  const [error, setError] = useState(null);

  const handleNewCut = (newCut) => {
    if (isOverlap(newCut, cuts)) {
      setError("The new cut overlaps with an existing cut. Please choose a different position.");
    } else {
      const updatedCuts = [...cuts, newCut];
      const { leftovers } = calculateCuts(baseWidth, baseHeight, updatedCuts);
      setCuts(updatedCuts);
      setLeftovers(leftovers);
      setError(null);
    }
  };

  return (
    <div className="App" style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      <InputForm onNewCut={handleNewCut} error={error} />
      <CuttingPlan baseWidth={baseWidth} baseHeight={baseHeight} cuts={cuts} />
      <StockManager leftovers={leftovers} />
    </div>
  );
}

export default App;
