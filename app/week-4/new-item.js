"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="flex flex-col gap-4 items-center p-6 border-4 border-gray-700 bg-gray-800 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-white">
        Quantity
      </h2>

      <div className="flex items-center gap-6">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="w-12 h-12 flex items-center justify-center text-2xl font-bold bg-red-500 text-white rounded-full hover:bg-red-900 disabled:opacity-50 disabled:cursor-not-allowed transition">
          -
        </button>

        <span className="text-3xl font-semibold text-white">{quantity}</span>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className="w-12 h-12 flex items-center justify-center text-2xl font-bold bg-green-500 text-white rounded-full hover:bg-emerald-900 disabled:opacity-50 disabled:cursor-not-allowed transition">
          +
        </button>
      </div>

      <p className="text-gray-400 text-sm">
        Allowed range: 1-20
        </p>
    </div>
  );
}
