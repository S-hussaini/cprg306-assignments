"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    if(quantity < 20) {
      setQuantity(quantity + 1);  
    }
  }

  function decement() {
    if(quantity > 1) {
      setQuantity(quantity - 1);  
    }
  }

 return (
  <div className ="flex flex-col gap-4 max-w-md items-center p-6 border border-gray-200 rounded-lg shadow">
    <h2 className ="text-2xl font-semibold text-gray-700">
      Quantity:
    </h2>
    <div className ="flex items-center gap-4">
      <button 
        onClick={decement}
        disabled={quantity === 1}
        className ="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50">
      </button>
      <span className ="text-xl font-medium text-gray-800">
        {quantity}
      </span>
      <button 
        onClick={increment}
        disabled={quantity === 20}
        className ="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50">
        +
      </button>
    </div>
    <p className ="text-gray-600">
      Allowed reng: 1-20
    </p>
  </div>
 )
}