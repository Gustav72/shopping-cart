import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Products from "./Components/Products";

import { Route, Routes, Link } from "react-router-dom";
import React, { useState } from "react";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function handleVisible() {
    if (isVisible) setIsVisible(false);
  }

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.product.name === item.name
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...prevItems, { product: item, quantity: 1 }];
      }
    });
  };

  const handleUpdateCartItem = (item, action) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.product.name === item.product.name
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
      }

      return prevItems;
    });
  };

  return (
    <>
      <div onClick={handleVisible}>
        <Navbar isVisible={setIsVisible} cartItems={cartItems} />
        <div className="home">
          <div className="home-container">
            <div className="call-to-action">
              <h1>Puppies That Stay Puppies!</h1>
              <button className="home-button">
                <Link to="/products" className="link">
                  Get One Now!
                </Link>
              </button>
            </div>
            <div>
              <img
                className="home-puppy"
                src="images/home-puppies.png"
                alt="forever puppy"
              />
            </div>
          </div>
          <img
            className="home-image"
            src="./shopping-cart/images/green-curve.png"
            aria-label="none"
          />
        </div>
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
        onUpdateCartItem={handleUpdateCartItem}
        className={isVisible ? "cart-active" : "cart-inactive"}
      />
    </>
  );
}
