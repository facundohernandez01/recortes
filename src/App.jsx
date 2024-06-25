import React, { useState, useEffect } from 'react';
import InputForm from './components/InputForm';
import CuttingPlan from './components/CuttingPlan';
import StockManager from './components/StockManager';
import { calculateCuts, isOverlap, getAvailablePoints } from './cuttingAlgorithm';

function App() {
  const baseWidth = 250; // Base width in cm
  const baseHeight = 200; // Base height in cm
  const [cuts, setCuts] = useState([]);
  const [leftovers, setLeftovers] = useState([]);
  const [error, setError] = useState(null);
  const [availablePoints, setAvailablePoints] = useState({ xPoints: [0], yPoints: [0] });

  useEffect(() => {
    const points = getAvailablePoints(baseWidth, baseHeight, cuts);
    setAvailablePoints(points);

    // Calculate leftovers whenever cuts change
    const { leftovers } = calculateCuts(baseWidth, baseHeight, cuts);
    setLeftovers(leftovers);
  }, [baseWidth, baseHeight, cuts]);

  const handleNewCut = (newCut) => {
    if (isOverlap(newCut, cuts)) {
      setError("Parte del área elegida ya fue cortada. Seleccionar otra posición.");
    } else {
      const updatedCuts = [...cuts, newCut];
      setCuts(updatedCuts);
      // Calculate leftovers after adding new cut
      const { leftovers } = calculateCuts(baseWidth, baseHeight, updatedCuts);
      setLeftovers(leftovers);
      setError(null);
    }
  };

  const handleDeleteCut = (index) => {
    const updatedCuts = cuts.filter((_, i) => i !== index);
    setCuts(updatedCuts);
    // Calculate leftovers after deleting cut
    const { leftovers } = calculateCuts(baseWidth, baseHeight, updatedCuts);
    setLeftovers(leftovers);
  };

  return (
    <div className="App" style={{ margin: 0, padding: 0 }}>
      <InputForm onNewCut={handleNewCut} error={error} availablePoints={availablePoints} />
      <CuttingPlan baseWidth={baseWidth} baseHeight={baseHeight} cuts={cuts} onDeleteCut={handleDeleteCut} />
      <StockManager leftovers={leftovers} onDeleteCut={handleDeleteCut} />
    </div>
  );
}

export default App;
