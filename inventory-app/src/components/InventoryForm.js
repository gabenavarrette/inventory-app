import React, { useState } from 'react';

const InventoryForm = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new item object
    const newItem = {
      name: itemName,
      quantity: parseInt(itemQuantity),
      price: parseFloat(itemPrice),
    };
    // Call the parent function to add the item
    onAddItem(newItem);
    // Clear the form
    setItemName('');
    setItemQuantity('');
    setItemPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Item Name:
        <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} required />
      </label>
      <label>
        Quantity:
        <input type="number" value={itemQuantity} onChange={(e) => setItemQuantity(e.target.value)} required />
      </label>
      <label>
        Price:
        <input type="number" step="0.01" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} required />
      </label>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default InventoryForm;
