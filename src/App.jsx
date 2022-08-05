import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Edit from "./pages/Edit/Edit";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div className="bg-gray-300 h-full min-h-screen select-none font-[poppins] mx-auto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
