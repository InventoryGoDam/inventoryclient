import React from "react";
import { useDispatch } from "react-redux";
import { setCount, setDecre, setIncre } from "../redux/slices/counterSlice";

const Z = () => {
  const dispatch=useDispatch()
  const incHandler=()=>{
    dispatch(setIncre())
  }

  const decHandler=()=>{
    dispatch(setDecre())
  }

  const resetHandler=()=>{
    dispatch(setCount())
  }
  return (
    <div className="text-2xl flex gap-5 mt-5">
      <p className="text-gray-700">From Z:</p>
      <button className="border-2" onClick={incHandler}>Inc</button>
      <button className="border-2" onClick={decHandler}>Decre</button>
      <button className="border-2" onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default Z;
