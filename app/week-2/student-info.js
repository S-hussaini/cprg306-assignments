import React from "react";
import Link from "next/link";

const StudentInfo = () => {
  return (
    <div>
      <h1>Name: Sheeba Hussaini</h1>
      <p>
        GitHub:{" "}
        <Link
          href="https://github.com/S-hussaini/cprg306-assignments"
          target="_blank"
          rel="noopener noreferrer"
        >
          S-hussaini/cprg306-assignments
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
