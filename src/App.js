import React from "react";
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Products from "./Components/Products"
import { Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </>
  );
}
