import React from 'react';

const InventoryList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <strong>{item.name}</strong> - Quantity: {item.quantity}, Price: ${item.price.toFixed(2)}
        </li>
      ))}
    </ul>
  );
};

export default InventoryList;
