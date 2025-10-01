import NewItem from "./new-item";

export default function Page (){
  return (
    <main className = "p-6">
      <h1 className = "text-3xl font-bold mb-6 text-gray-800">
      Add New Item
      </h1>
      <NewItem/>
    </main>
  );
}