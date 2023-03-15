import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Products from "./Components/Products";

import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function handleVisible() {
    if (isVisible) setIsVisible(false);
  }

  function handleAddToCart(item) {
    setCartItems([...cartItems, item]);
  }

  return (
    <>
      <div onClick={handleVisible}>
        <Navbar isVisible={setIsVisible} />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={<Products onAddToCart={handleAddToCart} />}
            />
          </Routes>
        </div>
      </div>
      <Cart
        cartItems={cartItems}
        className={isVisible ? "cart-active" : "cart-inactive"}
      />
    </>
  );
}
