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

  function updateCartItem(item, action) {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.product.name === item.name
      );
      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        if (action === "add") {
          updatedItems[existingItemIndex].quantity += 1;
        } else if (action === "delete") {
          updatedItems[existingItemIndex].quantity -= 1;

          if (updatedItems[existingItemIndex].quantity <= 0) {
            updatedItems.splice(existingItemIndex, 1);
          }
        }
        return updatedItems;
      } else if (action === "add") {
        return [...prevItems, { product: item, quantity: 1 }];
      }
      return prevItems;
    });
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
              element={
                <Products onAddToCart={(item) => updateCartItem(item, "add")} />
              }
            />
          </Routes>
        </div>
      </div>
      <Cart
        cartItems={cartItems}
        onUpdateCartItems={updateCartItem}
        className={isVisible ? "cart-active" : "cart-inactive"}
      />
    </>
  );
}
