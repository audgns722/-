import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { smooth } from "./utils/smooth";
import Detail_sec2 from "./components/detail/Detail_sec2";

const App = () => {
  useEffect(() => {
    smooth();
  });
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/detail2" element={<Detail_sec2 />}></Route>
    </Routes>
  );
};

export default App;
