import React, { useState } from 'react';
import './App.css';
import InventoryForm from './components/InventoryForm';
import InventoryList from './components/InventoryList';

function App() {
  const [inventory, setInventory] = useState([]);

  const handleAddItem = (newItem) => {
    setInventory([...inventory, newItem]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inventory App</h1>
        <InventoryForm onAddItem={handleAddItem} />
        <InventoryList items={inventory} />
      </header>
    </div>
  );
}

export default App;
