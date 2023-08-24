import React from "react";
import InventoryList from "./InventoryList";

const InventoryPage = ({ items }) => {
  return (
    <div>
      <h1>Inventory List</h1>
      <InventoryList items={items} />
    </div>
  );
};

export default InventoryPage;
