"use client";

import { getItems, addItem } from "../_services/shopping-list-service";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const router = useRouter();
  const { user, loading } = useUserAuth();

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Load items from Firestore
  const loadItems = async () => {
    if (!user) return;
    const itemsFromDB = await getItems(user.uid);
    setItems(itemsFromDB);
  };

  useEffect(() => {
    if (!loading && !user) {
      router.push("/week-10/login"); // update login path if needed
    } else if (user) {
      loadItems();
    }
  }, [user, loading, router]);

  const handleAddItem = async (newItem) => {
    if (!user) return;

    const id = await addItem(user.uid, newItem);
    if (id) {
      setItems((prevItems) => [...prevItems, { id, ...newItem }]);
    }
  };

  const handleItemSelect = (item) => {
    if (!item || !item.name) return;

    const cleanedName = item.name
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
      .split(",")[0]
      .trim();
    setSelectedItemName(cleanedName);
    console.log("Selected ingredient:", cleanedName);
  };

  return (
    <main className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10 text-gray-900 tracking-tight drop-shadow-sm">
        Week 10 — Shopping List and Meal Ideas
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
