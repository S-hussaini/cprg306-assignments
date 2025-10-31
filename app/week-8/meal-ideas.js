"use client";

import { useState } from "react";
import { useEffect } from "react";


async function fetchMealIdeas(ingredient) {
  try {
    if (!ingredient) return[];
    
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    if (!response.ok)
      {
        throw new Error(
          `HTTP Error! status ${response.status}\n ${response.message}`
        );
  }
    const data = await response.json();
    console.log( data);
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

   useEffect(() => {
    async function loadMeals() {
      if (!ingredient) return;
      console.log("Loading meals for ingredient:", ingredient);
      const mealData = await fetchMealIdeas(ingredient);
      setMeals(mealData);
    }

    loadMeals();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-black text-xl font-bold mb-4">
        Meal Ideas for {ingredient || "Select an item"}
      </h2>

      {meals.length > 0 ? (
        <ul>
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="bg-gray-50 border border-gray-300 rounded-lg p-4 mb-4 shadow-sm list-none w-[400px] cursor-pointer hover:bg-gray-100"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-24 h-24 rounded-lg mb-2"
              />
              <span className="text-black font-medium">{meal.strMeal}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-800">No meal ideas found.</p>
      )}
    </div>
  );
}
