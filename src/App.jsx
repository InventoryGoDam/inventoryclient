import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import X from "./component/X";
import "./index.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<X/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
