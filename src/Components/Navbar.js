import { Link } from "react-router-dom";
import cartItems from "./Cart";

import React, { useState } from "react";

const Navbar = ({ isVisible }) => {
  const [isCartNumVisible, setIsCartNumVisible] = useState(false);

  function handleCartNumber() {
    if (isCartNumVisible) setIsCartNumVisible(false);
  }

  function revealCart() {
    isVisible((prevState) => !prevState);
  }

  return (
    <nav className="nav-bar">
      <Link to="/" className="store-name">
        Forever Pups
      </Link>
      <ul>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="link">
            Puppies
          </Link>
        </li>
        <li>
          <div className="cart-table">
            <img
              src="images/cart-outline.svg"
              alt="shopping cart"
              onClick={revealCart}
              className="cart-img"
            />
            <div
              className={
                isCartNumVisible ? "cart-img-active" : "cart-img-inactive"
              }
            >
              {cartItems.length}
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
