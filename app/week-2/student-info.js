import React from "react";
import Link from "next/link";

const StudentInfo = () => {
  return (
    <dive>
      <h1> Name: Sheeba Hussaini </h1>
      <p>
        GitHub:{" "}
        <Link href="https://github.com/S-hussaini/cprg306-assignments.git" target="_blank"> 
        S-hussaini/cprg306-assignments
        </Link>
      </p>
    </dive>
  );
};
export default StudentInfo;
