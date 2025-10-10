"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

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

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    console.log("New Item:", item);

    alert(
      `Item added successfully!\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`
    );

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-500 via-gray-400 to-black p-6">
      <form
        onSubmit={handleSubmit}
        className=" w-full max-w-md p-6 flex flex-col gap-6"
      >
        <div>
          <label className="block text-white font-semibold mb-2">
            Item Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter item name"
            className="w-full px-4 py-2 border border-gray-600 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">
            Quantity
          </label>
          <div className="flex items-center justify-between gap-6">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className="w-12 h-12 flex items-center justify-center text-2xl font-bold 
                         bg-red-500 text-white rounded-full hover:bg-red-700 
                         disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              -
            </button>
            <span className="text-3xl font-semibold text-white">
              {quantity}
            </span>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className="w-12 h-12 flex items-center justify-center text-2xl font-bold 
                         bg-green-500 text-white rounded-full hover:bg-green-700 
                         disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              +
            </button>
          </div>
          <p className="text-gray-100 text-sm mt-2">Allowed range: 1–20</p>
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          >
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

        <div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg 
                       hover:bg-blue-800 transition shadow-md"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}
