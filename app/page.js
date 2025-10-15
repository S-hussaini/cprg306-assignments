import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
        CPRG 306: Web Development 2 - Assignments
      </h1>

      <div className="flex flex-col md:flex-row gap-4">
        <Link
          href="http://localhost:3000/week-2"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition transform hover:scale-105">
          Go To Week 2 →
        </Link>
        <Link
          href="http://localhost:3000/week-3"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition transform hover:scale-105">
          Go To Week 3 →
        </Link>
        <Link
          href="http://localhost:3000/week-4"
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition transform hover:scale-105">
          Go To Week 4 →
        </Link>
        <Link
          href="http://localhost:3000/week-5"
          className="bg-amber-300 hover:bg-amber-400 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition transform hover:scale-105">
          Go To Week 5 →
        </Link>

        <Link
          href="http://localhost:3000/week-6"
          className="bg-red-950 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition transform hover:scale-105">
          Go To Week 6 →
        </Link> 


      </div>
    </div>
  );
};

export default HomePage;
