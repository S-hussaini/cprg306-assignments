"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";


export default function Page() {
  const [items, setItems] = useState(itemsData);

  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    if (!item || !item.name) return;

    const cleanedName = item.name
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uFE0F|\u200D)/g, "")
      .split(",")[0] 
      .trim();
    setSelectedItemName(cleanedName);
    console.log("Selected ingredient:", cleanedName);
  };

  return (
    <main className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10 text-gray-900 tracking-tight drop-shadow-sm">
        Week 8 — Shopping List and Meal Ideas
      </h1>

      <div className="flex flex-col md:flex-row gap-10 items-start w-full justify-center">
        <div className="flex flex-col items-center">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="flex flex-col items-center">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
