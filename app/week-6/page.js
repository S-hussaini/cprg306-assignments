import React from "react";
import ItemList from "./item-list";

export default function Page(){
  return(
    <main className =" p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10 text-gray-900 tracking-tight drop-shadow-sm">
        Shopping List
      </h1>
      <div>
        <ItemList/>
      </div>
    </main>
  );
}