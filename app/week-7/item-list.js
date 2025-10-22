"use client";
import React from "react";
import Item from "../week-6/item";
import { useState } from "react";
import items from "./items.json";

//Use the useState hook to create a state variable sortBy and its setter function setSortBy. This will be used to determine the sorting preference of the user.
export default function ItemList() {
  const [sortBy, setSortBy] = useState("name"); 

  const sortItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } 
    return 0;
  });




  return (
    <main>
      <div className ="flex flex-wrap gap-4 mb-10 items-center ">
        
        <p className ="text-black">
          Sort By:
        </p>
        <button
          onClick = {() => setSortBy ("name")}
          className = {`px-4 py-2 rounded ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
          Sort by Name
        </button>
        <button
          onClick = {() => setSortBy ("category")}
          className = {`px-4 py-2 rounded ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
          Sort by Category
          </button>
      </div>

      <ul>
        {sortItems.map((item) =>(
          <Item
          key = {item.id}
          name = {item.name}
          quantity = {item.quantity}
          category = {item.category}
          />
        ))}
      </ul>
    </main>
  );
};

