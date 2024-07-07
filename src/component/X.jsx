import React from "react";
import Y from "./Y";
import Z from "./Z";

const X = () => {
  return (
    <div className="text-red-700 text-4xl flex justify-center items-center flex-col w-full h-[100vh]">
      <p>Y Component</p>
      <Y />
      <p>Z Component</p>
      <Z />
    </div>
  );
};

export default X;
