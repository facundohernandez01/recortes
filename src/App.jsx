import React, { useState } from 'react';
import InputForm from './components/InputForm';
import CuttingPlan from './components/CuttingPlan';
import StockManager from './components/StockManager';
import { calculateCuts } from './cuttingAlgorithm';

function App() {
  const baseWidth = 250; // Base width in cm
  const baseHeight = 200; // Base height in cm
  const [cuts, setCuts] = useState([]);
  const [leftovers, setLeftovers] = useState([]);

  const handleNewCut = (newCut) => {
    const updatedCuts = [...cuts, newCut];
    const { remainingWidth, remainingHeight, leftovers } = calculateCuts(baseWidth, baseHeight, updatedCuts);
    setCuts(updatedCuts);
    setLeftovers(leftovers);
  };

  return (
    <div className="App">
      <InputForm onNewCut={handleNewCut} />
      <CuttingPlan baseWidth={baseWidth} baseHeight={baseHeight} cuts={cuts} />
      <StockManager leftovers={leftovers} />
    </div>
  );
}

export default App;
