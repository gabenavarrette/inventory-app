import React, { useState } from "react";

const InventoryForm = ({ onAddItem }) => {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);

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
    setItemName("");
    setItemQuantity("");
    setItemPrice("");
    setShowSnackbar(true); // Show snackbar after adding item
    setTimeout(() => setShowSnackbar(false), 2000); // Hide snackbar after 2 seconds
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Item Name:
        <input
          className="form-input"
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Quantity:
        <input
          className="form-input"
          type="number"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Price:
        <input
          className="form-input"
          type="number"
          step="0.01"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
          required
        />
      </label>
      <br />
      <button className="form-button" type="submit">
        Add Item
      </button>
      {showSnackbar && (
        <div className="snackbar">
          <div className="alert success">
            Item added successfully!
          </div>
        </div>
      )}
    </form>
  );
};

export default InventoryForm;