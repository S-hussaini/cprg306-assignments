import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-gray-50 border border-gray-300 rounded-lg p-4 mb-4 shadow-sm list-none w-[400px]">
      <div className="text-gray-900 text-lg">{name}</div>
      <div className="text-gray-800 mt-1">Quantity: {quantity}</div>
      <div className="text-gray-800 mt-1">category: {category}</div>
    </li>
  );
};

export default Item;
