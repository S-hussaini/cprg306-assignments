import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="min-h-screen from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-semibold mb-8 text-gray-50 tracking-wide text-center">
        Week 5 — New Item
      </h1>
      <div className="w-full max-w-md bg-gray-400 p-6 rounded-2xl shadow-lg">
        <NewItem />
      </div>
    </main>
  );
}
