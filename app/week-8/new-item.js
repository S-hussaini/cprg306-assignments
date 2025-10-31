"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function increment() 
  {
    if (quantity < 20) setQuantity(quantity + 1);
  }

  function decrement() 
  {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  function handleSubmit(event) 
  {
    event.preventDefault();

    const item = { 
      name, 
      quantity, 
      category };
    
      onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 border border-gray-300 rounded-lg p-4 mb-4 shadow-sm list-none w-[400px] cursor-pointer hover:bg-gray-100">
        <h2 className="text-black text-2xl font-bold text-center mb-2">
          Add New Item
        </h2>

        <div>
          <label className="block text-gray-800 font-semibold mb-1 text-sm">
            Item Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter item name"
            className="w-full px-3 py-1.5 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 text-sm"
          />
        </div>

        <div>
          <label className="block text-black font-semibold mb-1 text-sm">
            Quantity
          </label>
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className="w-8 h-8 flex items-center justify-center text-xl font-bold bg-red-500 text-white rounded-full hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition">
              -
            </button>

            <span className="text-xl font-semibold text-gray-800">{quantity}</span>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className="w-8 h-8 flex items-center justify-center text-xl font-bold bg-green-500 text-white rounded-full hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition">
              +
            </button>
        </div>

        <p className="text-gray-800 text-xs mt-1">
          Range: 1–20
        </p>
        </div>

          <div>
            <label className="block text-black font-semibold mb-1 text-sm">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-1.5 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 text-sm">
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen foods">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 transition shadow-md text-sm">
            Add Item
          </button>
      </form>
      <br></br>
    </div>
  );
}
