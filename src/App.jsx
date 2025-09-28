
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"; // 👈 make sure you have a Home.jsx inside src/Pages/

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 👇 path is required */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
