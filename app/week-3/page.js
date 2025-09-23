import react from "react";
import ItemList from "./item-list";

export default function Page(){
  return(
    <main className =" p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className = "text-3xl font-bold mb-6 text-gray-800">
        Shoping list
      </h1>
      <div>
        <ItemList/>
      </div>
    </main>
  );
}