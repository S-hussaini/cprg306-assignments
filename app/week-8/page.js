"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";


//Initialize a state variable (e.g., items) with the data from items.json.

export default function Page()
{
  const [items, setItems] = useState(itemsData);

  const handelAddItem = (newItem) => {
    setItems((prevItems) =>[...prevItems, newItem]);
  };

  return (
    <main className = " p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10 text-gray-900 tracking-tight drop-shadow-sm">
        Week 7 --- Shopping List
      </h1>
      <NewItem onAddItem={handelAddItem} />
      <ItemList items={items} />
    </main>
  );
}