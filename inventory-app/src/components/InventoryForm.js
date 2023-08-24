import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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
    setShowSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className="form-input"
        label="Item Name"
        variant="outlined"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        required
      />
      <TextField
        className="form-input"
        label="Quantity"
        variant="outlined"
        type="number"
        value={itemQuantity}
        onChange={(e) => setItemQuantity(e.target.value)}
        required
      />
      <TextField
        className="form-input"
        label="Price"
        variant="outlined"
        type="number"
        step="0.01"
        value={itemPrice}
        onChange={(e) => setItemPrice(e.target.value)}
        required
      />
      <Button
        className="form-button"
        variant="contained"
        color="primary"
        type="submit"
      >
        Add Item
      </Button>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="success"
          onClose={handleSnackbarClose}
        >
          Item added successfully!
        </MuiAlert>
      </Snackbar>
    </form>
  );
};

export default InventoryForm;
