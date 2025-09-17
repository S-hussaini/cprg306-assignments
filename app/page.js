import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="http://localhost:3000/week-2">
        Go To Week 2 →
        </Link>
      </p>
    </div>
  );
}
export default HomePage;